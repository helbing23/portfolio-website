'use client'

import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiDailydotdev, SiBluesky, SiGmail } from "react-icons/si"
import CalendlyButton from './CalendlyButton'

export default function SocialFloating() {
  const [isFloating, setIsFloating] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      const footer = document.getElementById('contact')
      const scrollPosition = window.scrollY

      if (heroSection && footer) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const footerTop = footer.offsetTop

        setIsFloating(scrollPosition > heroBottom)
        setIsHidden(scrollPosition > footerTop - 500) // 500px before footer
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const socialLinks = [
    { href: "https://linkedin.com/in/helbin-rapheal", icon: <FaLinkedin />, hoverColor: "hover:text-blue-600" },
    { href: "https://github.com/helbing23", icon: <FaGithub />, hoverColor: "hover:text-gray-600" },
    { href: "https://app.daily.dev/helbindev", icon: <SiDailydotdev />, hoverColor: "hover:text-black" },
    { href: "https://bsky.app/profile/helbinr.bsky.social", icon: <SiBluesky />, hoverColor: "hover:text-blue-400" },
    { href: "mailto:helbinrapheal24@gmail.com", icon: <SiGmail />, hoverColor: "hover:text-red-600" }
  ]

  return (
    <div className={`
      flex gap-4
      ${isFloating ? 'fixed left-4 top-1/2 hidden xl:flex -translate-y-1/2 flex-col' : 'mt-6'}
      ${isHidden ? 'opacity-0' : 'opacity-100'}
      transition-all duration-300
    `}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl ${link.hoverColor} transition-colors`}
        >
          {link.icon}
        </a>
      ))}
      <CalendlyButton />
    </div>
  )
}