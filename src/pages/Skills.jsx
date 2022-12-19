import React from "react";

const Skills = () => {
  return (
    <div className="mx-auto">
      <div className="p-4">
        <h1 className="text-3xl sm:text-4xl text-gray-600">MY Skills</h1>
        <div className="mt-4">
          <h1 className="heading">Programming Languages</h1>
          <p className="skills">
            JavaScript (ES6), TypeScript, HTML, CSS/Sass, PYTHON
          </p>
        </div>
        <div className="mt-4">
          <h1 className="heading">Libraries & Frameworks</h1>
          <p className="skills">
            React, NextJS, TailwindCss, Node.js, jQuery, Vue
          </p>
        </div>
        <div className="mt-4">
          <h1 className="heading">Tools & Platforms</h1>
          <p className="skills">
            Git, Vercel, Vite, Gulp, Webpack, Netlify, Wordpress, Firebase
          </p>
        </div>
        <div className="mt-4">
          <h1 className="heading">Design</h1>
          <p className="skills">Figma, Dribble, Sketch, InVision, InDesign</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
