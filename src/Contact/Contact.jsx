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
      <div className="contact-container" id="contact">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
