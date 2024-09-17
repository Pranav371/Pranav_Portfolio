import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <a href="https://github.com/Pranav371" target="_blank" rel="noopener noreferrer">
        github.com/Pranav371
        </a>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a href="https://www.linkedin.com/in/ps371/" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/ps371
        </a>
      </div>
      <div className="contact-item">
        <SiLeetcode className="contact-icon" />
        <a href="https://leetcode.com/u/Pranav989/" target="_blank" rel="noopener noreferrer">
          leetcode.com/Pranav989
        </a>
      </div>
      <div className="contact-item">
        <FaPhone className="contact-icon" />
        <span>+91 9848452438</span>
      </div>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:pranavsaini371@gmail.com">pranavsaini371@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
