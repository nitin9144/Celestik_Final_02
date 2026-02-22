import { ZodiacBackground } from './ZodiacBackground';
import ScrollBackground from './ScrollBackground';
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ScrollBackground />

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <p className="text-2xl md:text-3xl text-purple-200 italic mb-8 animate-fadeInDown" style={{ fontFamily: 'var(--font-mystical)' }}>
          Not magic. Just stardust and algorithms.
        </p>

        <div className="flex items-center justify-center gap-4 md:gap-8 mb-12 flex-wrap md:flex-nowrap">
          <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-amber-100 tracking-wider drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-fadeInLeft" style={{ fontFamily: 'var(--font-serif)' }}>
            CELE
          </div>
          <div className="relative flex items-center justify-center animate-fadeInUp">
            <div className='w-[180px] sm:w-[240px] md:w-[300px] animate-[spin_20s_linear_infinite] drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]'>
              <img src="/originalwheel.png" alt="Zodiac Wheel" className="w-full h-full brightness-125" />
            </div>
            <img src="/originalsun.png" className='absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] md:w-[130px] drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]' alt="Sun" />
          </div>
          <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-amber-100 tracking-wider drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-fadeInRight" style={{ fontFamily: 'var(--font-serif)' }}>
            STIK
          </div>
        </div>

        <div className="space-y-2 text-amber-100/90 animate-fadeInUp" style={{ fontFamily: 'var(--font-elegant)' }}>
          <p className="text-xl md:text-2xl tracking-wide">
            Unlock the Secrets of Your Stars & Palm
          </p>
          <p className="text-lg md:text-xl tracking-wide">
            Discover What the Universe Whispers Through Your Palm
          </p>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out 0.3s both;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}