"use client";

export default function ContactSection() {
    return (
        <section id="contact" className="py-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p>Interested in collaborating on a project or discussing an idea?</p>
          <p className="whitespace-nowrap">Feel free to reach out via&nbsp;
            <a 
              href="https://linkedin.com/in/helbin-rapheal"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-link"
            >
            LinkedIn
            </a> or&nbsp;
            <a 
              href="mailto:helbinrapheal24@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-link"
            >
            Email
            </a>
          .</p>
        </section>
    );
}
