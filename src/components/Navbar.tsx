
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Assistants', path: '/assistants' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5",
      scrolled ? "bg-white/98 backdrop-blur-sm py-4 premium-shadow" : "bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight"
        >
          MinimalAI
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-foreground/80",
                location.pathname === link.path 
                  ? "text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="hero-button bg-primary text-primary-foreground text-sm tracking-wide"
          >
            Démarrer
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white premium-shadow border-t border-[#EEEEEE]"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium py-2 tracking-wide",
                    location.pathname === link.path 
                      ? "text-foreground" 
                      : "text-muted-foreground"
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="w-full text-center hero-button bg-primary text-primary-foreground"
                onClick={closeMenu}
              >
                Démarrer
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
