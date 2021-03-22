import photo from "../images/girl.jpg";
import "../style/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const heart = <FontAwesomeIcon icon={faHeart} />;

function App() {
  // <div className="App">
  //   <article className="card">{/* <i className="icon"></i> */}</article>
  // </div>;

  // userAvatar
  // userName
  // postDate
  // postHeader

  // const currentDate = new Date();
  // console.log(currentDate);

  const userAvatar = (
    <img src={photo} className="card__avatar" alt="Benedetta Vincent" />
  );
  const userName = <h1 className="card__title">Benedetta Vincent</h1>;
  const postDate = <h2 className="card__date">Lunes 26 de junio 2017</h2>;

  const postHeader = (
    <header className="card__header">
      {userAvatar}
      {userName}
      {postDate}
    </header>
  );

  // postText

  const postText = (
    <p className="card__text">
      Pillage log ho chase scurvy avast skysail. Man-of-war haul wind hearties
      lugsail Sea Legs hardtack starboard. Wench line squiffy haul wind pounders
      keelhaul crack Jennys tea cup. Wench keel bilge rat scuttle Jack Tar
      lateen sail ye. Crimp fluke blow the man down barkadeer bounty walk the
      plank heave down.
    </p>
  );

  // readMore
  // postLikes
  // likesIcon
  // postFooter

  const readMore = <small className="footer__small">Leer más...</small>;
  const postLikes = <p className="footer__likes">37</p>;
  // const likesIcon = <FontAwesomeIcon icon={faHeart} />;

  const postFooter = (
    <footer className="card__footer">
      {readMore}
      {postLikes}
      {heart}
    </footer>
  );

  //post
  const post = (
    <article className="card">
      {postHeader}
      {postText}
      {postFooter}
    </article>
  );

  const appRoot = <div className="App">{post}</div>;

  return appRoot;
}

export default App;

//<div className="App">
// <article className="card">
//  <header className="card__header">
//    <img src={photo} className="card__avatar" alt="Benedetta Vincent" />
//    <h1 className="card__title">Benedetta Vincent</h1>
//    <h2 className="card__date">Lunes 26 de junio 2017</h2>
//  </header>
//  <p className="card__text">
//    Pillage log ho chase scurvy avast skysail. Man-of-war haul wind hearties
//    lugsail Sea Legs hardtack starboard. Wench line squiffy haul wind pounders
//    keelhaul crack Jennys tea cup. Wench keel bilge rat scuttle Jack Tar lateen
//    sail ye. Crimp fluke blow the man down barkadeer bounty walk the plank heave
//    down.
//  </p>
//  <footer className="card__footer">
//    <small className="footer__small">Leer más...</small>
//    <p className="footer__likes">37</p>
//    <i className="fas fa-heart footer__heart"></i>
//  </footer>
// </article>;
//</div>
