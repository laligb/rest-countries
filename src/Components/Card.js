import React from "react";

function Card({ country }) {
  return (
    <div className="row">
      <div className="img"></div>
      <h2 className="country"></h2>
      <p className="population"></p>
      <p className="region"></p>
      <p className="capital"></p>
    </div>
  );
}

export default Card;
