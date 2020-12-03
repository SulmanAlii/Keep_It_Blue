import React  from "react";
import { Row,Container,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapa from './components/Mapa';
import Formulario from './components/Formulario';
import Navbar from './Navbar';


export default () => {
    return (
        <>
          <Navbar/>
          <Container>
            <Row>
                <Col><h1 style={{ textAlign: 'center' }}>TRASHMAP</h1></Col>
            </Row>
            <Row>
                <Mapa/> 
               
            </Row>
          </Container>
        </>
      );
    }