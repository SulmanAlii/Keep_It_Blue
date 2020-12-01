import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import styled from "styled-components";

import Parametres from "./Parametres";

const EspaiV = styled.div`
  height: ${({ alt }) => alt || "50px"};
`;



const Items = () => {
  const [items, setItems] = useState([]);
  const [url, setUrl] = useState();
  const [coment, setComent] = useState();
  const [qui, setQui] = useState();
  const [on, setOn] = useState();

  console.log("hola");

  useEffect(() => {
    recuperar();
  }, []);

  const recuperar = () => {
    const itemsJson = localStorage.getItem("mis_items");
    const cosas = JSON.parse(itemsJson);
    if (cosas && cosas.length) {
      setItems(cosas);
    } else {
      setItems([]);
    }
  };


  
  
  useEffect(() => {
    if (items.length){
      guardar();
    }
  }, [items]);

  const guardar = () => {
    localStorage.setItem("mis_items", JSON.stringify(items));
  };


  const afegir = () => {
    if (url) {
      const nouItem = {
        imagen: url,
        coment: coment,
        qui: qui,
        on: on,
        id: uuid(),
        likes: 0,
      };
      setItems([...items, nouItem]);
      setUrl("");
    }
  };

  const newLike = (id) => {
    if (id) {
      const newItems = items.map((el) => {
        if (el.id === id) {
          el.likes = el.likes + 1;
        }
        return el;
      });
      setItems(newItems);
    }
  };

  const tots = items.map((el) => (
    <Col>
       <Parametres key={el.id} newLike={newLike} item={el} />
    </Col>
  ));

  return (
    <Container>
      <EspaiV alt="40px" />
      <Row>
        <Col>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">URL</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="URL de la imatge"
              value={url}
              onChange={(ev) => setUrl(ev.target.value)}
            />
          </div>
          <EspaiV alt="10px" />
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Comentari</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Que vols dir?"
              value={coment}
              onChange={(ev) => setComent(ev.target.value)}
            />
          </div>
          <EspaiV alt="10px" /><div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Autor</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Autor del comentari"
              value={qui}
              onChange={(ev) => setQui(ev.target.value)}
            />
          </div>
          <EspaiV alt="10px" /><div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">On és?</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="D'on és la imatge?"
              value={on}
              onChange={(ev) => setOn(ev.target.value)}
            />
          </div>
          <EspaiV alt="10px" />
          <Button color="danger" onClick={afegir}>
            Afegir
          </Button>
        </Col>
      
      </Row>

      <EspaiV alt="40px" />

      <Row xs={2} md={4} lg={4}>{tots}</Row>

      <EspaiV alt="100px" />
    </Container>
  );
};

export default Items;
