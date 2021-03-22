import "../style/App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const dataSaved = localStorage.getItem("dataSaved");
  console.log(dataSaved);

  const [text, setText] = useState(dataSaved || "");
  console.log(text);
  useEffect(() => {
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente
    localStorage.setItem("dataSaved", text);

    //     this.setState({ text: savedText });
    //   }
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    // return () => {
    //   clearInterval(intervalId);
    // };
  });
  const handleChange = (ev) => {
    const textToSave = ev.target.value;
    console.log(textToSave);
    setText(textToSave);
  };
  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
    </>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(ev) {
//     console.log(ev.target.value);
//     this.setState({ text: ev.target.value });
//   }

//   componentDidMount() {
//     const savedText = localStorage.getItem("dataSaved");
//     this.setState({ text: savedText });
//   }

//   componentDidUpdate() {
//     localStorage.setItem("dataSaved", this.state.text);
//   }

//   componentWillUnmount() {}

//   render() {
//     return (
//       <>
//         <input type="text" onChange={this.handleChange} />
//         <p>{this.state.text}</p>
//       </>
//     );
//   }
// }

export default App;
