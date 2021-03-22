import "../style/App.css";
import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/counter">counter</Link>
          </li>
          <li>
            <Link to="/relax">relax</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Header;
