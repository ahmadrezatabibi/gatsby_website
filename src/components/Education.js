import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Academy of ART University</h3>
          <p className="info">
            Master in Architecture
            <span>&bull;</span>
            <em className="date">April 2019</em>
          </p>

          <p>
            the courses description in here
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>University of Shiraz</h3>
          <p className="info">
            B.A. Architecture
            <span>&bull;</span>
            <em className="date">March 2010</em>
          </p>

          <p>
            the courses discription in here
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
