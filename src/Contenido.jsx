import React from "react";
import { Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapa from './components/Mapa';
import Formulario from './components/Formulario';
import Navbar from './Navbar';

export default () => {
    return (
        <div>
          <Navbar/>
          <Container style={{margin:"0"}} fluid>
            <Row>
                <Col><h1 style={{ textAlign: 'center' }}>MAPA DE BASURA</h1></Col>
            </Row>
            <Row>
                <Mapa/> 
            </Row>


          </Container>
          </div>
      );
    }
