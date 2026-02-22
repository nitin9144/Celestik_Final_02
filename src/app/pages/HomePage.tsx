import { useNavigate } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { HowItWorksSection } from '../components/HowItWorks';
import { TrustSection } from '../components/TrustSection';
import { AstrologyComingSoonSection } from '../components/AstrologyComingSoon';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      
      <HeroSection />
      <HowItWorksSection />
      <TrustSection />
      <AstrologyComingSoonSection />
      
      {/* CTA Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => navigate('/palmistry')}
          className="px-12 py-4 bg-amber-200 text-[#0f1433] hover:bg-amber-100 transition-all duration-300 shadow-2xl hover:shadow-amber-200/50 hover:scale-105 animate-pulse"
          style={{ fontFamily: 'var(--font-mystical)' }}
        >
          <span className="tracking-wider font-medium">START YOUR READING</span>
        </button>
      </div>
    </div>
  );
}