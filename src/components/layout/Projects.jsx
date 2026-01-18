import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio-data";
import { ExternalLink } from "lucide-react";

const Projects = () => (
  <section id="projects" className="relative py-32 px-6 bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      <SectionTitle>Projects</SectionTitle>

      <div className="space-y-8">
        {portfolioData.projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group p-8 rounded-xl bg-gray-800/30 border border-gray-800 hover:border-gray-700 transition-all hover:bg-gray-800/50"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    className="text-gray-600 group-hover:text-gray-400 transition-colors"
                    size={20}
                  />
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 font-medium">
                  {project.impact}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
