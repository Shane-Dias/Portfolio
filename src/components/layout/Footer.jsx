import portfolioData from "../../data/portfolio-data";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative py-12 px-4 md:px-6 bg-gradient-to-t from-gray-950 to-black border-t border-gray-900">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand/About section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-white font-semibold">
                {portfolioData.hero.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              {portfolioData.hero.tagline ||
                "Building digital experiences with code"}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {["about", "skills", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => smoothScroll(e, `#${section}`)}
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm capitalize hover:translate-x-1 transition-transform duration-200"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>

          {/* Contact/Connect */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {portfolioData.hero.name}
            </p>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500 text-sm">All rights reserved</span>
          </div>

          {/* Additional info */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-500 text-sm">
                Available for opportunities
              </span>
            </div>

            <span className="text-gray-600 hidden md:inline">•</span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm group"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8 pt-4 border-t border-gray-900">
          <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
