import React from "react";
import testImg from "../assest/one-mont-img.png";
import "../style/Card.css"

const Card = ({ title, text, img }) => {
  return (
    <div className="card-wrap">
      <div className="img-box">
        <figure>
          <img src={img || testImg} alt="" />
        </figure>
      </div>
      <p className="title">{title || "title"}</p>
      <p className="text">
        {text || "Access funds for personal upkeep for 30 days only"}
      </p>
    </div>
  );
};

export default Card;
