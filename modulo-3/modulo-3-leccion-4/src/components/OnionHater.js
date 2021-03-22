import "../style/OnionHater.css";

const onChangeListner = (ev) => {
  const textarea = ev.target.value;
  if (textarea.includes("onion")) {
    alert("Oh sweet sweet onion, where are thou?");
  }
};

function OnionHater() {
  return (
    <>
      <label htmlFor="diary" className="onionHater">
        Dear diary...
      </label>
      <textarea
        onChange={onChangeListner}
        id="diary"
        rows="10"
        cols="40"
        className="onionHater"
      />
    </>
  );
}

export default OnionHater;
