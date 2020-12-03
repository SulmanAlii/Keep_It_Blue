import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormGroup, Label, Input, Col, Div, Button, Row } from 'reactstrap';


import styled from "styled-components";
//import Controller from './FormularioController';
import Controller from './FotosInfoController';

//import Puntuador from './Puntuador';

const InputStyle = styled.input`
border-radius: 5px;
border: 1px solid #555;
margin-right: 5px;
padding:5px;
background-color: white;
`

const InputStyleComentario = styled.input`
border-radius: 5px;
border: 1px solid #555;
margin-right: 5px;
padding:5px;
background-color: white;
width: 350px;
height: 150px;
text-indent:5px top;
`

const EditaFotoContacte = (props) => {


    const [nombre, setNombre] = useState('');
    const [comentario, setComentario] = useState('');
    const [foto, setFoto] = useState('');
    const [puntuacion, setPuntuacion] = useState('');
    const [volver, setVolver] = useState(false);

    const guardarComentario = () => {
        const data = new FormData();
        data.append("nombre", nombre);
        data.append("comentario", comentario);
        data.append("file", foto);
        data.append("puntuacion", puntuacion);

        Controller.novaFoto(data)
        //.then(() => setVolver(true));

        //Controller.addItem(aportacionNueva);
        };
        // aqui haríamos una primera validación del form
        // si todo ok seguimos
       
       // setVolver(true);  
       /*if (volver) {
        return <Redirect to="/contactos" />
    }*/
    

  

    return (
        <div>
            <Col xs="3" mx="3">
                <br />
                <h3 style={{width:"16rem"}}>{props.nombre}</h3>

                <hr />

                <FormGroup>
                    <h5 for="nombre">Nombre</h5>
                    <InputStyle 
                    type="text" 
                    placeholder="Escribe tu nombre" 
                    name="nombre" id="nombre" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} />
                </FormGroup>


                <FormGroup style={{width:"9rem"}}>
                    <h5 for="puntuacion">Puntuacion</h5>
                    <div className="puntuacionEstrellas" 
                    id="puntuacionEstrellas" 
                    name="puntuacion" 
                    value={puntuacion} 
                    onChange={(e) => setPuntuacion(e.target.value)}>
                        <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                        <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                        <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                        <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                        <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                    </div>
                   
                </FormGroup>
                

                <FormGroup>
                    <h5 for="foto">Imagen</h5>
                    <InputStyle type="file" 
                    name="foto" 
                    id="foto" 
                    value={foto} 
                    onChange={(e) => setFoto(e.target.files[0])} />
                </FormGroup>


                <FormGroup>
                    <h5 for="comentario">Comentario</h5>
                    <InputStyleComentario 
                    id="message" rows="8" cols="50"
                    placeholder="Escribe aquí tus comentarios" 
                    type="textarea" 
                    name="comentario" 
                  
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)} />
                </FormGroup>

                <hr />

                {' '}
                <button className='btn btn-success' onClick={guardarComentario} >
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                </button>
            </Col>
            </div>
        //<Link className='btn btn-primary' to='/contactos' >Volver</Link>
    );
};

export default EditaFotoContacte;
