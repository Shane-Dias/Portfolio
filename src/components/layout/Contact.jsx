import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio-data";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="relative py-32 px-6 bg-gray-900">
    <div className="max-w-4xl mx-auto text-center">
      <SectionTitle>Let's Work Together</SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        I'm currently open to full-time opportunities, consulting projects, and
        interesting collaborations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          <Mail size={20} />
          Send Email
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-6 justify-center"
      >
        <a
          href={portfolioData.contact.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href={portfolioData.contact.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
