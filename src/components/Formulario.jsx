import React, { useState } from "react";
import { FormGroup, Input, Col, Button } from "reactstrap";
import styled from "styled-components";
import Controller from "./FormularioController";
import '../mapa.css';
import '../css/formulario.css'
//import Puntuador from './Puntuador';
import {connect} from 'react-redux';

const InputStyle = styled.input`
  border-radius: 5px;
  border: 1px solid #555;
  margin-right: 5px;
  padding: 5px;
  width : 100%;
  background-color: white;
`; //ubicacion_idubicacion

const Formulario =  (props) => {
  const [nombre, setNombre] = useState("");
  const [municipi, setMunicipio] = useState(props.nomMunicipi);
  const [comentario, setComentario] = useState("");
  const [foto, setFoto] = useState();
  const [puntuacion, setPuntuacion] = useState("");
  const [idcomarca, setIdcomarca] = useState(props.idcomarca);
  const [nomPlaya, setNomplaya] = useState(props.nomplaya);


  // Guardamos la opinion
  const guardar = () => {

    const data = new FormData();
    data.append("nombre", nombre);
    data.append("opinion", comentario);
    data.append("file", foto);
    data.append("puntuacion", puntuacion);
    data.append("nomplatja", nomPlaya);
    data.append("idcomarca", idcomarca);
    data.append("nomcomarca", municipi);

   
    Controller.postComment(data)
    .then(data => {return props.getdata(data)})
  
 

  };

  const setPuntuacionBtn = (event) => {
    setPuntuacion(event)
  }


  return (
    <div className="form">
    {props.active ? 
      <Col xs="12" className="form" >
        <br />
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%",}}>
          <h3 style={{ width: "16rem" }}>Playa {props.nomplaya}</h3>
          <Button onClick={() => props.setActive(false)}>X</Button>
        </div>
        <hr />
        <FormGroup>
          <h5 for="nom">Nombre</h5>
          <InputStyle type="text" name="nom" id="nom" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </FormGroup>

        <FormGroup>
        <h5 for="nom">Municipio</h5>
        <InputStyle type="text" name="municipi" id="municipi" value={props.nomMunicipi.substring(5, props.nomMunicipi.length)} onChange={(e) => setMunicipio(e.target.value)}/>
      </FormGroup>
        <FormGroup>
          <h5 for="comentario">Comentario</h5>
          <Input type="textarea" name="comentario" id="comentario" value={comentario} onChange={(e) => setComentario(e.target.value)}/> 
        </FormGroup>
        <h5 for="puntuacion">Puntuacion</h5>
        <div style={{ width: "9rem" }} className="puntuacionEstrellas" id="puntuacionEstrellas" value={puntuacion} >
              <div>
              <input type="radio" value="5" name="rate" id="rate-5" onChange={(e) => setPuntuacionBtn(e.target.value)}/>
              <label for="rate-5" className="fa fa-star-o"></label>
              <input type="radio" value="4" name="rate" id="rate-4" onChange={(e) => setPuntuacionBtn(e.target.value)}/>
              <label for="rate-4" className="fa fa-star-o"></label>
              <input type="radio" value="3" name="rate" id="rate-3" onChange={(e) => setPuntuacionBtn(e.target.value)}/>
              <label for="rate-3" className="fa fa-star-o"></label>
              <input type="radio" value="2" name="rate" id="rate-2" onChange={(e) => setPuntuacionBtn(e.target.value)}/>
              <label for="rate-2" className="fa fa-star-o"></label>
              <input type="radio" value="1" name="rate" id="rate-1" onChange={(e) => setPuntuacionBtn(e.target.value)}/>
              <label for="rate-1" className="fa fa-star-o"></label>
              <form action="#">
                  <header></header>
              </form>
              </div>
        </div>
        <FormGroup>
          <h5 for="foto">Imagen</h5>
          <InputStyle type="file"  onChange={(e) => setFoto(e.target.files[0])}
          />
        </FormGroup>
        <hr />{" "}
        <button className="btn btn-success" onClick={() => guardar()}>
         SAVE
        </button>
    
      </Col>
      : "" }
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    getdata : (dataO) => dispatch({type:'get_opinion', data:dataO})
  }
}


export default connect(null,mapDispatchToProps)(Formulario);