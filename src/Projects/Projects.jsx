import "./Projects.css";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const spanVariants = {
  visible: { y: 0, scale: 1, transition: { duration: 0.5 } },
  hidden: { y: "-6rem", scale: 0 },
};
const imgVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 1 } },
  hidden: { scale: 0 },
};

const testVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 1 } },
  hidden: { scale: 0 },
};

// check if the component is visible
const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <div ref={ref} className="project-container" id="projects">
        <motion.span
          className="section-header"
          initial="hidden"
          animate={controls}
          variants={spanVariants}
        >
          PROJECTS
        </motion.span>
        <motion.div
          className="project-section container"
          initial="hidden"
          animate={controls}
          variants={imgVariants}
        >
          <div className="project"></div>
          <div className="project"></div>
          <motion.div
            className="project"
            variants={testVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
          <div className="project"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
