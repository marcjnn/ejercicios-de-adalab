import React from "react";
import CityImage from "./CityImage";

let cityPhoto = "";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeListner = this.onChangeListner.bind(this);
  }

  onChangeListner = (ev) => {
    cityPhoto = ev.target.value;
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <label htmlFor="destination">Your next trip is to...</label>
        <select
          onChange={this.onChangeListner}
          name="destination"
          id="destination"
        >
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <CityImage city={cityPhoto} />
      </>
    );
  }
}

export default Destiny;
