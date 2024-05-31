import React from "react";

function CardCategory({ name = "default", imageSrc }) {
  return (
    <div className="card-category">
      <img src={imageSrc} alt={name} />
      <label>{name}</label>
    </div>
  );
}

export default CardCategory;
