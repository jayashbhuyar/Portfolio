import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home as HomeIcon, User, Code, Briefcase, Menu, X } from 'lucide-react';

const navSections = [
  { name: 'Home', icon: HomeIcon, link: '/' },
  { name: 'About', icon: User, link: '/about' },
  { name: 'Skills', icon: Code, link: '/skills' },
  { name: 'Projects', icon: Briefcase, link: '/projects' },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === '/';
  const showSolidNav = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/skills') return 'skills';
    if (path === '/projects') return 'projects';
    return '';
  };

  const activeSection = getActiveSection();

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolidNav ? 'bg-navy-primary/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 md:py-4 max-w-6xl w-full min-w-0">
          <Link
            to="/"
            className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#F8FAFC] hover:text-accent-blue transition-colors truncate min-w-0 mr-2"
          >
            Jayash Bhuyar
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navSections.map((section) => {
              const isActive = activeSection === section.name.toLowerCase();
              return (
                <Link to={section.link} key={section.name}>
                  <span
                    className={`flex items-center gap-2 font-medium px-4 py-2.5 rounded-btn transition-all duration-300 text-[#CBD5E1] hover:text-accent-blue ${
                      isActive ? 'text-accent-blue border-b-2 border-accent-blue' : ''
                    }`}
                  >
                    <section.icon className="w-5 h-5 shrink-0" />
                    {section.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Hamburger – mobile only */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-blue/30 active:scale-95 transition-all duration-300"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-[#CBD5E1] rounded-full transition-all duration-300 origin-center ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#CBD5E1] rounded-full my-1.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#CBD5E1] rounded-full transition-all duration-300 origin-center ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[280px] min-w-0 bg-navy-card border-l border-white/10 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col pt-20 px-4 sm:px-6 gap-1 pb-8">
                {navSections.map((section) => {
                  const isActive = activeSection === section.name.toLowerCase();
                  return (
                    <Link
                      to={section.link}
                      key={section.name}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-accent-indigo/20 text-accent-blue border border-accent-blue/30'
                          : 'text-[#CBD5E1] hover:bg-white/5 hover:text-accent-blue'
                      }`}
                    >
                      <section.icon className="w-5 h-5 shrink-0" />
                      {section.name}
                    </Link>
                  );
                })}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
