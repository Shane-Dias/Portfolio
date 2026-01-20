import SectionTitle from "../ui/SectionTitle";
import portfolioData from "../../data/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const ITEMS_PER_LOAD = 3;

  const showMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_LOAD, portfolioData.projects.length),
    );
  };

  const hasMore = visibleCount < portfolioData.projects.length;
  const visibleProjects = portfolioData.projects.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-gray-900 overflow-hidden"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
          <SectionTitle>Projects</SectionTitle>
        </motion.div>

        <div className="grid gap-8">
          <AnimatePresence mode="sync">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-500" />

                <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-800/40 border border-gray-700 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-700" />

                  {/* Top corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Left accent bar */}
                  <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                          <Code2 className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 border border-gray-600 cursor-pointer transition-colors"
                      >
                        <a
                          href={portfolioData.projects[i].link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink
                            className="text-gray-400 group-hover:text-blue-400 transition-colors"
                            size={20}
                          />
                        </a>  
                      </motion.div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + idx * 0.05 }}
                          className="px-4 py-1.5 text-sm bg-gradient-to-r from-gray-700/80 to-gray-800/80 text-gray-200 rounded-full border border-gray-600 hover:border-blue-500/50 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20">
                      <Sparkles
                        className="text-blue-400 mt-0.5 flex-shrink-0"
                        size={18}
                      />
                      <p className="text-sm text-gray-300 font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              onClick={showMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />

              <div className="relative flex items-center gap-3">
                <span className="text-white font-semibold">
                  Load More Projects
                </span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="text-blue-400" size={20} />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        )}

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Showing{" "}
            <span className="text-blue-400 font-semibold">{visibleCount}</span>{" "}
            of{" "}
            <span className="text-purple-400 font-semibold">
              {portfolioData.projects.length}
            </span>{" "}
            projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
