import React from "react";
import NewLogo from "../assets/images/icon/New.png";
function CardProduct({
  name = "default",
  imageSrc,
  model = "default",
  originalPrice = 0,
  offPrice = 0,
  isNew = false,
}) {
  return (
    <div className="card-product">
      {isNew && <img className="new-sign" src={NewLogo} alt="new" />}
      <div>
        <img src={imageSrc} alt={name} />
        <label className="categoryName">{name}</label>
      </div>
      <div style={{ height: "30px" }}>
        {offPrice > 0 && (
          <label className="OffPrice">
            {parseFloat(offPrice).toFixed(2)}$ Off
          </label>
        )}
      </div>
      <div style={{ display: "block" }}>
        <label className="salesPrice">
          {parseFloat(originalPrice - offPrice).toFixed(2)} $
        </label>
        <label className="originalPrice">
          {parseFloat(originalPrice).toFixed(2)} $
        </label>
      </div>
      <br></br>
      <label className="model">{model}</label>
    </div>
  );
}

export default CardProduct;
