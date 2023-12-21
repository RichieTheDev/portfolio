import React from "react";

const Skills = () => {
  return (
    <div className="mx-auto">
      <div className="p-4">
        <h1 className="text-3xl sm:text-4xl text-gray-600">MY Skills</h1>
        <div className="mt-4">
          <h1 className="heading">Programming Languages</h1>
          <p className="skills">•TypeScript, •Javascript, •HTML/CSS, •Python</p>
        </div>
        <div className="mt-4">
          <h1 className="heading">Libraries & Frameworks</h1>
          <p className="skills">
            React, NextJS, TailwindCss,SASS,Material Ui,jQuery
          </p>
        </div>
        <div className="mt-4">
          <h1 className="heading">Tools & Platforms</h1>
          <p className="skills">
            Wordpress, Sanity IO, Supabase, Git, vercel, Axios, Cypress,
            Zustand, Firebase, API, Agile/Scrum, Jest
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
