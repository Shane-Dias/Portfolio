import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio-data";
import { fadeInUp, staggerContainer } from "../../utils/motion-variants";

const About = () => {
  // Custom minimal icons for highlights
  const highlightIcons = [
    <svg
      key={0}
      className="w-6 h-6 text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>,
    <svg
      key={1}
      className="w-6 h-6 text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>,
    <svg
      key={2}
      className="w-6 h-6 text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 bg-gray-900 overflow-hidden"
    >
      {/* Subtle textured background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left column with title */}
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
              <SectionTitle className="text-left mb-6">About Me</SectionTitle>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: false,
                amount: 0.2,
                margin: "-50px",
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed italic pl-4 border-l-2 border-gray-800"
            >
              "Solving real problems through thoughtful engineering"
            </motion.p>
          </div>

          {/* Right column with content */}
          <div className="lg:w-3/5">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{
                once: false,
                amount: 0.2,
                margin: "-50px",
              }}
              transition={fadeInUp.transition}
            >
              <p className="text-gray-300 leading-relaxed text-lg mb-10">
                {portfolioData.about.text}
              </p>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                  amount: 0.2,
                  margin: "-50px",
                }}
                className="space-y-6"
              >
                {portfolioData.about.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>

                    <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300">
                      <div className="flex-shrink-0 mt-1">
                        {highlightIcons[i] || highlightIcons[0]}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Signature style element */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{
                once: false,
                amount: 0.2,
                margin: "-50px",
              }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 pt-8 border-t border-gray-800"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-sm text-gray-400 font-mono">
                    Available for new opportunities
                  </span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <span className="text-sm">Let's connect</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
    </section>
  );
};

export default About;
