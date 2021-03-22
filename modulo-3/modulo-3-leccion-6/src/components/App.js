import "../stylesheets/App.scss";
import Older from "./Older";
import Gift from "./Gift";

import React, { useState } from "react";

const App = () => {
  const [age, setAge] = useState(20);
  const [present, setPresent] = useState(1);
  let grow = (n) => n + 1;
  // let increment = () => number + 1;
  const handleResults = () => {
    // console.log(grow());
    setAge(grow(age));
    setPresent(grow(present));
  };

  return (
    <div className="App">
      <Older getGrowth={handleResults} myAge={age} />
      {/* <Gift getPresents={handlePresents} giftsNumber={number} /> */}
      <Gift getPresents={handleResults} presentsNumber={present} />
    </div>
  );
};

export default App;
