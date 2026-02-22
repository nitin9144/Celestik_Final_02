import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'PALMISTRY', path: '/palmistry' },
    { title: 'ASTROLOGY', path: '/astrology' },
    { title: 'CONTACT US', path: '/contact' },
  ];

  return (
    <>
      <header className="border-b border-purple-900/30 backdrop-blur-md bg-[#0f1433]/10 fixed top-0 left-0 right-0 z-50 m-2 sm:m-3 rounded-2xl sm:rounded-3xl">
        <div className="container mx-auto px-2 py-3 sm:px-4 sm:py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-[45px] sm:w-[55px]">
              <img src="/zodiac_wheel.png" alt="Celestik Logo" />
            </div>
            <span className="hidden sm:block text-2xl text-amber-100 tracking-wider drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]" style={{ fontFamily: 'var(--font-serif)' }}>
              CELESTIK
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => navigate(link.path)}
                className="px-4 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                style={{ fontFamily: 'var(--font-mystical)' }}
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-amber-100">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[80px] left-0 right-0 z-40 md:hidden bg-[#0f1433]/95 backdrop-blur-lg animate-fadeInDown">
          <nav className="container mx-auto px-4 py-6 flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => {
                  navigate(link.path);
                  setIsMenuOpen(false);
                }}
                className="text-lg text-amber-100 hover:text-amber-50"
                style={{ fontFamily: 'var(--font-mystical)' }}
              >
                {link.title}
              </button>
            ))}
          </nav>
        </div>
      )}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}