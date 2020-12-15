import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import Mapa from '../Mapa';
/* import './Navbar.css'; */
import KeepItBlue from './KeepItBlue.png';
import Contacto from './Contacto';
import CrearEvento from '../CrearEvento';
//import Login from '../Login';
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

                    <h1 className="navbar-logo">
                        <img className="logoForma" src={KeepItBlue} alt='' width='110px'></img>
                        <i className=""></i> </h1>

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
                    <Button>Registrate</Button>
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
                    <Route path="/crear-evento" render={() => <CrearEvento />} /> 
                    <Route path="/Totem" render={() => <Totem />} /> 
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Navbar