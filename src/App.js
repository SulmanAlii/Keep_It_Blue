import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import Mapa from './components/Mapa';
import Formulario from './components/Formulario';

import Navbar from './Navbar';
import {Row} from 'reactstrap';




function App() {
  return (
    <>
    
    <Navbar/>
    <Row>
    
    <Mapa></Mapa>
    <Formulario/>
    </Row>
    </>
  );
}

export default App;
