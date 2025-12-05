import React, { useState, useEffect } from 'react';
import { heroData } from '../data/portfolio';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = navLinks.map(link => link.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Education', 'Projects', 'Articles', 'Contact'];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple-500/5' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a className="text-xl font-bold text-white tracking-wider flex items-center gap-3 group" href="#">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <span className="relative w-10 h-10 rounded-lg bg-[#151925] border border-white/10 flex items-center justify-center text-white text-lg font-bold group-hover:scale-105 transition-transform">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">B</span>
              </span>
            </div>
            <span className="group-hover:text-purple-400 transition-colors duration-300">{heroData.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:text-white ${activeSection === item.toLowerCase() ? 'text-white bg-white/5' : 'text-gray-400 hover:bg-white/5'}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full mb-1.5"></span>
                )}
              </a>
            ))}
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors relative z-50">
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex items-center justify-center ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>
        <nav className="flex flex-col items-center gap-8 relative z-10">
          {navLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-bold transition-all duration-300 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${activeSection === item.toLowerCase() ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400' : 'text-gray-400 hover:text-white'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
