import "./About.css";
// import { FiFramer } from "react-icons/fi";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejsSmall,
//   DiMongodb,
// } from "react-icons/di";

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
      icon: "https://img.icons8.com/color/16/undefined/mongodb.png",
    },
  ];

  return (
    <div className="about-container container">
      <span className="section-header">ABOUT</span>
      <div className="about-section">
        <div className="about-desc">
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
        </div>

        <div className="about-image">
          <img src="images/Akpasi.jpeg" alt="Akpasi Favour" />
        </div>
      </div>
    </div>
  );
};

export default About;
