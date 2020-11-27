import React  from "react";
import { Row,Container,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Mapa from './Mapa';
import Navbar from './Navbar';


export default () => {
    return (
        <>
          <Container>
            <Row>
                <Navbar/>
            </Row>
            <Row>
                <Col><h1>MAPA DE BASURA</h1></Col>
            </Row>
            <Row>
                
            </Row>
          </Container>
        </>
      );
    }