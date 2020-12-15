import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import Mapa from '../Mapa';
/* import './Navbar.css'; */
import logo from './logo.png';
import Contacto from './Contacto';
import Proyecto from './Proyecto';
import Nosotros from './Nosotros';
// import Totem from './Totem';
import Alex from './Alex.jsx';
import Edu from './Edu.jsx';
import Joana from './Joana.jsx';
import Sulman from './Sulman.jsx';
import Tomas from './Tomas.jsx';
import NotFound from "./P404";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return (
            <BrowserRouter>
                <nav className="NavbarItems">
                    <img className="logoForma" src={logo} alt='Logo' width='160px' />
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <Button>Sign Up</Button>
                </nav>
                <br />
                <Switch>
                    <Route exact path="/" render={() => <Mapa />} />
                    <Route path="/Contacta" render={() => <Contacto />} />
                    <Route path="/Proyecto" render={() => <Proyecto />} />
                    <Route path="/Nosotros" render={() => <Nosotros />} />
                    <Route path="/AlexPerez" render={() => <Alex />} />
                    <Route path="/EduardMartinez" render={() => <Edu />} />
                    <Route path="/JoanaCorbella" render={() => <Joana />} />
                    <Route path="/SulmanAli" render={() => <Sulman />} />
                    <Route path="/TomasBernaus" render={() => <Tomas />} />
                    <Route component={NotFound} />
                    {/* <Route path="/SignUp" render={() => <SignUp />} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Navbar