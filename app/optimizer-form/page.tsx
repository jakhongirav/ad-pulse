"use client";

import { useState } from "react";
import { 
  Brain, 
  Sparkles,
  AlertTriangle,
  Target,
  Zap,
  MessageSquare,
  CheckCircle,
  XCircle,
  Loader2
} from "lucide-react";

interface FormData {
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

interface Recommendation {
  title: string;
  status: "success" | "warning" | "error";
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    market: "",
    ageRange: "",
    gender: "",
    segment: "",
    platform: "",
    goal: "",
    visualStyle: "",
    headline: "",
    cta: "",
    notes: ""
  });

  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const analyzeWithAI = async () => {
    setIsAnalyzing(true);
    setShowRecommendations(false);

    try {
      // Вызов реального API
      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        console.error('API Error:', data.error);
      }

      // Устанавливаем рекомендации (даже если есть ошибка, API вернет mock данные)
      if (data.recommendations) {
        setRecommendations(data.recommendations);
        setShowRecommendations(true);
      }
    } catch (error) {
      console.error('Failed to analyze campaign:', error);
      
      // Fallback mock рекомендации в случае полного сбоя
      const fallbackRecommendations: Recommendation[] = [
        {
          title: "Connection Error",
          status: "error",
          message: "Unable to connect to AI service. Please check your internet connection and try again."
        },
        {
          title: "Temporary Fallback",
          status: "warning",
          message: "Using offline recommendations. Some features may be limited."
        }
      ];
      
      setRecommendations(fallbackRecommendations);
      setShowRecommendations(true);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleOptimize = (e: React.FormEvent) => {
    e.preventDefault();
    analyzeWithAI();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "border-green-400/30 bg-green-500/5";
      case "warning":
        return "border-yellow-400/30 bg-yellow-500/5";
      case "error":
        return "border-red-400/30 bg-red-500/5";
      default:
        return "border-white/10";
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-4 bg-slate-900/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-indigo-400" />
              <h1 className="text-2xl font-bold text-white">AdPulse</h1>
              <span className="text-sm text-white/60 ml-2">Campaign Optimizer</span>
            </a>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                Documentation
              </a>
              <a href="#" className="px-4 py-2 rounded-lg glass text-white text-sm hover:bg-white/20 transition-all">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-sm font-medium text-white">AI-Powered Campaign Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Optimize Your <span className="gradient-text">Ad Campaign</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Get instant AI-powered recommendations to improve your campaign performance across all platforms
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="glass-card rounded-2xl p-8 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="glass w-10 h-10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-indigo-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">Campaign Details</h2>
              </div>

              <form onSubmit={handleOptimize} className="space-y-6">
                {/* Market / Location */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Market / Location
                  </label>
                  <input
                    type="text"
                    name="market"
                    value={formData.market}
                    onChange={handleInputChange}
                    placeholder="e.g., China, Italy, US"
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                  />
                </div>

                {/* Target Audience */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider">Target Audience</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Age Range</label>
                      <select
                        name="ageRange"
                        value={formData.ageRange}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg glass text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                      >
                        <option value="">Select</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45-54">45-54</option>
                        <option value="55+">55+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg glass text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                      >
                        <option value="">Select</option>
                        <option value="all">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Segment</label>
                    <input
                      type="text"
                      name="segment"
                      value={formData.segment}
                      onChange={handleInputChange}
                      placeholder="e.g., young professionals, parents, gamers"
                      className="w-full px-4 py-3 rounded-lg glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                    />
                  </div>
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Platform</label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                  >
                    <option value="">Select platform</option>
                    <option value="Meta">Meta (Facebook/Instagram)</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Google">Google Ads</option>
                  </select>
                </div>

                {/* Campaign Goal */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Campaign Goal</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                  >
                    <option value="">Select goal</option>
                    <option value="Awareness">Awareness</option>
                    <option value="Traffic">Traffic</option>
                    <option value="Leads">Leads</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>

                {/* Visual Style */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Visual Style</label>
                  <input
                    type="text"
                    name="visualStyle"
                    value={formData.visualStyle}
                    onChange={handleInputChange}
                    placeholder="e.g., white minimal, clean luxury, black&gold"
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                  />
                </div>

                {/* Main Message / Headline */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Main Message / Headline</label>
                  <input
                    type="text"
                    name="headline"
                    value={formData.headline}
                    onChange={handleInputChange}
                    placeholder="Your ad headline"
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                  />
                </div>

                {/* CTA / Offer */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">CTA / Offer</label>
                  <input
                    type="text"
                    name="cta"
                    value={formData.cta}
                    onChange={handleInputChange}
                    placeholder="e.g., Shop Now, Get 50% Off"
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Additional context about your campaign"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full py-4 rounded-xl glass-strong text-white font-semibold hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Optimize Campaign
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - AI Recommendations */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="glass w-10 h-10 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-purple-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">AI Recommendations</h2>
                </div>

                {!showRecommendations && !isAnalyzing && (
                  <div className="text-center py-12">
                    <MessageSquare className="w-16 h-16 mx-auto mb-4 text-white/30" />
                    <p className="text-white/60">
                      Fill out the form and click "Optimize Campaign" to get AI-powered recommendations
                    </p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-12">
                    <Loader2 className="w-16 h-16 mx-auto mb-4 text-indigo-400 animate-spin" />
                    <p className="text-white/80 font-medium mb-2">Analyzing your campaign...</p>
                    <p className="text-white/60 text-sm">Our AI is evaluating cultural fit, platform optimization, and audience targeting</p>
                  </div>
                )}

                {showRecommendations && (
                  <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className={`glass-card rounded-xl p-5 border-2 ${getStatusColor(rec.status)} transition-all hover:scale-[1.02]`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 mt-0.5">
                            {getStatusIcon(rec.status)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{rec.title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">{rec.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {showRecommendations && (
                <div className="glass-card rounded-xl p-6 border-2 border-indigo-400/30 bg-indigo-500/5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Pro Tip</h3>
                      <p className="text-white/70 text-sm">
                        Based on your inputs, consider running A/B tests with 2-3 creative variations. 
                        This can help you identify the best-performing combination for your target audience.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
