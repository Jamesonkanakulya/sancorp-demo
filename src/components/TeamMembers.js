import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeamSocialMedia from "./TeamSocialMedia";

function TeamMembers({ item }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  return (
    <div className="col-lg-3 col-md-3  col-sm-6 col-xs-12 sancorp-team">
      <img
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        src={item.imagez[0]}
        alt={item.name}
      />
      <TeamSocialMedia
        show={show}
        handleShow={handleShow}
        handleHide={handleHide}
      />

      <h3>
        <Link to={`/about/team/${item.slug}`}>{item.name}</Link>{" "}
      </h3>
      <h5>{item.title}</h5>
    </div>
  );
}

export default TeamMembers;
