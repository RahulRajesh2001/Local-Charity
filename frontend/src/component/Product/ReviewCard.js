import ReactStars from "react-rating-stars-component"
import React from "react";
import profile from "../images/profile.png";


const ReviewCard =({review})=>{
  const options={
    edit:false,
    color:"rgba(20,20,20,0.1",
    activeColor:"tomato",
    size:window.innerWidth <600 ? 20 : 25,
    value:review.ratings,
    isHalf:true,
}

  return<div className="reviewCard">
    <img src={profile} alt="micky"></img>
    <p>{review.name}</p>
    <ReactStars {...options}/>
    <span>{review.comment}</span>

  </div>
}


export default ReviewCard
