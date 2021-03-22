import React from "react";

const Older = (props) => {
  const getResults = () => {
    props.getGrowth();
  };
  return (
    <div className="ageing">
      <p>Hoy tengo {props.myAge} años de edad</p>
      <button type="button" onClick={getResults}>
        Hazme más viejo
      </button>
    </div>
  );
};

export default Older;
