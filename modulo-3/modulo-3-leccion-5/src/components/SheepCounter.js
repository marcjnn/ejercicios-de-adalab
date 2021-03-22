const SheepCounter = (props) => {
  console.log(props);
  // const updateSheep = () => {
  //   props.addSheep();
  // };
  return (
    <>
      <h2>{props.sheep}</h2>
      <button onClick={props.addSheep}>Dame las ovejas!!!</button>
    </>
  );
};

export default SheepCounter;
