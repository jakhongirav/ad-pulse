import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Инициализация OpenAI клиента
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface CampaignData {
  market: string;
  ageRange: string;
  gender: string;
  segment: string;
  platform: string;
  goal: string;
  visualStyle: string;
  headline: string;
  cta: string;
  notes: string;
}

interface AIResponse {
  cultural_risk: string;
  audience_fit: string;
  platform_fit: string;
  cta_quality: string;
  final_status: string;
}

// Функция для построения промпта
function buildPrompt(data: CampaignData): string {
  return `You are an advertising campaign auditor AI.
Your job is to analyze a draft ad campaign and return only structured, practical recommendations.

Evaluate the campaign based on:
1. Cultural and regional sensitivity for the selected market.
2. Message vs target audience fit (age, gender, segment).
3. Channel/platform fit (Meta / TikTok / Google).
4. Clarity of offer and call to action.
5. Overall launch readiness.

Input data:
- Market: ${data.market || "Not specified"}
- Target audience age: ${data.ageRange || "Not specified"}
- Target audience gender: ${data.gender || "Not specified"}
- Target audience segment: ${data.segment || "Not specified"}
- Platform: ${data.platform || "Not specified"}
- Campaign goal: ${data.goal || "Not specified"}
- Visual style / main colors / creative style: ${
    data.visualStyle || "Not specified"
  }
- Headline / main message: ${data.headline || "Not specified"}
- CTA / offer: ${data.cta || "Not specified"}
- Notes / context: ${data.notes || "None"}

Return ONLY valid JSON with the following keys:
{
  "cultural_risk": "string",
  "audience_fit": "string",
  "platform_fit": "string",
  "cta_quality": "string",
  "final_status": "string_short_summary"
}

Be specific and direct. Do not invent performance numbers. Do not add marketing fluff. Be honest.
If something is fine, say it's fine.
If something is risky, explain why and suggest 1 concrete fix.
Language: English.`;
}

// Функция для определения статуса на основе анализа
function determineStatus(text: string): "success" | "warning" | "error" {
  const lowerText = text.toLowerCase();

  // Проверяем на критические проблемы
  if (
    lowerText.includes("high risk") ||
    lowerText.includes("not recommended") ||
    lowerText.includes("avoid") ||
    lowerText.includes("serious issue") ||
    lowerText.includes("critical") ||
    lowerText.includes("missing essential")
  ) {
    return "error";
  }

  // Проверяем на предупреждения
  if (
    lowerText.includes("warning") ||
    lowerText.includes("caution") ||
    lowerText.includes("consider") ||
    lowerText.includes("suggest") ||
    lowerText.includes("could improve") ||
    lowerText.includes("may want to") ||
    lowerText.includes("recommend")
  ) {
    return "warning";
  }

  // По умолчанию - успех
  return "success";
}

// Функция для парсинга ответа LLM
function parseLLMResponse(aiResponse: AIResponse) {
  return [
    {
      title: "Cultural & Regional Check",
      status: determineStatus(aiResponse.cultural_risk),
      message: aiResponse.cultural_risk,
    },
    {
      title: "Audience Fit",
      status: determineStatus(aiResponse.audience_fit),
      message: aiResponse.audience_fit,
    },
    {
      title: "Platform Fit",
      status: determineStatus(aiResponse.platform_fit),
      message: aiResponse.platform_fit,
    },
    {
      title: "CTA / Offer Quality",
      status: determineStatus(aiResponse.cta_quality),
      message: aiResponse.cta_quality,
    },
    {
      title: "Launch Readiness",
      status: determineStatus(aiResponse.final_status),
      message: aiResponse.final_status,
    },
  ];
}

export async function POST(request: NextRequest) {
  try {
    // Проверяем наличие API ключа
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }

    // Получаем данные из запроса
    const campaignData: CampaignData = await request.json();

    // Валидация минимальных данных
    if (
      !campaignData.market &&
      !campaignData.platform &&
      !campaignData.headline
    ) {
      return NextResponse.json(
        { error: "At least market, platform, or headline must be provided" },
        { status: 400 }
      );
    }

    // Строим промпт
    const prompt = buildPrompt(campaignData);

    // Вызываем OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an expert advertising campaign auditor. You provide clear, actionable feedback in JSON format.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
      response_format: { type: "json_object" },
    });

    // Получаем ответ
    const responseContent = completion.choices[0]?.message?.content;

    if (!responseContent) {
      throw new Error("No response from OpenAI");
    }

    // Парсим JSON ответ
    const aiResponse: AIResponse = JSON.parse(responseContent);

    // Преобразуем в формат для фронтенда
    const recommendations = parseLLMResponse(aiResponse);

    // Возвращаем результат
    return NextResponse.json({
      success: true,
      recommendations,
      rawResponse: aiResponse, // На случай если нужен сырой ответ
    });
  } catch (error: any) {
    console.error("Error in optimize API:", error);

    // Обработка различных типов ошибок
    if (error?.error?.type === "insufficient_quota") {
      return NextResponse.json(
        {
          error: "OpenAI API quota exceeded. Please check your billing.",
          recommendations: getMockRecommendations(),
        },
        { status: 200 } // Возвращаем 200 с mock данными
      );
    }

    return NextResponse.json(
      {
        error:
          error?.message || "An error occurred while analyzing the campaign",
        recommendations: getMockRecommendations(),
      },
      { status: 200 } // Возвращаем 200 с mock данными для graceful degradation
    );
  }
}

// Fallback mock данные на случай ошибки API
function getMockRecommendations() {
  return [
    {
      title: "Cultural & Regional Check",
      status: "warning",
      message:
        "API temporarily unavailable. Using mock recommendations. Please configure OpenAI API key.",
    },
    {
      title: "Audience Fit",
      status: "success",
      message: "Mock data: Your target audience appears to be well-defined.",
    },
    {
      title: "Platform Fit",
      status: "success",
      message:
        "Mock data: Platform selection seems appropriate for your goals.",
    },
    {
      title: "CTA / Offer Quality",
      status: "warning",
      message:
        "Mock data: Consider testing multiple CTA variations for better results.",
    },
    {
      title: "Launch Readiness",
      status: "success",
      message:
        "Mock data: Campaign structure is ready. Configure OpenAI API for real AI analysis.",
    },
  ];
}
