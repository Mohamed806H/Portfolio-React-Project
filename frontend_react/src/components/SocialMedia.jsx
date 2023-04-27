import React from "react";
import {BsInstagram,BsGithub,BsLinkedin}  from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="twet">
        <a href="https://github.com/Mohamed806H" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div className="fac">
        <a href="https://www.facebook.com/mohamed.hussein32" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div className="inst">
        <a href="https://www.instagram.com/wd.mohamedhussein" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div className="link">
        <a href="https://www.linkedin.com/in/mohamed-hussein-82a645262/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
