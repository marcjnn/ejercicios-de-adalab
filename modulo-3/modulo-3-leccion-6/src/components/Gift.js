import React from "react";

const Gift = (props) => {
  // const getGifts = () => {
  //   props.getPresents();
  // };
  const getResults = () => {
    props.getPresents();
  };
  return (
    <div className="presents">
      <p>Tengo {props.presentsNumber} regalos</p>
      {/* <button type="button" onClick={getGifts}> */}
      <button type="button" onClick={getResults}>
        Dame regalos
      </button>
    </div>
  );
};

export default Gift;
