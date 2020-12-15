import React from "react";
import styled from 'styled-components'
import bgimg from './sea3.jpg';
// import KeepItBlue from './KeepItBlue.png';
import Green from './Green.png';
import White from './White.png';
import Running from './Running.png';
import Real from './Real.png';
import Poster from './Poster.png';
import playa2 from './playa2.mp4'
import playa1 from './playa1.mp4'
import { Table } from 'reactstrap';


const Proyecto = () => {
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
	
    return (
        <>
            <Fondo>
                <Content>
                    <h1>Keep It Blue</h1>
                    <video controls width="400" height="400" margin="5px"
                        loop muted
                        Poster={Poster}>
                        <source src={playa1} type="video/mp4" />
                        <p>Su navegador no soporta video HTML5, pulse
                        <a href="playa1.webm">este enlace</a>
                        para descargarlo.</p>
                    </video>
                    <span> </span>    
                    <video controls width="400" height="400"
                        loop muted
                        Poster={Poster}>
                        <source src={playa2} type="video/mp4" />
                        <p>Su navegador no soporta video HTML5, pulse
                        <a href="playa2.webm">este enlace</a>
                        para descargarlo.</p>
                    </video>
                    
                    <h1>Líneas de futuro</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    El proyecto es expansible a
                                    la limpieza y mantenimiento de
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td>
                                    Bosques
                                </td>
                                <td>
                                    Zonas de nieve
                                </td>
                                <td>
                                    Ríos y lagos
                                </td>
                                <td>
                                    Ciudades
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <img className="logoForma" src={Green} alt='Keep It Green' width='110px'></img>
                                </td>
                                <td>
                                    <img className="logoForma" src={White} alt='Keep It White' width='110px'></img>
                                </td>
                                <td>
                                    <img className="logoForma" src={Running} alt='Keep It Runing' width='110px'></img>
                                </td>
                                <td>
                                    <img className="logoForma" src={Real} alt='Keep It Real' width='110px'></img>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Content>
            </Fondo>
        </>
    );
}
export default Proyecto; 