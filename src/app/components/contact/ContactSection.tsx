"use client";

import { useEffect } from 'react';

const ContactSection = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'l') {
        window.open('https://linkedin.com/in/helbin-rapheal', '_blank');
      }
      if (event.ctrlKey && event.key === 'e') {
        window.location.href = 'mailto:helbinrapheal24@gmail.com';
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section id="contact" className="py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
      <p>Interested in collaborating on a project or discussing an idea?</p>
      <p className="whitespace-nowrap">
        Feel free to reach out via&nbsp;
        <a
          href="https://linkedin.com/in/helbinrapheal"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-link"
          title="Click Ctrl + L to open LinkedIn"
        >
          LinkedIn
        </a> or&nbsp;
        <a
          href="mailto:helbinrapheal24@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-link"
          title="Click Ctrl + E to open Email"
        >
          Email
        </a>
        .
      </p>
    </section>
  );
};

export default ContactSection;
