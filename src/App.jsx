import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import { Switch, Route, Redirect } from "react-router-dom";
import MovieForm from "./components/MovieForm";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="container d-flex">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
