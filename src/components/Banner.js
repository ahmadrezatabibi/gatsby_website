import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Saba Raji.</h1>
      <h3>
        I'm a experienced <span> Interior Designer </span> with a demonstrated history of working in the <span> architecture & planning industry. </span>
        Skilled in <span>Negotiation, AutoCAD, Budgeting, Microsoft Word, and InDesign.</span> Strong arts and design professional and MFA student 
        focused in <span>Interior Architecture Design at the Academy of Art University. </span>
         Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
