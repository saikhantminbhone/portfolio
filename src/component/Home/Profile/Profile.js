/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import './Profile.css'

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-main ">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/saikhant.minbhone.3/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/saikhant_with_rafe/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://github.com/saikhantminbhone">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Sai Khant Min Bhone</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter words={[" Full Stack Developer.", " MERN Stack Developer.", " Python Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </h1>
              <span className="profile-role-tagline">
                Can create website with front-end and back-end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="./SaiKhantMinBhoneResume.pdf"
              download="Rafe SaiKhantMinBhoneResume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
