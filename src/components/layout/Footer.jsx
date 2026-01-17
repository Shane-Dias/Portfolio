import portfolioData from "../../data/portfolio-data";

const Footer = () => (
  <footer className="relative py-12 px-6 bg-gray-950 border-t border-gray-800">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {portfolioData.hero.name}. All rights
        reserved.
      </p>

      <div className="flex gap-6">
        <a
          href={portfolioData.contact.social.github}
          className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href={portfolioData.contact.social.linkedin}
          className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
