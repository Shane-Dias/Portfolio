import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio-data";
import { Code2, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", icon: Code2, skills: portfolioData.skills.frontend },
    { title: "Backend", icon: Database, skills: portfolioData.skills.backend },
    { title: "Tools", icon: Wrench, skills: portfolioData.skills.tools },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Skills & Technologies</SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-gray-900/50 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-gray-400" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-gray-800 text-gray-300 rounded-md border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
