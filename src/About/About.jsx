import "./About.css";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  visible: { x: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { x: "-100rem" },
};
const spanVariants = {
  visible: { y: 0, scale: 1, transition: { duration: 0.5, delay: 0.1 } },
  hidden: { y: "-4rem", scale: 0 },
};
const imgVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 1 } },
  hidden: { scale: 0 },
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const Techs = [
    {
      name: "JavaScript (ES6+)",
      icon: "https://img.icons8.com/color/16/undefined/javascript--v1.png",
    },
    {
      name: "React JS",
      icon: "https://img.icons8.com/office/16/undefined/react.png",
    },
    {
      name: "Node JS",
      icon: "https://img.icons8.com/fluency/16/undefined/node-js.png",
    },
    {
      name: "Mongo DB",
      icon: "https://img.icons8.com/color/16/undefined/mongodb.png",
    },
    {
      name: "Framer Motion",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/16/undefined/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-shadow-tal-revivo.png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/ios-glyphs/16/undefined/github.png",
    },
    {
      name: "Motoko",
      icon: "https://img.icons8.com/fluency/16/undefined/infinity.png",
    },
  ];

  return (
    <div ref={ref} className="about-container container" id="about">
      <motion.span
        className="section-header"
        animate={controls}
        initial="hidden"
        variants={spanVariants}
      >
        ABOUT
      </motion.span>
      <div className="about-section">
        <motion.div
          className="about-desc"
          animate={controls}
          initial="hidden"
          variants={textVariants}
        >
          <div className="about-text">
            I'm a software engineer that enjoys creating exceptional web
            applications with simple yet beautiful digital user interfaces and
            experiences.
          </div>
          <div className="about-text">
            I'm particular about delivering applications with Fast load times,
            lag free interaction, responsive layouts with amazing effects and
            animations built on intuitive and dynamic user interfaces for great
            user experiences.
          </div>
          <div className="about-text">
            I started my web development jorney in 2020 and for the most of it,
            I've been a freelancer. Below are some of the technologies I'm
            currently working with :
          </div>
          <div className="about-tech">
            {Techs.map((tech, index) => (
              <div className="tech" key={index}>
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="about-image ">
          <motion.img
            animate={controls}
            initial="hidden"
            variants={imgVariants}
            className="box-shadow-diffuse"
            src="images/Akpasi.jpeg"
            alt="Akpasi Favour"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
