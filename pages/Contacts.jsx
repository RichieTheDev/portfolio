import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { AiFillLinkedin } from "react-icons/ai";

const Contacts = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl text-gray-600">Reach Out!</h1>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl">
        Are you Interested in A Front End Developer That Loves Fun Builds And
        Projects?
      </p>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl">
        Hit Me Up. I'm open to Freelance, Part Time And Permanent Developer
        Roles.
      </p>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl">Get in Touch With Me</p>
      <div className="mt-4 sm:mt-8">
        <a href="mailto:richiemomodu@gmail.com" className="btn ">
          Send An Email
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-8 mt-14">
        <div className="flex flex-row">
          <TiSocialTwitter size={25} />
          <a
            href="https://twitter.com/_richierankin"
            className="hover:text-amber-600"
            target="_blank"
          >
            _richierankin
          </a>
        </div>
        <div className="flex flex-row">
          <AiFillLinkedin size={25} />
          <a
            href="https://www.linkedin.com/in/richie-momodu/"
            className="hover:text-amber-600"
          >
            Richie Momodu
          </a>
        </div>

        <div className="flex flex-row">
          <SlSocialGithub size={25} />
          <a
            href="https://github.com/RichieTheDev"
            className="hover:text-amber-600"
          >
            richiethedev
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
