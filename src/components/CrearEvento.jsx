import React, { useState } from "react";
import { FormGroup, Input, Col, Button } from "reactstrap";
import styled from "styled-components";
import Controller from "./FormularioController";
import '../mapa.css';
import '../css/formulario.css'
import { connect } from 'react-redux';



const InputStyle = styled.input`
  border-radius: 5px;
  border: 1px solid #555;
  margin-right: 5px;
  padding: 5px;
  width : 100%;
  background-color: white;
`; //ubicacion_idubicacion

const CrearEvento = (props) => {
  const [nombreEvento, setNombreEvento] = useState("");
  const [nombrePersona, setNombrePersona] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipoEvent, setTipoEvent] = useState();
  const [foto, setFoto] = useState();
  const [nomPlaya, setNomplaya] = useState(props.nomplaya);
  const [idcomarca, setIdcomarca] = useState(props.idcomarca);
  const [municipi, setMunicipi] = useState(props.nomMunicipi);
  const [volver, setVolver] = useState();
  const [active, setActive] = useState(false);
  const [dataO, setData] = useState([]);


  // Guardamos la opinion
  const guardar = () => {

    const data = new FormData();
    data.append("nomEvent", nombreEvento);
    data.append("nomPersona", nombrePersona);
    data.append("descripcioEvent", descripcion);
    data.append("data", fecha);
    data.append("tipoEvent", tipoEvent);
    data.append("file", foto);
    data.append("nomplatja", nomPlaya);
    data.append("idcomarca", idcomarca);
    data.append("nomcomarca", municipi);


    Controller.postEvent(data)

    setData(data)
    console.log(dataO);


    


  };


  return (
    <div className="form">
    
      {props.active ?
        <Col xs="12" className="form" >
          <br />
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", }}>
            <h3 style={{ width: "16rem" }}>Playa {props.nomplaya}</h3>
            <Button onClick={() => props.setActive(false)}>X</Button>
          </div>
          <hr />
          <FormGroup>
            <h5 for="nomEvent">Nombre evento</h5>
            <InputStyle type="text" name="nom" id="nom" value={nombreEvento} onChange={(e) => setNombreEvento(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <h5 for="nom">Nombre</h5>
            <InputStyle type="text" name="nom" id="nom" value={nombrePersona} onChange={(e) => setNombrePersona(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <h5 for="nom">Municipio</h5>
            <InputStyle type="text" name="municipi" id="municipi" value={props.nomMunicipi.substring(5, props.nomMunicipi.length)} onChange={(e) => setMunicipi(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <h5 for="descripcipn">Descripcion evento</h5>
            <Input type="textarea" name="comentario" id="comentario" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </FormGroup>
          

          <FormGroup>
            <h5 for="fecha">fecha</h5>
            <Input type="date" name="comentario" id="comentario" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <h5 for="descripcipn">Tipo de evento</h5>
            <Input type="text" name="tipoEvent" id="comentario" value={tipoEvent} onChange={(e) => setTipoEvent(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <h5 for="foto">Imagen</h5>
            <InputStyle type="file" onChange={(e) => setFoto(e.target.files[0])}
            />
          </FormGroup>
          <hr />{" "}
          <button className="btn btn-success" onClick={() => guardar()}>
            SAVE
        </button>
        </Col>
        : ""}
    </div>
  );
};

export default CrearEvento;