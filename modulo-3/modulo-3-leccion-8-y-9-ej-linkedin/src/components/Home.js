import User from "./User";
import Filter from "./Filter";

const Home = (props) => {
  const users = props.match.params.store.map((user, index) => {
    return (
      <li key={index}>
        <User user={user} />
      </li>
    );
  });
  return (
    <>
      <Filter cities={props.cities} gender={props.gender} />
      <ul>{users}</ul>
    </>
  );
};

export default Home;
