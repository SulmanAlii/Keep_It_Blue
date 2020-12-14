
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components'
import bgimg from './sea3.jpg';


const Estilo = styled.div`
background-image: url(${bgimg});
margin: 5px;
border-radius: 5px; 
`
const Font = styled.div`
background-color:rgba(138, 219, 249, 0.8);
padding: 15px;
border-top: 5px;
border-bot:5px;
border-radius: 5px; 
`
export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <div>
                                <Link to="/AlexPerez"><img src={"https://media-exp1.licdn.com/dms/image/C4D03AQFtjxn-qF4vdg/profile-displayphoto-shrink_100_100/0/1517836132134?e=1613001600&v=beta&t=x1QbZsww19nDBIgsoypfjdyPlmfJMC4HlaRONId4ljs"} width={100} height={100} alt={AlexPerez} /> </Link>

                                <Link to="/EduardMartinez">Edu </Link>

                                <Link to="/JoanaCorbella"><img src={"https://media-exp1.licdn.com/dms/image/C4D03AQFO7WLPEjYi0Q/profile-displayphoto-shrink_100_100/0/1592920063767?e=1613001600&v=beta&t=Duq0oE95ct70M9dxoMjl_OONTH5cqQvKqSHVyxQv61A"} width={100} height={100} alt={JoanaCorbella} /> </Link>

                                <Link to="/SulmanAli"><img src={"https://media-exp1.licdn.com/dms/image/C4D03AQGQ7c3SSrsZCA/profile-displayphoto-shrink_100_100/0/1605914372977?e=1613001600&v=beta&t=T0ABikaRaafqkHd3rZc38U9RCgfXp32aK6i2OAC_ubQ"} width={100} height={100} alt={SulmanAli} /> </Link>

                                <Link to="/TomasBernaus"><img src={"https://media-exp1.licdn.com/dms/image/C4D03AQF9smZJMxYQYg/profile-displayphoto-shrink_100_100/0/1602242336838?e=1613001600&v=beta&t=3lp6IrPp5BKjmD8DSa_r9EQhZWgzbtCTEose2QO1i1Y"} width={100} height={100} alt={TomasBernaus} /> </Link>
                            </div>
                        </li>
                    </ul>
                </nav>

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
                </Switch>
            </div>
        </Router>
    );
}

function AlexPerez() {
 
    return (

        <Estilo>
            <Font>
                <h2>Alex</h2>
                <p>klsadjfhsdfhskldfhl</p>
            </Font>
        </Estilo>
    );
}

function EduardMartinez() {
 
    return (

        <Estilo>
            <Font>
                <h2>Edu</h2>
                <p>klsadjfhsdfhskldfhl</p>
            </Font>
        </Estilo>
    );
}

function JoanaCorbella() {
 
    return (

        <Estilo>
            <Font>
                <h2>Joana</h2>
                <p>klsadjfhsdfhskldfhl</p>
            </Font>
        </Estilo>
    );
}

function SulmanAli() {
 
    return (

        <Estilo>
            <Font>
                <h2>Sulman</h2>
                <p>klsadjfhsdfhskldfhl</p>
            </Font>
        </Estilo>
    );
}

function TomasBernaus() {
 
    return (

        <Estilo>
            <Font>

            <h2>Tomas</h2>

<p>klsadjfhsdfhskldfhl</p>    
            </Font>
        </Estilo>
    );
}