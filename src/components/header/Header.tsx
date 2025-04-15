"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { SkeletonHeader } from "../ui/SkeletonHeader";

// Custom hook for handling theme
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = (localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) as "light" | "dark";
    
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setMounted(true);

    // Set up listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }, [theme]);

  return { theme, mounted, toggleTheme };
};

// Custom hook for scroll handling
const useHeaderScroll = (isHomePage: boolean) => {
  const SCROLL_THRESHOLD = 50;
  const THROTTLE_WAIT = 50;
  const FOOTER_THRESHOLD = 200;

  const [scrollState, setScrollState] = useState({
    isFloating: false,
    headerOpacity: 1
  });

  const handleScroll = useCallback(() => {
    if (isHomePage) {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate distance from bottom
      const distanceFromBottom = totalHeight - (scrollPosition + viewportHeight);
      const opacity = Math.min(1, distanceFromBottom / FOOTER_THRESHOLD);

      setScrollState({
        isFloating: scrollPosition > SCROLL_THRESHOLD,
        headerOpacity: opacity > 0 ? opacity : 0
      });
    } else {
      setScrollState({
        isFloating: false,
        headerOpacity: 1
      });
    }
  }, [isHomePage]);

  useEffect(() => {
    // Throttle implementation
    let lastRun = 0;
    const throttledScroll = () => {
      const now = Date.now();
      if (now - lastRun >= THROTTLE_WAIT) {
        handleScroll();
        lastRun = now;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return scrollState;
};

// Custom hook for section detection
const useSectionDetection = (isHomePage: boolean) => {
  const [currentSection, setCurrentSection] = useState("#hero");

  useEffect(() => { 
    if (!isHomePage) return; 
    
    const observerOptions = { rootMargin: '-20% 0px -80% 0px' }; 
    
    const observer = new IntersectionObserver((entries) => { 
      entries.forEach(entry => { 
        if (entry.isIntersecting) { 
          setCurrentSection(`#${entry.target.id}`); 
        } 
      }); 
    }, observerOptions); 
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section); 
    });
    
    return () => observer.disconnect(); 
  }, [isHomePage]);

  return currentSection;
};

// Navigation items definition
const NAV_ITEMS = [
  { label: "Home", path: "/", hash: "", isHash: false },
  { label: "Projects", path: "/projects", hash: "", isHash: false },
  { label: "Services", path: "/services", hash: "", isHash: false },
  { label: "Insights", path: "/insights", hash: "", isHash: false },
  { label: "Contact", path: "/#contact", hash: "#contact", isHash: true },
];

interface NavItem {
  label: string;
  path: string;
  hash: string;
  isHash: boolean;
}

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { theme, mounted, toggleTheme } = useTheme();
  const { isFloating, headerOpacity } = useHeaderScroll(isHomePage);
  const currentSection = useSectionDetection(isHomePage);

  const isActive = useCallback((item: NavItem) => {
    if (!isHomePage) return pathname === item.path;
    if (item.isHash) return currentSection === (item.hash || "#hero");
    return item.path === "/";
  }, [isHomePage, pathname, currentSection]);

  const handleNavClick = useCallback((item: NavItem) => {
    if (isHomePage && item.isHash) {
      // Let the intersection observer handle section updates
      const element = document.querySelector(item.hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, [isHomePage]);

  // Show skeleton during initial load
  if (!mounted) return <SkeletonHeader />;

  return (
    <Container
      as="header"
      className={`${
        isFloating ? "fixed bottom-0 mb-4 lg:max-w-full" : "relative"
      } z-50 transition-opacity animate-fade-in-down`}
      aria-label="Main navigation"
    >
      <nav 
        className="flex items-center mx-auto py-4 lg:px-8"
        style={{ opacity: headerOpacity }}
      >
        {/* Logo */}
        <div className={`font-bold text-xl transition-opacity ${isFloating ? "opacity-0" : "opacity-100"}`}>
          <Link href="/" className="gradient-text">
            Helbin.R
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex mx-auto items-center gap-6 absolute left-1/2 transform -translate-x-1/2 shadow-md bg-white dark:bg-black dark:border-white/[0.2] border px-4 py-2 rounded-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${isActive(item) ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-4 right-4 z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="text-2xl" aria-hidden="true">
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Theme Toggle */}
        <div className={`ml-auto hidden md:block ${isFloating ? "opacity-0" : "opacity-100"}`}>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-black border border-white/[0.2]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span aria-hidden="true">{theme === "light" ? "🌞" : "🌙"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xl nav-link ${isActive(item) ? "active" : ""}`}
                  onClick={() => handleNavClick(item)}
                  aria-current={isActive(item) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded bg-gray-100 dark:bg-gray-900 mt-4"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <span aria-hidden="true">{theme === "light" ? "🌞" : "🌙"}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Header;