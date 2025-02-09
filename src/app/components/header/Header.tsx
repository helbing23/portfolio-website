"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";

const Header = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [theme, setTheme] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");
  const [currentSection, setCurrentSection] = useState("#hero");
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/", hash: "#hero", isHash: true },
    { label: "Projects", path: "/projects", hash: "#about", isHash: true },
    { label: "Services", path: "/services", hash: "", isHash: false },
    { label: "Learning", path: "/learning", hash: "", isHash: false },
    // { label: "Publishing", path: "/publishing", hash: "", isHash: false },
    // { label: "Resources", path: "/resources", hash: "", isHash: false },
    // { label: "Learning", path: "/learning", hash: "", isHash: false },
    { label: "Contact", path: "/#contact", hash: "#contact", isHash: true }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);

    // Reset hash-based navigation when not on homepage
    if (pathname !== '/') {
      setActiveHash("");
      setCurrentSection("");
    } else {
      // Initialize active section based on URL hash only on homepage
      const initialHash = window.location.hash || "#hero";
      setActiveHash(initialHash);
      setCurrentSection(initialHash);
    }

    const handleHashChange = () => {
      if (pathname === '/') {
        const hash = window.location.hash || "#hero";
        setActiveHash(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    // Create intersection observer only for homepage
    if (pathname === '/') {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const id = `#${entry.target.id}`;
            
            if (id === "#about" || id === "#contact") {
              setCurrentSection(id);
              if (window.location.hash !== id) {
                history.replaceState(null, '', id);
                setActiveHash(id);
              }
            } else {
              setCurrentSection("#hero");
              if (window.location.hash !== "#about" && window.location.hash !== "#contact") {
                history.replaceState(null, '', '#hero');
                setActiveHash("#hero");
              }
            }
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5,
        rootMargin: "-45% 0px -45% 0px"
      });

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
        window.removeEventListener("hashchange", handleHashChange);
      };
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const footerOffset = document.body.scrollHeight - window.innerHeight - 200;
    setIsFloating(scrollPosition > 50 && scrollPosition < footerOffset);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const isActive = (item: { path: string, hash: string, isHash: boolean }) => {
    // If we're not on the homepage, only use pathname matching
    if (pathname !== '/') {
      return pathname === item.path;
    }
    
    // On homepage, use hash-based navigation
    if (item.isHash) {
      if (item.hash === "#hero") {
        return currentSection === "#hero";
      }
      return currentSection === item.hash;
    }
    
    // For non-hash items, just use pathname matching
    return pathname === item.path;
  };

  const handleNavClick = (item: { hash: string, isHash: boolean }) => {
    if (pathname === '/' && item.isHash) {
      setActiveHash(item.hash);
      setCurrentSection(item.hash);
    } else {
      setActiveHash("");
      setCurrentSection("");
    }
    setIsMenuOpen(false);
  };

  return (
    <Container
      as="header"
      className={`${
        isFloating ? "fixed bottom-0 mb-4 lg:max-w-full" : "relative"
      } z-50 transition-opacity animate-fade-in-down`}
    >
      <nav className={`flex items-center mx-auto py-4 lg:px-8`}>
        <div className={`font-bold text-xl ${isFloating ? 'hidden' : 'block'}`}>
          <Link href="/" className="gradient-text">
            Helbin.R
          </Link>
        </div>

        <div className="hidden md:flex mx-auto items-center gap-6 absolute left-1/2 transform -translate-x-1/2 shadow-md bg-white dark:bg-black dark:border-white/[0.2] border px-4 py-2 rounded-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${isActive(item) ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-4 right-4 z-50"
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        <div className={`ml-auto hidden md:block ${isFloating ? 'md:hidden' : ''}`}>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-black border border-white/[0.2]"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xl nav-link ${isActive(item) ? "active" : ""}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded bg-gray-100 dark:bg-gray-900 mt-4"
              >
                {theme === "light" ? "🌞" : "🌙"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Header;