import React from "react";
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapa from './components/Mapa';
import Navbar from './Navbar';
import Formulario from './components/Formulario';

export default () => {
  return (
    <>
      <Navbar />
      <Row>
        <Col><h1 style={{ textAlign: 'center' }}>MAPA DE BASURA</h1></Col>
      </Row >

      <Row>
        <Mapa />
        <Formulario />
      </Row>

    </>
  );
}