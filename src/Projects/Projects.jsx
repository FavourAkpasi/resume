import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <div className="project-container" id="projects">
        <motion.span
          className="section-header"
          initial={{ y: "-5rem" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          PROJECTS
        </motion.span>
        <div className="project-section container">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
