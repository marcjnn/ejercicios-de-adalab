import "../style/App.css";
import React from "react";
import Loader from "./Loader";
import User from "./User";
import Filter from "./Filter";
import PersonDetail from "./PersonDetail";

import { fetchReasons } from "../services/Api.js";

import { Link, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderUserDetail = this.renderUserDetail.bind(this);

// No necesito guardar los filterCity[] y filterGender[] sino pasar solo el resultado de la función (como lo ha hecho Dayani) y guardar solo los unicos al final

    this.state = {
      loading: true,
      store: [],
      filterCity: [],
      filteredCities: [],
      filterGender: [],
      filteredGender: [],
    };
  }

  async componentDidMount() {
    const data = await fetchReasons();
    this.setState({
      store: data,
      loading: false,
    });
  }

  updateFilters() {
    this.state.store.map((user) => {
      return this.state.filterCity.push(user.city);
    });
    this.state.store.map((user) => {
      return this.state.filterGender.push(user.gender);
    });
  }

  renderUserDetail(routerProps) {
    const routerUserId = routerProps.match.params.userid;
    const userFound = this.state.store.find((user) => user.id === routerUserId);
    // if (userFound) {
    return <PersonDetail user={userFound} />;
    // }
  }

  render() {
    if (this.state.store) {
      this.updateFilters();
    }
    const users = this.state.store.map((user) => {
      return (
        <li key={user.id}>
          <Link to={`./user/${user.id}`}>
            <User user={user} />
          </Link>
        </li>
      );
    });
    return (
      <main style={{ display: "flex" }}>
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <Filter
                  cities={this.state.filterCity}
                  gender={this.state.filterGender}
                  filteredCities={this.state.filteredCities}
                />
                <ul>{users}</ul>
              </Route>

              <Route path="/user/:userid" render={this.renderUserDetail} />
            </Switch>
          </>
        )}
      </main>
    );
  }
}

export default App;
