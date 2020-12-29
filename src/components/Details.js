import React,{useState} from 'react'
import ChooseUs from "./ChooseUs";
import Graph from "./Graph";
import TeamSocialMedia from "./TeamSocialMedia";

function Details({post}) {

    const [show, setShow] = useState(false);

    const handleShow = () => {
      setShow(true);
    };
    const handleHide = () => {
      setShow(false);
    };


    return (
        <div className="container p-4">
        <div className="row  team-member-details my-4">
          <div className="col-lg-6 col-md-6 col-sm-12  right">
            <img src={post?.imagez[0]} alt={post.title} />
          </div>
  
          <div className="col-lg-6 col-md-6 col-sm-12 left ">
            <h4>{post?.name}</h4>
            <h6>{post?.title}</h6>
            <p>{post?.details}</p>
            <p>{post?.details}</p>
  
            <TeamSocialMedia
              show={show}
              handleShow={handleShow}
              handleHide={handleHide}
            />
          </div>
        </div>
  
        <ChooseUs />
      </div>
    )
}

export default Details
