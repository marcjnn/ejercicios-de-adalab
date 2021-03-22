const FormEj2 = (props) => {
  return (
    <>
      <form action="" method="">
        <label htmlFor="number">Choose a number</label>
        <input
          type="number"
          name="number"
          id="number"
          onChange={props.handleNumber}
        />
      </form>
      <label htmlFor="even">even</label>
      <input
        type="checkbox"
        name="evenodd"
        id="even"
        value="even"
        onChange={props.handleEvenOdd}
      />
      <label htmlFor="odd">odd</label>
      <input
        type="checkbox"
        name="evenodd"
        id="odd"
        value="odd"
        onChange={props.handleEvenOdd}
      />
      <p>{props.result}</p>
      <p>{props.evenodd}</p>
    </>
  );
};

export default FormEj2;
