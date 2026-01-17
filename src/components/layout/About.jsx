import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio-data";

const About = () => (
  <section id="about" className="relative py-32 px-6 bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <SectionTitle>About Me</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          {portfolioData.about.text}
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-8">
          {portfolioData.about.highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-gray-800/50 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <p className="text-gray-300 font-medium">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
