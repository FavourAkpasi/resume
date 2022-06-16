import React from "react";
import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <motion.span
          className="section-header"
          initial={{ y: "-5rem" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          CONTACT{" "}
        </motion.span>
        <div className="contact-desc container">
          <motion.h4
            initial={{ x: "-100rem" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            I enjoy connecting and collaborating with people, if you Have a
            question, want to work together, or simply want to say Hi, Feel free
            to reach out.
          </motion.h4>
          <div className="contact-buttons">
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <TwitterIcon cursor="pointer" />
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <LinkedInIcon cursor="pointer" />
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <EmailIcon cursor="pointer" />
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <GitHubIcon cursor="pointer" />
            </motion.div>
            <motion.div className="button" whileHover={{ scale: 1.1 }}>
              <InstagramIcon cursor="pointer" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
