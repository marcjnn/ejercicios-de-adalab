const Filter = (props) => {
  // filterCity array has all 50 results with repetition; I use ...new Set() formula to create a new array with only unique values
  const uniqueCities = [...new Set(props.cities)];
  const uniqueGender = [...new Set(props.gender)];

  const mapFilterItems = (arr1, arr2, filter) => {
    return arr1.map((item, index) => {
      return (
        <li key={index}>
          <label>
            <input
              name={filter}
              type="checkbox"
              value={item}
              checked={arr2.includes(item)}
              onClick={handleCities}
            />
            {item}
          </label>
        </li>
      );
    });
  };

  const handleCities = (ev) => {
    console.log("estoy clickando");
    console.log(ev.target.value);
    props.filteredCities.push(ev.target.value);
    console.log(props.filteredCities);
  };

  // add to input once I'm done onClick={handleCheckboxClick}
  // const handleCheckboxClick = () => {}

  const filteredCities = mapFilterItems(
    uniqueCities,
    props.filteredCities,
    "city"
  );
  const filteredGender = mapFilterItems(uniqueGender, "gender");

  return (
    <form>
      <fieldset>
        <legend>Gender</legend>
        <ul>{filteredGender}</ul>
      </fieldset>
      <fieldset>
        <legend>City</legend>
        <ul>{filteredCities}</ul>
      </fieldset>
    </form>
  );
};

export default Filter;
