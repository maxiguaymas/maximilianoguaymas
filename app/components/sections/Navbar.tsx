'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  const isDark = resolvedTheme === 'dark';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-border-custom/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        <div className="text-xl font-bold tracking-tighter">M.G</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent transition">
              {link.label}
            </Link>
          ))}
          <button 
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full border border-border-custom hover:bg-foreground/5 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full border border-border-custom transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border-custom overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-accent transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}