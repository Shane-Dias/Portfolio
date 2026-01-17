import SectionTitle from "../ui/SectionTitle";
import portfolioData from "../../data/portfolio-data";
import { motion } from "framer-motion";
import { Code2, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: portfolioData.skills.languages,
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: portfolioData.skills.webDevelopment,
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: portfolioData.skills.tools,
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20",
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 bg-gray-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        <SectionTitle>Skills & Technologies</SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div
                className={`relative h-full p-8 rounded-2xl bg-gray-900/80 backdrop-blur-sm border ${category.borderColor} hover:border-opacity-50 transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-800">
                  <div
                    className={`p-3 rounded-xl bg-gray-800/50 ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.15 + index * 0.05,
                      }}
                      className="px-4 py-2.5 text-sm font-medium bg-gray-800/60 text-gray-200 rounded-lg border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
