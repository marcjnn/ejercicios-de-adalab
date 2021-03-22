import React, { useState } from "react";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [age, setAge] = useState("A");
  const [genre, setGenre] = useState([]);

  // const handleGenre = (ev) => {
  //   if (!genre.includes(ev.target.value)) {
  //     genre.push(ev.target.value);
  //   }
  //   // console.log(genre);
  //   // setGenre(genre.push(ev.target.value));
  //   // console.log(genre);
  // };

  const handleChange = (ev) => {
    const isCheck =
      ev.target.type === "radio" || ev.target.type === "checkbox"
        ? true
        : false;

    const updateByName = (ev) => {
      const field = ev.target.name;
      if (field === "title") {
        setTitle(ev.target.value);
      } else if (field === "description") {
        setDescription(ev.target.value);
      } else if (field === "language") {
        setLanguage(ev.target.value);
      }
    };

    // const updateByChecked = (ev) => {
    //   // const field = ev.target.checked;
    //   // if (field) {
    //   // }
    // };

    const updateByChecked = (ev) => {
      const field = ev.target.checked;
      if (field) {
        setAge(ev.target.value);
      }
    };

    // const updateByChecked = (ev) => {
    //   const field = ev.target.checked;
    //   if (field) {
    //     if ((ev.target.type = "radio")) {
    //       return setAge(ev.target.value);
    //     }
    //     if ((ev.target.type = "checkbox")) {
    //       return setGenre(ev.target.value);
    //     }
    //   }
    // };

    const updateData = isCheck ? updateByChecked : updateByName;

    updateData(ev);
  };

  return (
    <>
      <form action="" style={{ display: "flex", alignItems: "flex-start" }}>
        <input
          type="text"
          name="title"
          placeholder="movie title"
          onChange={handleChange}
          value={title}
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="movie description"
          onChange={handleChange}
          value={description}
        ></textarea>
        <select name="language" id="" onChange={handleChange} value={language}>
          <option value="en">🇬🇧</option>
          <option value="es">🇪🇸</option>
          <option value="pt">🇵🇹</option>
        </select>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="age-A">
            <input
              name="age"
              id="age-A"
              type="radio"
              value="A"
              checked={age === "A"}
              onChange={handleChange}
            />
            A
          </label>
          <label htmlFor="age-7">
            <input
              name="age"
              id="age-7"
              type="radio"
              value="7"
              checked={age === "7"}
              onChange={handleChange}
            />
            7
          </label>
          <label htmlFor="age-12">
            <input
              name="age"
              id="age-12"
              type="radio"
              value="12"
              checked={age === "12"}
              onChange={handleChange}
            />
            12
          </label>
          <label htmlFor="age-16">
            <input
              name="age"
              id="age-16"
              type="radio"
              value="16"
              checked={age === "16"}
              onChange={handleChange}
            />
            16
          </label>
          <label htmlFor="age-18">
            <input
              name="age"
              id="age-18"
              type="radio"
              value="18"
              checked={age === "18"}
              onChange={handleChange}
            />
            18
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="comedy">comedy</label>
          <input
            name="genre"
            id="comedy"
            type="checkbox"
            value="comedy"
            checked={genre === "comedy"}
            onClick={handleChange}
          />
          <label htmlFor="drama">drama</label>
          <input
            name="genre"
            id="drama"
            type="checkbox"
            value="drama"
            checked={genre === "drama"}
            onClick={handleChange}
          />
          <label htmlFor="fantasy">fantasy</label>
          <input
            name="genre"
            id="fantasy"
            type="checkbox"
            value="fantasy"
            checked={genre === "fantasy"}
            onClick={handleChange}
          />
          <label htmlFor="action">action</label>
          <input
            name="genre"
            id="action"
            type="checkbox"
            value="action"
            checked={genre === "action"}
            onClick={handleChange}
          />
          <label htmlFor="family">family</label>
          <input
            name="genre"
            id="family"
            type="checkbox"
            value="family"
            checked={genre === "family"}
            onClick={handleChange}
          />
          <label htmlFor="horror">horror</label>
          <input
            name="genre"
            id="horror"
            type="checkbox"
            value="horror"
            checked={genre === "horror"}
            onClick={handleChange}
          />
        </div>
      </form>
      <article>
        <h2>title: {title}</h2>
        <p>description: {description}</p>
        <p>language: {language}</p>
        <p>rating: {age}</p>
        <ul>genres: {genre}</ul>
      </article>
    </>
  );
};

export default MovieForm;
