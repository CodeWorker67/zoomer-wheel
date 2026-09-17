# Zoomer Wheel — Telegram Mini App (тест)

Колесо фортуны в стиле [zoomer_landing](../zoomer_landing): React 18, Vite 5, Tailwind 3, Framer Motion.

## Что нужно установить

- Node.js 18+
- [ngrok](https://ngrok.com/) (или аналог с HTTPS)
- Запущенный бот Zoomer с `TG_TOKEN` и `WHEEL_MINIAPP_URL` в `.env`

## Локальный запуск связки

### 1. Фронт мини-приложения

```powershell
cd C:\Users\nusht\PycharmProjects\PortfolioFreelance\BotForSale\Elvis\zoomer_wheel
npm install
npm run dev
```

Vite слушает **http://localhost:5174** (`strictPort: true`, лендинг может занимать 5173).

Проверка в браузере: откройте `http://localhost:5174` — колесо должно крутиться (приз пока случайный на клиенте, без бэкенда).

### 2. HTTPS-туннель (ngrok)

В **отдельном** терминале:

```powershell
ngrok http 5174
```

Скопируйте **HTTPS**-URL вида `https://xxxx.ngrok-free.app` (без пути в конце).

Важно:

- Telegram принимает только **https** для Web App.
- При каждом новом запуске ngrok (бесплатный план) URL меняется — обновите `.env` и перезапустите бота.
- На странице ngrok иногда нужно один раз нажать «Visit Site» в браузере, если включён interstitial.

### 3. Бот Zoomer

В `C:\Users\nusht\PycharmProjects\PortfolioFreelance\BotForSale\Elvis\Zoomer\.env`:

```env
WHEEL_MINIAPP_URL=https://xxxx.ngrok-free.app
```

Перезапустите бота (как обычно запускаете `main.py`).

В Telegram отправьте боту:

```
/wheel
```

Появится inline-кнопка **«Открыть колесо фортуны»** — она открывает мини-приложение. Кнопка в меню бота (Menu Button) **не** используется.

### 4. BotFather (если Web App не открывается)

1. [@BotFather](https://t.me/BotFather) → ваш бот → **Bot Settings** → **Configure Mini App** / домен (актуальный пункт в меню).
2. Укажите домен из ngrok, например `xxxx.ngrok-free.app` (без `https://`).

Если ошибка «invalid Web App URL» — проверьте, что URL в `.env` совпадает с ngrok и начинается с `https://`.

## Сборка для VPS (позже)

```powershell
npm run build
```

Статику из `dist/` можно отдать через nginx; в `.env` бота указать постоянный URL, например `https://wheel.yourdomain.com`.

## Структура

- `src/components/FortuneWheel.jsx` — SVG-колесо, анимация, кнопка «СТАРТ»
- `src/data/prizes.js` — 12 секторов (как на макете)
- `src/hooks/useTelegram.js` — `Telegram.WebApp.ready()` / `expand()`

Бэкенд для выдачи призов не подключён — только UI для тестов.
