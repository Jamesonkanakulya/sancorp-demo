import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SancorpContext } from "./context";
import TeamMembers from "./TeamMembers";
import TeamSocialMedia from "./TeamSocialMedia";
import TitleOne from "./TitleOne";

function Team() {
  const homepost = useContext(SancorpContext);
  const homeSlides = homepost.context;
  const team = homepost.team;
  console.log(team);
  return (
    <div style={{ background: "#F0F2F2" }} className="container-fluid py-4">
      <div className="container team">
        <TitleOne title="meet our team" />
        <div className="row">
          {team.map((item, i) => (
            <TeamMembers key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
