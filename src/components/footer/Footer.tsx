// components/Footer.tsx

import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDailydotdev, SiBluesky, SiGmail } from "react-icons/si";
import CalendlyButton from '../ui/CalendlyButton';
import Container from '../ui/Container';

const socialLinks = [
    { href: "https://linkedin.com/in/helbin-rapheal", icon: <FaLinkedin />, hoverColor: "hover:text-blue-600", label: "LinkedIn profile" },
    { href: "https://github.com/helbing23", icon: <FaGithub />, hoverColor: "hover:text-gray-600", label: "GitHub profile" },
    { href: "https://app.daily.dev/helbindev", icon: <SiDailydotdev />, hoverColor: "hover:text-black", label: "daily.dev profile" },
    { href: "https://bsky.app/profile/helbinr.bsky.social", icon: <SiBluesky />, hoverColor: "hover:text-blue-400", label: "Bluesky profile" },
    { href: "mailto:helbinrapheal24@gmail.com", icon: <SiGmail />, hoverColor: "hover:text-red-600", label: "Email Helbin" }
  ]

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <Container as='div' className="flex flex-col md:flex-row items-center justify-between">
        {/* Social Icons (Mobile First) */}
        <div className="flex space-x-4 md:order-2">
        {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`text-2xl ${link.hoverColor} transition-colors`}
        >
          {link.icon}
        </a>
      ))}
      <CalendlyButton />
        </div>

        {/* Copyright (Desktop First) */}
        <div className="mt-2 md:mt-0 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} helbinrapheal.vercel.app All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
