import SectionTitle from "../ui/SectionTitle";
import portfolioData from "../../data/portfolio-data";
import { motion } from "framer-motion";
import { Code2, Globe, Wrench, ChevronRight } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: portfolioData.skills.languages,
      accent: "text-blue-400",
      bgAccent: "bg-blue-500/10",
      borderAccent: "border-blue-500/20",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: portfolioData.skills.webDevelopment,
      accent: "text-purple-400",
      bgAccent: "bg-purple-500/10",
      borderAccent: "border-purple-500/20",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: portfolioData.skills.tools,
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-500/10",
      borderAccent: "border-emerald-500/20",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
          <SectionTitle className="text-left">Technical Stack</SectionTitle>
        </div>

        {/* Vertical timeline layout */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${category.bgAccent} border ${category.borderAccent}`}
                >
                  <category.icon className={`w-4 h-4 ${category.accent}`} />
                </div>
              </div>

              {/* Connecting line (except last) */}
              {catIndex < skillCategories.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-px bg-gradient-to-b from-gray-800 to-transparent" />
              )}

              {/* Category content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {catIndex === 0 && "Core programming foundations"}
                  {catIndex === 1 && "Frontend & backend expertise"}
                  {catIndex === 2 && "Development workflow & deployment"}
                </p>
              </div>

              {/* Skills displayed horizontally as a flowing list */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="relative group"
                  >
                    <span className="px-4 py-2 text-sm bg-gray-900/50 text-gray-300 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors">
                      {skill}
                    </span>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-16 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Optional: Show count */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <ChevronRight className="w-4 h-4" />
                <span>{category.skills.length} technologies</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
