const PersonDetail = (props) => {
  console.log(props);
  return (
    <article>
      <img
        src={props.user.photo}
        alt={`${props.user.name.first} ${props.user.name.last}`}
      />
      <h2>
        {props.user.name.first} {props.user.name.last}
      </h2>
      <p>{props.user.id}</p>
      <p>{props.user.city}</p>
      <p>{props.user.gender}</p>
    </article>
  );
};

export default PersonDetail;
