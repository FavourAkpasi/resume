import "./About.css";
import { motion } from "framer-motion";

const About = () => {
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
  ];

  return (
    <div className="about-container container" id="about">
      <motion.span
        className="section-header"
        initial={{ y: "-5rem" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        ABOUT
      </motion.span>
      <div className="about-section">
        <motion.div
          className="about-desc"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
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
            animate={{ scale: [0, 1] }}
            transition={{ delay: 1.5, duration: 0.3 }}
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
