import React, { useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import portfolioData from "../../data/portfolio-data";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Particles initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect",
        },
        resize: true,
      },
      modes: {
        connect: {
          distance: 80,
          links: {
            opacity: 0.3,
          },
          radius: 200,
        },
      },
    },
    particles: {
      color: {
        value: ["#60a5fa", "#a78bfa", "#34d399", "#fbbf24"],
      },
      links: {
        color: "#60a5fa",
        distance: 120,
        enable: true,
        opacity: 0.15,
        width: 1,
        blink: true,
        frequency: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.8,
        straight: false,
        trail: {
          enable: true,
          length: 10,
          fillColor: "#000000",
        },
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 60,
      },
      opacity: {
        value: 0.25,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
      },
      size: {
        value: { min: 1, max: 3 },
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 0.5,
      },
    },
    detectRetina: true,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900"
    >
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Ambient glow */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <span className="text-sm text-gray-400">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {portfolioData.hero.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-medium">
            {portfolioData.hero.role}
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              onClick={(e) => smoothScroll(e, "#projects")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {portfolioData.hero.cta.primary}
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800/50 transition-colors cursor-pointer"
            >
              {portfolioData.hero.cta.secondary}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
