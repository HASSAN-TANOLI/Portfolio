import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/muhammad-hassan-b008ba23a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/HASSAN-TANOLI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://twitter.com/hassant59823121"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;
