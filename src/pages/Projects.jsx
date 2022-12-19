import React from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";
import Project7 from "../assets/Project7.png";
import Project8 from "../assets/Project8.png";
import Project9 from "../assets/Project9.png";
import { SlSocialGithub } from "react-icons/sl";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-3xl sm:text-4xl text-gray-600">
        My Projects
      </h2>
      <div
        className="mt-8 gap-6 mx-10
       sm:mx-28 sm:grid sm:grid-cols-2 flex flex-col"
      >
        <div className="relative ">
          <img src={Project1} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://richietravel.vercel.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/travel.comReactJs"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project2} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://crappochapo.vercel.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/cryptositereactjs"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project3} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://richiebookings.vercel.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/Bookings.comReactsjs"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project4} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://musicapp-two.vercel.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/Music-App"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project5} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://myteslareactjs.vercel.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/teslareactjs"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project9} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://alditype.netlify.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/tailwind-Aldi-Type-Site"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project6} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://loginpageauth.vercel.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/LoginAuth"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project7} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://myformpages.vercel.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/FormPage"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Project8} alt="/" className="imgbody" />
          <div className="img">
            <div className="links">
              <a
                href="https://richstore.netlify.app/"
                target="_blank"
                className="btn"
              >
                Live
              </a>
              <a
                href="https://github.com/RichieTheDev/Tailwind-RichStore"
                target="_blank"
                className="hover:text-amber-600"
              >
                <SlSocialGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
