import React from "react";
import styled from 'styled-components'
import bgimg from './sea3.jpg';

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

        <Estilo>
            <Font>
                <h1>el proyecto keep it es muy guay uwu    </h1>
            </Font>
        </Estilo>

    );



}

export default Proyecto; 