import React, {useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import Mapa from '../Mapa';
import logo from './logo.png';
import Contacto from './Contacto';
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import Signup from '../Signup';
import Login from '../Login';
import {connect} from 'react-redux';



const Navbar = (props) =>  {

  const tokenn = JSON.parse(localStorage.getItem('token'))


    const [clicked, setclicked] = useState(false)
    const [token, settoken] = useState(tokenn)


    const handleClick = () => {
        setclicked(!clicked)
    }

    const deleteToken = () => {
        localStorage.removeItem('token')
    }


        return (
            <BrowserRouter>
                <nav className="NavbarItems">
                    <Link to="/">
                        <h1 className="navbar-logo">
                            <img className="logoForma" src={logo} alt='' width='160px'></img>
                            <i className=""></i> </h1>
                        </Link>

                    <div className="menu-icon" onClick={() => handleClick}>
                        <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
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
                    <div>
                        <h4 style={{color :"white", background:"#3acbf7",fontSize:"1rem",margin:"0"}}>{token ?  'Hola '+ token.name : " "}</h4>
                        <Link to='/login' ><Button onClick={() => deleteToken()}>  {token ? 'Sign Out' : 'Sign Up'}</Button></Link>
                    </div>
                    </nav>
                
                <Switch>
                    <Route exact path="/" render={() => <Mapa />} />
                    <Route path="/Contacta" render={() => <Contacto />} />
                    <Route exact path="/signup" render={() => {return token ?  <Mapa /> :  <Signup />}}/>
                    <Route exact path="/login" render={() => <Login />}/>
                    {/* <Route path="/Proyecto" render={() => <Proyecto />} /> */}
                    {/* <Route path="/Nosotros" render={() => <Nosotros />} /> */}
                    {/* <Route path="/Totem" render={() => <Totem />} /> */}
                    {/* <Route path="/SignUp" render={() => <SignUp />} /> */}
                </Switch>
            </BrowserRouter>
        )
}

const mapStateToProps = (state) => {
    return {token : state.tokenData}
}

// const mapDispatchToProps = dispatch => {
//     return {
//         get_token : (token) => dispatch({type: "get_tokenData", tokenData: token })
//     }
// }


export default connect(mapStateToProps)(Navbar);