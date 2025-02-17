"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";

interface NavItem {
  label: string;
  path: string;
  hash: string;
  isHash: boolean;
}

const Header = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("#hero");
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Home", path: "/", hash: "#hero", isHash: true },
    { label: "Projects", path: "/projects", hash: "#about", isHash: true },
    { label: "Services", path: "/services", hash: "", isHash: false },
    { label: "Learning", path: "/learning", hash: "", isHash: false },
    { label: "Contact", path: "/#contact", hash: "#contact", isHash: true },
  ];

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;
    const footerThreshold = 200;

    // Calculate distance from bottom
    const distanceFromBottom = totalHeight - (scrollPosition + viewportHeight);
    const opacity = Math.min(1, distanceFromBottom / footerThreshold);

    setIsFloating(scrollPosition > 50);
    setHeaderOpacity(opacity > 0 ? opacity : 0);
  }, []);

  useEffect(() => {
    const throttle = (fn: () => void, wait: number) => {
      let time = Date.now();
      return () => {
        if (Date.now() - time >= wait) {
          fn();
          time = Date.now();
        }
      };
    };

    const throttledScroll = throttle(handleScroll, 50);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setMounted(true);
  }, []);

  // Hash handling
  useEffect(() => {
    if (pathname === "/") {
      const handleHashChange = () => {
        const hash = window.location.hash || "#hero";
        setCurrentSection(hash);
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const isActive = (item: NavItem) => {
    if (pathname !== "/") return pathname === item.path;
    if (item.isHash) return currentSection === (item.hash || "#hero");
    return false;
  };

  const handleNavClick = (item: NavItem) => {
    if (pathname === "/" && item.isHash) setCurrentSection(item.hash);
    setIsMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <Container
      as="header"
      className={`${
        isFloating ? "fixed bottom-0 mb-4 lg:max-w-full" : "relative"
      } z-50 transition-opacity animate-fade-in-down`}
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

        {/* Theme Toggle */}
        <div className={`ml-auto hidden md:block ${isFloating ? "opacity-0" : "opacity-100"}`}>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-black border border-white/[0.2]"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu */}
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