import React from "react";
import "../style/HalfPage.css";

function HalfPage(props) {
  return (
    <div className="halfPageItem">
      {props.children}
      <p>{props.fill}</p>
    </div>
  );
}

export default HalfPage;
