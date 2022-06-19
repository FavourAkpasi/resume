import React, { useEffect } from "react";
import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const h4Variants = {
  visible: { x: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { x: "-100rem" },
};
const spanVariants = {
  visible: { y: 0, transition: { duration: 0.5 } },
  hidden: { y: "-6rem" },
};
const iconVariants = {
  visible: { y: 0, transition: { duration: 0.5, delay: 1 } },
  hidden: { y: "100rem" },
};

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <div ref={ref} className="contact-container" id="contact">
        <motion.span
          className="section-header"
          animate={controls}
          initial="hidden"
          variants={spanVariants}
        >
          {" "}
          CONTACT{" "}
        </motion.span>
        <div className="contact-desc container">
          <motion.h4 animate={controls} initial="hidden" variants={h4Variants}>
            I enjoy connecting and collaborating with people, if you Have a
            question, want to work together, or simply want to say Hi, Feel free
            to reach out.
          </motion.h4>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={iconVariants}
            className="contact-buttons"
          >
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <a href="https://twitter.com/favourAkpasi">
                <TwitterIcon />
              </a>
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <a href="https://www.linkedin.com/in/favour-akpasi-a9580523b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BrDj3gYVNTqKL7KBBK5wiKg%3D%3D">
                <LinkedInIcon />
              </a>
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <a href="mailto:akpasifavour@gmail.com">
                <EmailIcon />
              </a>
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <a href="https://github.com/favourakpasi">
                <GitHubIcon />
              </a>
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <a href="https://instagram.com/akpasifavour">
                <InstagramIcon />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
