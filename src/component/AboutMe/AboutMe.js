/* eslint-disable react/style-prop-object */
import React from "react";
import Lottie from "react-lottie";
import animationData from "./Aboutus.json";
import './AboutMe.css'

export const AboutMe = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (

    
      
    <div className="about-me-section aboutme-inside my-5" id="aboutme">
      <div className="container d-flex flex-column">
        <span className="about-me-text">About Me</span>
        <span className="about-me-why">Why Choose me?</span>
        <div className="row justify-content-center shadow-lg my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <div>
              <Lottie options={defaultOptions} height={500} width={500} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 py-5 mr-5 d-flex flex-column">
            <span className="about-me-some-text ">
              Full Stack Web developer with background knowledege in MERN Stack
              with redux and with Python along with a knack of building
              application with almost efficiency. Strong professional with a BSC
              willing to be an assest for an organizaion.
            </span>

            <span className="few-highlights-text py-3">
              <span className="few-texts ">Here are few Highlights</span>
              <span className="few-lists">
                <ul >
                  <li>Full Stack Web Development</li>
                  <li>Interactive Front end as per desighn</li>
                  <li>Node Js, Express, MongoDB (All backend technogies) </li>
                  <li>Developer programs and data analysis using Python</li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

  );
};
