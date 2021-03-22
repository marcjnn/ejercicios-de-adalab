const onChangeListner = (ev) => {
  const selected = ev.target.value;
  if (selected) {
    alert(`Tu destino es ${selected}`);
  }
};

function Destiny() {
  return (
    <>
      <label htmlFor="destination">Your next trip is to...</label>
      <select onChange={onChangeListner} name="destination" id="destination">
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    </>
  );
}

export default Destiny;
