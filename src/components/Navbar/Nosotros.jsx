import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import styled from 'styled-components'
import bgimg from './sea3.jpg';

const Fondo = styled.div`
background-image: url(${bgimg});
margin: 1%;
border-radius: 5px; 
position: absolute;
width: 98%;
`
const Content = styled.div`
background-color:rgba(138, 219, 249, 0.8);
padding: 15px;
border-top: 5px;
border-bot:5px;
border-radius: 5px; 
width: 100%;
height: 100%;
`
const Persones = styled.div`
background-color:rgba(138, 219, 249, 0.1);
width: 18.8%;
height: 30px;
border: 1px solid;
border-color: rgba(50, 115, 220, 0.3);
margin-left: 1%; 
margin-top: 18px;
text-align: center;
display: inline-block;
border-radius: 5px; 
`
const Linkedin = styled.a`
color: black;
`
const Text = styled.h2`
text-align: center;
`


export default function App() {
    return (
        <Router>
            <Persones>
                <NavLink to="/AlexPerez"> Álex </NavLink>
            </Persones>
            <Persones>
                <NavLink to="/EduardMartinez"> Eduard </NavLink>
            </Persones>
            <Persones>
                <NavLink to="/JoanaCorbella"> Joana </NavLink>
            </Persones>
            <Persones>
                <NavLink to="/SulmanAli">Sulman </NavLink>
            </Persones>
            <Persones>
                <NavLink to="/TomasBernaus"> Tomàs </NavLink>
            </Persones>
            <Switch>
                <Route path="/AlexPerez">
                    <AlexPerez />
                </Route>
                <Route path="/EduardMartinez">
                    <EduardMartinez />
                </Route>
                <Route path="/JoanaCorbella">
                    <JoanaCorbella />
                </Route>
                <Route path="/SulmanAli">
                    <SulmanAli />
                </Route>
                <Route path="/TomasBernaus">
                    <TomasBernaus />
                </Route>
                <QuiSom/>
            </Switch>
        </Router>
    );
}

function AlexPerez() {
    return (
        <Fondo>
            <Content>
                <Text>Álex Perez</Text>
                <h6>Formación como Desarrollador web Full Stack en Fundación Esplai (2020), Técnico superior en Desarrollo de aplicaciones web (2017), Técnico superior en administración de sistemas informáticos y redes (2016), Técnico en sistemas microinformáticos y redes(2014)</h6>
                <h6>Experiencia en administración de sistemas y desarrollador web</h6>
                <Linkedin href="https://www.linkedin.com/in/alex-perez-llamas/"><p>Contacto por LinkedIn</p></Linkedin>
            </Content>
        </Fondo>
    );
}

function EduardMartinez() {
    return (
        <Fondo>
            <Content>
                <Text>Eduard Martinez</Text>
                <h6>Formación como Desarrollador web Full Stack en Fundación Esplai (2020), técnico superior en desarrollo de aplicaciones web (2016) Estudió en Stucom </h6>
                <h6>Experiencia como desarrollador de aplicaciones web, programador en carver y educador infantil y juvenil</h6>
                <Linkedin href="https://www.linkedin.com/in/eduard-martinez-rama-240a73123/"><p>Contato por LinkedIn</p></Linkedin>
            </Content>
        </Fondo>
    );
}

function JoanaCorbella() {
    return (
        <Fondo>
            <Content>
                <Text>Joana Corbella</Text>
                <h6>Formación como Desarrolladora web Full Stack en Fundación Esplai (2020), Graduada en Traducción e Interpretación (Inglés/Alemán/Catalán/Castellano) en Universitat Pompeu Fabra (2018)</h6>
                <h6>Experiencia como Traductora técnica y profesora de alemán e inglés</h6>
                <Linkedin href="https://www.linkedin.com/in/joana-corbella-ruiz-515b1a177/"><p>Contacto por LinkedIn</p></Linkedin>
            </Content>
        </Fondo>
    );
}

function SulmanAli() {
    return (
        <Fondo>
            <Content>
                <Text>Sulman Ali</Text>
                <h6>Formación como Desarrollador web Full Stack en Fundación Esplai (2020), Técnico superior en Desarrollo de aplicaciones multiplataforma</h6>
                <h6>Experiencia como desarrollador web</h6>
                <Linkedin href="https://www.linkedin.com/in/sulman-ali-54bb211b2/"><p>Contacto por LinkedIn</p></Linkedin>
            </Content>
        </Fondo>
    );
}

function TomasBernaus() {
    return (
        <Fondo>
            <Content>
                <Text>Tomàs Bernaus</Text>
                <h6>Formación como Desarrollador web Full Stack en Fundación Esplai (2020), Educador infantil y juvenil (2015), Técnico en sistemas microinformáticos y redes (2015)</h6>
                <h6>Experiencia como Técnico informatico, responsable de tienda (5-10 empleados) y monitor infantil y juvenil</h6>
                <Linkedin href="https://www.linkedin.com/in/tomasbernaus/"><p>Contacto por LinkedIn</p></Linkedin>
            </Content>
        </Fondo>
    );
}

function QuiSom() {
    return (
        <Fondo>
            <Content>
                <Text>Equipo Keep it</Text>
                <h6>Somos un equipo formado por Álex Perez, Eduardo Martinez, Joana Corbella, Sulman Ali y Tomàs Bernaus</h6>
                <h6>Somos estudiantes del proyecto Enfoca't, cursando un bootcamp de desarrolladores web (full stack) impartido por Ricad Hernandez</h6>
            </Content>
        </Fondo>
    );
}