import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { FormGroup, Label, Input, Col, Div } from 'reactstrap';


import styled from "styled-components";
import Controller from './FormularioController';

//import Puntuador from './Puntuador';

const InputStyle = styled.input`
border-radius: 5px;
border: 1px solid #555;
margin-right: 5px;
padding:5px;
background-color: white;
`

export default (props) => {

    const [nombre, setNombre] = useState('');
    const [comentario, setComentario] = useState('');
    const [foto, setFoto] = useState('');
    const [puntuacion, setPuntuacion] = useState('');
    const [volver, setVolver] = useState();

    const guardar = () => {
        const aportacionNueva = {
            nombre: nombre,
            comentario: comentario,
            foto: foto,
            puntuacion: puntuacion,
        };
        // aqui haríamos una primera validación del form
        // si todo ok seguimos
        Controller.addItem(aportacionNueva);
        setVolver(true);
    }

    if (volver) {
        return <Redirect to="/contactos" />
    }

    return (
        <>
            <Col xs="6">
                <br />
                <h3>props.nombrePlaya</h3>
                <hr />

                <FormGroup>
                    <h5 for="nom">Nombre</h5>
                    <InputStyle type="text" name="nom" id="nom" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </FormGroup>


                <FormGroup>
                    <h5 for="puntuacion">Puntuacion</h5>
                    <div className="puntuacionEstrellas" id="puntuacionEstrellas" value={puntuacion} onChange={(e) => setPuntuacion(e.target.value)}>
                        <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                        <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                        <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                        <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                        <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                    </div>
                   
                </FormGroup>
                

                <FormGroup>
                    <h5 for="foto">Imagen</h5>
                    <InputStyle type="file" name="foto" id="foto" value={foto} onChange={(e) => setFoto(e.target.value)} />
                </FormGroup>


                <FormGroup>
                    <h5 for="comentario">Comentario</h5>
                    <InputStyle type="textarea" name="comentario" id="comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} />
                </FormGroup>

                <hr />

                {' '}
                <button className='btn btn-success' onClick={guardar} >
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                </button>
            </Col>
        </>
        //<Link className='btn btn-primary' to='/contactos' >Volver</Link>
    );
};
