import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio-data";

const Experience = () => (
  <section id="experience" className="relative py-32 px-6 bg-gray-950">
    <div className="max-w-4xl mx-auto">
      <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      <SectionTitle>Experience & Achievements</SectionTitle>

      <div className="space-y-6">
        {portfolioData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-gray-800 last:pb-0"
          >
            <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-blue-500" />

            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-sm text-gray-500 font-medium">
                  {exp.period}
                </span>
              </div>

              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
