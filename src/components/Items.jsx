import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Rectangulo = styled.div`
width: 250px;
height: 420px;
border-radius: 15px;
border: 5px solid #555;
margin: 15px;
padding: 5px;
display:inline-block;
vertical-align:top;
background-color: #98FB98;
`
const Corazon = styled.button`
width:50px;
height:50px;
border-radius: 3px;
`
const Titulo = styled.h1`
font-size:30px;
text-align:center;
color: #555;

`
const SuperInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const BotonAfegir = styled.button`
margin: 15px;
`

const Items = () => {
    const [items, setItems] = useState([]);
    const [url, setUrl] = useState();
    const [coment, setComent] = useState();

    useEffect(() => {
        recuperar();
    }, []);

    useEffect(() => {
        if (items.length) {
            guardar();
        }
    }, [items]);


    const guardar = () => {
        localStorage.setItem('mis_items', JSON.stringify(items));
    }

    const recuperar = () => {
        const itemsJson = localStorage.getItem('mis_items');
        const cosas = JSON.parse(itemsJson);
        if (cosas && cosas.length) {
            setItems(cosas);
        } else {
            setItems([]);
        }

    }

    const afegir = () => {
        if (url) {
            const nouItem = {
                imagen: url,
                id: uuid(),
                likes: 0,
                coment: coment,
            };
            setItems([...items, nouItem]);
            setUrl('');
            setComent("");
        }

    };


    const sumadorLikes = (id) => {

        setItems(items.map((el) => {
            if (id === el.id) {
                el.likes = el.likes + 1;
            } return el;
        }));

    };

    const tots = items.map((el) => (
        <Rectangulo key={el.id}><div ><img width="230px" height="220" src={el.imagen} /> </div>
            <Corazon onClick={() => sumadorLikes(el.id)}>
                <i style={{ color: "red" }} class="fa fa-heart-o" aria-hidden="true">{sumadorLikes}</i>
            </Corazon>

            <h3>Likes: {el.likes}</h3>
            <h5>{el.coment}</h5>
            
        </Rectangulo>
    ));



    return (
        <>
            <Titulo>Taco World</Titulo>
            <SuperInput type="text" placeholder="url" value={url} onChange={(ev) => setUrl(ev.target.value)} />
            <br />
            <SuperInput type="text" placeholder="comentario" value={coment} onChange={(ev) => setComent(ev.target.value)} />
            <br />
            <BotonAfegir className="btn btn-outline-success" onClick={afegir}>Afegir</BotonAfegir>

            <br />

            <ul>
                {tots}
            </ul>
        </>
    );
};

export default Items;
