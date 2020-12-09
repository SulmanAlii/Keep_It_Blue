import React  from "react";
import { Row,Container,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapa from './components/Mapa';
import Navbar from './Navbar';


export default () => {
    return (
        <>
          <Navbar/>
          <Container style={{margin:"0"}} fluid>
            <Row>
                <Col><h1 style={{ textAlign: 'center' }}>MAPA DE BASURA</h1></Col>
            </Row>
            <Row>
                <Mapa/> 
            </Row>


          </Container>
        </>
      );
    }