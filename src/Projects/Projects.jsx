import "./Projects.css";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Language from "@mui/icons-material/Language";
import GitHub from "@mui/icons-material/GitHub";

const projects = [
  {
    name: "INNICROSS Website",
    img: "images/innicross.png",
    desc: "A Website for INNICROSS",
    techs: ["TypeScript", "React"],
    github: "https://github.com/nuelobeto/innicross",
    url: "https://innicross.com/",
  },
  {
    name: "OYEKES E-Commerce App",
    img: "images/oyekes.png",
    desc: "An E-Commerce Web App built for OYEKES Hair and Fabrics",
    techs: ["MongoDB", "React", "Node", "Express"],
    github: "https://github.com/favourakpasi/oyekes-MERN",
    url: "http://oyekes.herokuapp.com",
  },
  {
    name: "TODO List",
    img: "images/ToDo-List-App.png",
    desc: "A Simple MERN Stack TODO List app with Authentication",
    techs: ["MongoDB", "React", "Node", "Express"],
    github: "https://github.com/FavourAkpasi/ToDo-List-MERN",
    url: "http://tdl-mern.herokuapp.com/",
  },
  {
    name: "COLEFIT E-Commerce App",
    img: "images/Colefit.png",
    desc: "An E-Commerce Web App built for Exquisite Cole Fit Designs",
    techs: ["TypeScript", "React", "Node", "Express", "MongoDB"],
    github: "https://github.com/FavourAkpasi/cole-fit",
    url: "http://colefitsample.netlify.app/",
  },
  {
    name: "Simon Game",
    img: "images/Simon-Game.png",
    desc: "Simon Game Built with JavaScript DOM Manipulation",
    techs: ["TypeScript", "React", "Node", "Express", "MongoDB"],
    github: "https://github.com/FavourAkpasi/A-Simon-Game",
    url: "http://Favour-Simon-Game.netlify.app",
  },
];

const titleVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  hidden: { y: -25, opacity: 0 },
};
const imgVariants = {
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { scale: 0, opacity: 0 },
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-container" id="projects">
        <motion.span
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          PROJECTS
        </motion.span>

        <div className="project-section container">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imgVariants}
            >
              <div className="project-image">
                <img src={project.img} alt={project.name} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.desc}</p>
                <ul className="tags">
                  {project.techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <div className="links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <GitHub />
                  </a>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <Language />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
