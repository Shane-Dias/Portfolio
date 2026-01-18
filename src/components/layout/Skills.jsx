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
        <div className="relative flex items-center gap-3 mb-12">
          <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
          <SectionTitle className="text-left">Technical Stack</SectionTitle>
        </div>

        {/* Grid layout for skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="relative p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors"
            >
              {/* Icon header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.bgAccent} border ${category.borderAccent}`}
                >
                  <category.icon className={`w-5 h-5 ${category.accent}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {catIndex === 0 && "Core programming foundations"}
                {catIndex === 1 && "Frontend & backend expertise"}
                {catIndex === 2 && "Development workflow & deployment"}
              </p>

              {/* Skills displayed as wrapping tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                    className="relative group"
                  >
                    <span className="px-3 py-1.5 text-xs bg-gray-800/50 text-gray-300 rounded-md border border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800 transition-colors">
                      {skill}
                    </span>
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
