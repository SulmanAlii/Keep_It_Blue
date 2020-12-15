import React from "react";
import styled from 'styled-components'
import bgimg from './sea3.jpg';
import KeepItBlue from './KeepItBlue.png';
import Green from './Green.png';
import White from './White.png';
import Running from './Running.png';
import Real from './Real.png';
import Poster from './Poster.png';
import { Table } from 'reactstrap';


const Proyecto = () => {
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
    return (
        <>
            <Estilo>
                <Font>

                    <h1>Proyecto</h1>
                    <video controls width="400" height="400" margin="5px"
                         loop muted
                        Poster="Poster.png">
                        <source src="playa1.webm" type="video/webm" />
                        <p>Su navegador no soporta video HTML5, pulse
                        <a href="playa1.webm">este enlace</a>
                        para descargarlo.</p>
                    </video>
                  
                    <video controls width="400" height="400"
                         loop muted
                        Poster="Poster.png">
                        <source src="playa2.mp4" type="video/mp4" />
                        <source src="playa2.webm" type="video/webm" />
                        <p>Su navegador no soporta video HTML5, pulse
                        <a href="playa2.webm">este enlace</a>
                        para descargarlo.</p>
                    </video>

                    <h1></h1>

                    <h1>Lineas de futuro</h1>

                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    El proyecto es expansible a
                                    la lipieza y mantenimiento de
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>

                                <td>
                                    Bosques
                                </td>
                                <td>
                                    Zonas de nieve
                                </td>
                                <td>
                                    Rios
                                </td>
                                <td>
                                    Ciudad
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>

                                <td>
                                    <img className="logoForma" src={Green} alt='' width='110px'></img>
                                </td>
                                <td>
                                    <img className="logoForma" src={White} alt='' width='110px'></img>
                                </td>
                                <td>
                                    <img className="logoForma" src={Running} alt='' width='110px'></img>
                                </td>
                                <td>
                                    <img className="logoForma" src={Real} alt='' width='110px'></img>
                                </td>
                            </tr>
                        </tbody>
                    </Table>



                </Font>
            </Estilo>
        </>

    );



}

export default Proyecto; 