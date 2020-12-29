import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function TeamSocialMedia({ show, handleShow, handleHide }) {
  return (
    <div className={show ? "team-social-media" : "hide"}>
      <ul>
        <li>
          <a href="#">
            <FaFacebookF />
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedinIn />
          </a>{" "}
        </li>
        <li>
          <a href="#">
            {" "}
            <FaInstagram />{" "}
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default TeamSocialMedia;
