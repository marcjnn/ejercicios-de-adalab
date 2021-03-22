import "../style/OnionHater.css";

function OnionHater(props) {
  // const isHating = (ev) => {
  //   if (ev.target.value.includes("cebolla")) {
  //     return true;
  //   }
  // };

  // const onChangeListner = () => {
  //   const parentElement = props.parentElement;

  //   console.log(parentElement);

  //   if (isHating) {
  //     parentElement.classList.add("background");
  //   } else {
  //     parentElement.classList.remove("background");
  //   }
  // };

  return (
    <>
      <label htmlFor="diary" className="onionHater">
        Dear diary...
      </label>
      <textarea
        onChange={props.onChangeListner}
        id="diary"
        rows="10"
        cols="40"
        className="onionHater"
      />
    </>
  );
}

export default OnionHater;
