import React, { useContext, useState, useEffect } from "react";
import { SancorpContext } from "./context";
import Details from "./Details";


function TeamMemberDeatails(props) {
  const [slug, setSlug] = useState(props.match.params.slug);


  const homepost = useContext(SancorpContext);

  const member = homepost.team.find((item) => slug === item.slug);

  // const [member, setMember] = useState(team.find((item) => slug === item.slug));
  console.log(member);

  // useEffect(() => {
  //   const tempItem = team.find((item) => slug === item.slug);
  //   setMember(tempItem);
  // }, [team]);

  if (!member) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return <Details post={member}/>
}

export default TeamMemberDeatails;
