# Testing Checklist - AdPulse Campaign Optimizer

## ✅ Pre-Launch Checklist

### 1. Dependencies Installation

```bash
npm install
# или
yarn install
```

**Check**: Убедитесь, что установлен пакет `openai` версии ^4.77.0

---

### 2. Environment Configuration

**Create `.env.local` file:**

```bash
# В корне проекта создайте файл .env.local
OPENAI_API_KEY=sk-proj-your-actual-api-key-here
```

**Important Notes:**

- Получите API ключ: https://platform.openai.com/api-keys
- Минимальный баланс: $5 (хватит на сотни тестов)
- `.env.local` уже добавлен в `.gitignore`

---

### 3. File Structure Check

Убедитесь, что все файлы на месте:

```
✅ app/api/optimize/route.ts - Backend API route
✅ app/optimizer-form/page.tsx - Frontend form
✅ app/page.tsx - Landing page
✅ app/globals.css - Стили
✅ package.json - С пакетом openai
✅ .gitignore - С .env.local
✅ README_OPTIMIZER.md - Документация
```

---

## 🧪 Functional Testing

### Test 1: Development Server Start

```bash
npm run dev
```

**Expected Results:**

- ✅ Server starts at http://localhost:3000
- ✅ No compilation errors
- ✅ No TypeScript errors

---

### Test 2: Landing Page

**URL:** http://localhost:3000

**Check:**

- ✅ Страница загружается
- ✅ Glassmorphism эффекты работают
- ✅ Анимации float корректны
- ✅ Навигация работает
- ✅ Кнопка "Campaign Optimizer" ведет на /optimizer-form

---

### Test 3: Optimizer Form Page (Without API Key)

**URL:** http://localhost:3000/optimizer-form

**Scenario:** API ключ НЕ настроен (или неверный)

**Steps:**

1. Заполните форму:

   - Market: China
   - Age: 18-24
   - Platform: TikTok
   - Headline: "Premium Watch Collection"
   - Visual Style: black and gold
   - CTA: Shop Now

2. Нажмите "Optimize Campaign"

**Expected Results:**

- ✅ Кнопка показывает "Analyzing..." с loader
- ✅ Через 3-5 секунд появляются 5 карточек
- ✅ Первая карточка показывает warning: "API temporarily unavailable"
- ✅ Показываются mock рекомендации
- ✅ Статусы: warning/success правильно отображаются с иконками
- ✅ No JavaScript errors in console

---

### Test 4: Optimizer Form Page (With Valid API Key)

**URL:** http://localhost:3000/optimizer-form

**Scenario:** API ключ настроен корректно

**Test Case 1: Cultural Risk Detection**

**Input:**

- Market: China
- Age: 25-34
- Gender: All
- Segment: luxury buyers
- Platform: Meta
- Goal: Sales
- Visual Style: black and white minimalist
- Headline: Elegance in Every Detail
- CTA: Buy Now
- Notes: Premium watch campaign

**Expected AI Response:**

- ✅ Cultural Risk: Должен предупредить о использовании черного/белого в Китае
- ✅ Audience Fit: Оценка соответствия luxury segment
- ✅ Platform Fit: Анализ Meta vs TikTok
- ✅ CTA Quality: Оценка "Buy Now"
- ✅ Launch Readiness: Итоговый вердикт

**Test Case 2: Young Audience on TikTok**

**Input:**

- Market: US
- Age: 18-24
- Gender: All
- Segment: Gen Z, gamers
- Platform: TikTok
- Goal: Awareness
- Visual Style: vibrant, neon colors
- Headline: Level Up Your Style
- CTA: Check it out
- Notes: Gaming accessories

**Expected AI Response:**

- ✅ Cultural Risk: Low risk для US рынка
- ✅ Audience Fit: Должен оценить соответствие Gen Z tone
- ✅ Platform Fit: Positive для TikTok + gaming
- ✅ CTA Quality: "Check it out" - может предложить более сильный CTA
- ✅ Launch Readiness: Likely positive

---

### Test 5: API Error Handling

**Test Scenarios:**

1. **Empty Form Submission:**

   - Оставьте все поля пустыми
   - Нажмите "Optimize"
   - ✅ Should still work (API accepts empty fields)

2. **Network Error Simulation:**

   - Отключите интернет
   - Нажмите "Optimize"
   - ✅ Should show "Connection Error" fallback

3. **Invalid API Key:**
   - Установите неверный ключ в .env.local
   - ✅ Should gracefully fallback to mock data

---

## 🎨 UI/UX Testing

### Visual Elements

**Check on /optimizer-form:**

- ✅ Glassmorphism эффекты на карточках
- ✅ Градиентный фон с animated blobs
- ✅ Status icons (CheckCircle, AlertTriangle, XCircle)
- ✅ Status colors (green/yellow/red borders)
- ✅ Loading spinner animation
- ✅ Hover effects на карточках
- ✅ Responsive layout (проверьте на mobile)

### Responsive Design

**Test Breakpoints:**

- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

---

## 🔧 Code Quality Checks

### TypeScript Compilation

```bash
npm run build
```

**Expected:**

- ✅ No TypeScript errors
- ✅ Successful build

### Linting

**Known Issues:**

- ⚠️ Tailwind warning about `bg-gradient-to-br` vs `bg-linear-to-br` (not critical)

---

## 📊 Performance Testing

### API Response Time

**Expected:**

- First call (cold start): 3-7 seconds
- Subsequent calls: 2-4 seconds

**Note:** OpenAI API может быть медленным - это нормально

### Cost Estimation

**Per Request:**

- Input tokens: ~500-700 tokens
- Output tokens: ~300-500 tokens
- Cost: ~$0.001-0.002 per request

**For 100 tests:** ~$0.10-0.20

---

## 🎓 Demo/Presentation Checklist

### Перед демо убедитесь:

1. ✅ `npm run dev` запущен
2. ✅ API ключ работает
3. ✅ Подготовлены 2-3 тестовых кейса
4. ✅ Browser открыт на /optimizer-form
5. ✅ Developer Console открыт (чтобы показать API calls)
6. ✅ README_OPTIMIZER.md открыт для справки

### Recommended Demo Flow:

1. **Показать Landing Page** (30 сек)

   - "Это наша главная страница AdPulse"

2. **Перейти на Optimizer** (10 сек)

   - "Переходим в модуль Campaign Optimizer"

3. **Заполнить форму** (1 мин)

   - China + luxury + black/white (cultural risk case)

4. **Запустить анализ** (30 сек)

   - "Отправляем данные в AI"
   - Показать loading state

5. **Объяснить результаты** (2 мин)

   - Пройтись по 5 карточкам
   - Объяснить систему статусов
   - Показать конкретные рекомендации

6. **Показать код** (1 мин - опционально)
   - API route structure
   - Prompt engineering

**Total Demo Time:** ~5 минут

---

## 🚨 Common Issues & Solutions

### Issue: "OpenAI API key is not configured"

**Solution:**

```bash
# Проверьте .env.local
cat .env.local

# Должно быть:
OPENAI_API_KEY=sk-proj-...

# Перезапустите dev server
npm run dev
```

---

### Issue: "insufficient_quota"

**Solution:**

- Пополните баланс: https://platform.openai.com/account/billing
- Или используйте mock mode (автоматически)

---

### Issue: Slow API Response

**This is Normal:**

- OpenAI API: 3-5 seconds
- First request может быть медленнее (cold start)
- Показывайте loading indicator пользователям

---

### Issue: CORS Error

**Solution:**

- Next.js API routes автоматически обрабатывают CORS
- Убедитесь что используете `/api/optimize` (не external URL)

---

## ✅ Final Checklist Before Submission

- [ ] Все зависимости установлены
- [ ] API ключ настроен и работает
- [ ] Tested with real OpenAI API
- [ ] Tested fallback mode (without API key)
- [ ] Responsive design проверен
- [ ] No console errors
- [ ] Build successful (`npm run build`)
- [ ] README_OPTIMIZER.md актуален
- [ ] Git repo clean (no .env.local committed)
- [ ] Demo flow отрепетирован

---

## 📝 Notes for Improvements (Post-Demo)

Если спросят "что можно улучшить?":

1. **Database Integration** - Сохранение истории кампаний
2. **User Authentication** - Login/signup система
3. **Campaign Templates** - Готовые шаблоны по индустриям
4. **A/B Testing Module** - Сравнение вариантов креативов
5. **API Integration** - Прямой экспорт в Meta/TikTok Ads
6. **Analytics Dashboard** - Отслеживание performance
7. **Team Collaboration** - Sharing и комментарии
8. **Multi-language Support** - Промпты на разных языках
9. **Advanced AI Models** - GPT-4 для более глубокого анализа
10. **Batch Processing** - Анализ нескольких кампаний сразу

---

## 🎯 Success Criteria

**Minimum Viable Demo:**

- ✅ Form loads without errors
- ✅ AI returns recommendations (or graceful fallback)
- ✅ UI looks professional
- ✅ Can explain technical architecture

**Excellent Demo:**

- ✅ All of above +
- ✅ Real AI recommendations (not mock)
- ✅ Cultural risk detection working
- ✅ Multiple test cases prepared
- ✅ Can discuss prompt engineering
- ✅ Can explain error handling strategy

---

**Good luck with your demo! 🚀**
