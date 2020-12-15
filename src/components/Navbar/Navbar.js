import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import Mapa from "../Mapa";
import Contacto from "./Contacto";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Signup from "../Signup";
import Login from "../Login";
import KeepItBlue from "./KeepItBlue.png";
import CrearEvento from "../CrearEvento";
import Proyecto from "./Proyecto";
import Nosotros from "./Nosotros";
import Alex from "./Alex.jsx";
import Edu from "./Edu.jsx";
import Joana from "./Joana.jsx";
import Sulman from "./Sulman.jsx";
import Tomas from "./Tomas.jsx";
import NotFound from "./P404";

const tokenn = JSON.parse(localStorage.getItem("token"));

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      token: tokenn,
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  deleteToken = () =>{
      localStorage.removeItem('token')
  }

  render() {
    return (
      <BrowserRouter>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <img
              className="logoForma"
              src={KeepItBlue}
              alt="Keep It Blue Logo"
              width="110px"
            ></img>
            <i className=""></i>{" "}
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <h4
              style={{
                color: "white",
                background: "#3acbf7",
                fontSize: "1rem",
                margin: "0",
              }}
            >
              {this.state.token ? "Hola " + this.state.token.name : ""}
            </h4>
            <Link to="/login">
              <Button onClick={this.deleteToken}>
                {" "}
                {this.state.token ? "Sign Out" : "Sign Up"}
              </Button>
            </Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" render={() => <Mapa />} />
          <Route path="/Contacta" render={() => <Contacto />} />
          <Route
            exact
            path="/signup"
            render={() => {
              return this.state.token ? <Mapa /> : <Signup />;
            }}
          />
          <Route exact path="/login" render={() => <Login />} />
          <Route path="/Proyecto" render={() => <Proyecto />} />
          <Route path="/Nosotros" render={() => <Nosotros />} />
          <Route path="/AlexPerez" render={() => <Alex />} />
          <Route path="/EduardMartinez" render={() => <Edu />} />
          <Route path="/JoanaCorbella" render={() => <Joana />} />
          <Route path="/SulmanAli" render={() => <Sulman />} />
          <Route path="/TomasBernaus" render={() => <Tomas />} />
          <Route path="/crear-evento" render={() => <CrearEvento />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.tokenData };
};

export default connect(mapStateToProps)(Navbar);
