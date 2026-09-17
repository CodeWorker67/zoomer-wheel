import FortuneWheel from './components/FortuneWheel';
import { useTelegram } from './hooks/useTelegram';

export default function App() {
  const { ready, user } = useTelegram();

  if (!ready) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-zoomer-dark">
        <div className="w-8 h-8 border-2 border-zoomer-neon border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-zoomer-dark bg-grid bg-radial-glow flex flex-col">
      <div className="relative w-full max-w-[420px] mx-auto px-4">
        <img
          src="/images/pacan.png"
          alt=""
          className="absolute -right-1 top-0 bottom-0 z-0 w-[53%] max-w-[222px] object-contain object-top pointer-events-none select-none"
          width={222}
          height={320}
        />

        <header className="relative z-10 pt-5 pb-3">
          <div className="flex items-center gap-3 pr-[46%]">
            <img
              src="/images/zoomer-logo.png"
              alt=""
              className="w-11 h-11 shrink-0 rounded-full object-cover shadow-[0_0_16px_rgba(94,184,255,0.35)]"
              width={44}
              height={44}
            />
            <p className="font-display text-[15px] sm:text-base font-bold tracking-wide leading-none">
              <span className="text-white">Зумерский </span>
              <span className="text-gradient">VPN</span>
            </p>
          </div>
        </header>

        <section className="relative z-10 min-h-[118px] pr-[46%] pb-2">
          <div className="flex flex-col justify-end py-2 min-h-[118px]">
            <h1 className="font-display text-[1.65rem] sm:text-[1.85rem] font-extrabold leading-[1.05] text-white">
              Колесо
            </h1>
            <p className="font-display text-[1.65rem] sm:text-[1.85rem] font-extrabold leading-[1.05] text-gradient">
              Зумера
            </p>
            {user && (
              <p className="mt-2 text-xs text-gray-400">
                {user.first_name}
                {user.username ? ` · @${user.username}` : ''}
              </p>
            )}
          </div>
        </section>
      </div>

      <main className="flex-1 flex items-start justify-center px-3 pb-10 max-w-[420px] w-full mx-auto">
        <FortuneWheel />
      </main>
    </div>
  );
}
