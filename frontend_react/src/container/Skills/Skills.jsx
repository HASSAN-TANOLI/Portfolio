import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <h2 className="head-text"> Skills & Experience </h2>

      <div className="app__skills-container"></div>
    </>
  );
};

export default Skills;
