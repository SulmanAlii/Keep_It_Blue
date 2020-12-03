import React from "react";
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapa from './components/Mapa';
import Formulario from './components/Formulario';
import Navbar from './Navbar';

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
