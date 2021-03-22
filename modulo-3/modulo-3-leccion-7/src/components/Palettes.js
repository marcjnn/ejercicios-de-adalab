import React, { useState } from "react";

const Palettes = () => {
  const [selectedPalette, setSelectedPalette] = useState("3");

  const handleChangePalette = (ev) => {
    // const newValue = ev.currentTarget.value;

    setSelectedPalette(ev.currentTarget.value);

    // console.log(palette);
  };
  return (
    <>
      <label className="display-block design__square-label">
        <input
          type="radio"
          name="palette"
          className="design__square-radio js_palette-select"
          value="1"
          onChange={handleChangePalette}
          checked={selectedPalette === "1"}
        />
        <ul className={`palette-1-election`}>
          <li className="design__square-color color-1">Color 1</li>
          {/* <li className="design__square-color color-2">Color 1</li>
          <li className="design__square-color color-3">Color 1</li> */}
        </ul>
      </label>
      <label className="display-block design__square-label">
        <input
          type="radio"
          name="palette"
          className="design__square-radio js_palette-select"
          value="2"
          onChange={handleChangePalette}
          checked={selectedPalette === "2"}
        />
        <ul className={`palette-2-election`}>
          <li className="design__square-color color-1">Color 2</li>
          {/* <li className="design__square-color color-2">Color 2</li>
          <li className="design__square-color color-3">Color 2</li> */}
        </ul>
      </label>
      <label className="display-block design__square-label">
        <input
          type="radio"
          name="palette"
          className="design__square-radio js_palette-select"
          value="3"
          onChange={handleChangePalette}
          checked={selectedPalette === "3"}
        />
        <ul className={`palette-3}-election`}>
          <li className="design__square-color color-1">Color 3</li>
          {/* <li className="design__square-color color-2">Color 3</li>
          <li className="design__square-color color-3">Color 3</li> */}
        </ul>
      </label>
      {selectedPalette}
    </>
  );
};

export default Palettes;
