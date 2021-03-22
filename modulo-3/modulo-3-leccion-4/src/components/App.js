import React from "react";
import "../style/App.css";
// import OnionHater from "./OnionHater";
// import Destiny from "./Destiny";
// import OnionHater2 from "./OnionHater2";
import Destiny2 from "./Destiny2";
// import CitySelector from "./CitySelector";

// let isHatingValue;

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.onChangeListner = this.onChangeListner.bind(this);
  }

  // ejercicio 3
  // isHating(ev) {
  //   if (ev.target.value.includes("cebolla")) {
  //     return true;
  //   }
  // }

  // onChangeListner(ev) {
  //   isHatingValue = this.isHating(ev) ? "background" : "";
  //   this.forceUpdate();
  // }
  render() {
    return (
      <>
        {/* <div>
          <h2 className="hSmall">Ej. 5: Ciudades</h2>
          <CitySelector />
        </div> */}
        <div>
          <h2 className="hSmall">Ej. 4: Elge tu destino</h2>
          <Destiny2 />
        </div>
        {/* <div className={`js-div div ${isHatingValue}`}>
          <h2 className="hSmall">Ej. 3: Onion hater</h2>
          <OnionHater2
            onChangeListner={this.onChangeListner}
          />
        </div> */}
        {/* <div>
          <h2 className="hSmall">Ej. 2: Elge tu destino</h2>
          <Destiny />
        </div>
        <div>
          <h2 className="hSmall">Ej. 1: Onion hater</h2>
          <OnionHater />
        </div> */}
      </>
    );
  }
}

export default App;
