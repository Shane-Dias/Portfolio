import SectionTitle from "../ui/SectionTitle";
import portfolioData from "../../data/portfolio-data";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: portfolioData.contact.social.github,
      color: "hover:bg-gray-700",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: portfolioData.contact.social.linkedin,
      color: "hover:bg-blue-600",
      gradient: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />

        <SectionTitle>Let's Work Together</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.2,
              margin: "-50px",
            }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Thinking about building something?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Let's connect!
              </span>
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed">
              I’m open to full-time roles, freelance work, and meaningful
              collaborations. If you have an idea, a problem to solve, or just
              want to connect, feel free to reach out.
            </p>

            {/* Quick info */}
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={20} className="text-blue-400" />
              <span>
                {portfolioData.contact.location || "Available Worldwide"}
              </span>
            </div>
          </motion.div>

          {/* Right side - Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.2,
              margin: "-50px",
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-sm opacity-20" />

            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 space-y-6">
              {/* Email button */}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="group relative block w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Mail size={24} />
                    <span className="text-lg">Send Me an Email</span>
                  </div>
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-700" />
                <span className="text-sm text-gray-500 font-medium">
                  OR CONNECT VIA
                </span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              {/* Social links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                      margin: "-50px",
                    }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity`}
                    />
                    <div className="relative flex items-center justify-center gap-3 px-6 py-4 bg-gray-800/80 border border-gray-700 rounded-xl text-gray-300 group-hover:text-white group-hover:border-gray-600 transition-all duration-300">
                      <social.icon size={22} />
                      <span className="font-medium">{social.name}</span>
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response time */}
              <div className="pt-4 border-t border-gray-700/50">
                <p className="text-sm text-gray-500 text-center">
                  ⚡ Average response time:{" "}
                  <span className="text-gray-400 font-medium">24 hours</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.2,
            margin: "-50px",
          }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Contact;
