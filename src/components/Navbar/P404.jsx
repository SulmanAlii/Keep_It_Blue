import React from 'react';
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
const Text = styled.h4`
text-align: center;
`

export default () => <Fondo>
    <Content>
    <Text>Esta ruta no existe</Text>  
    </Content>
    </Fondo>
    