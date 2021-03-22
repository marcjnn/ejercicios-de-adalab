import React, { useState } from "react";
import SheepCounter from "./SheepCounter";
import "../style/App.css";

function App() {
  const [sheep, setSheep] = useState(0);

  const incrementSheep = (n) => n + 1;

  const handleSheep = () => {
    setSheep(incrementSheep(sheep));
  };
  return <SheepCounter sheep={sheep} addSheep={handleSheep} />;
}

export default App;

// EJERCICIO 1

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputValue = ""; /* is there a better way to do it??? */
//     this.handleKeyUp = this.handleKeyUp.bind(this);
//   }

//   handleKeyUp(ev) {
//     this.setState((props) => {
//       this.inputValue = ev.target.value;
//       return this.inputValue;
//     });
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <h2>Ej. 1: Mostrando info relacionada</h2>
//           <input type="text" onKeyUp={this.handleKeyUp} />
//           <p>{this.inputValue}</p>
//         </div>
//       </>
//     );
//   }
// }

// EJERCICIO 2

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       background: "blue",
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState, props) => ({
//       background: prevState.background === "blue" ? "red" : "blue",
//     }));
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <h2>Ej. 2: Mostrando info relacionada</h2>
//           <div
//             className={`div bgr-${this.state.background}`}
//             onClick={this.handleClick}
//           ></div>
//         </div>
//       </>
//     );
//   }
// }

// EJERCICIO 3
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.date = new Date();
//     this.time = {
//       hour: this.date.getHours(),
//       minute: this.date.getMinutes(),
//       second: this.date.getSeconds(),
//     };
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <h2>Ej. 2: Qué hora será</h2>
//           <Clock time={this.time} />
//         </div>
//       </>
//     );
//   }
// }
