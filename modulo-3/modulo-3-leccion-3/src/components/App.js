import "../style/App.css";
import "../style/HalfPage.css";
import Products from "./Products";
import ReactList from "./ReactList";
import Students from "./Students";
import HalfPage from "./HalfPage";

function App() {
  return (
    <div>
      {/* <div>
        <h2>Ej. 3: defaultProps</h2>
        <Products />
      </div> */}
      <div>
        <h2>Ej. 2: HalfPage</h2>
        <div className="halfPageContainer">
          <HalfPage fill="estoy a la izquierda">
            <h2>H2</h2>
          </HalfPage>
          <HalfPage fill="estoy a la derecha">
            <h3>H3</h3>
          </HalfPage>
        </div>
        <div>
          <h2>Ej. 1: Estudiantes promo A</h2>
          <Students />
        </div>
      </div>
      <div>
        <h2>Ej 0: Pintar listados con React:</h2>

        <ReactList />
      </div>
    </div>
  );
}

export default App;
