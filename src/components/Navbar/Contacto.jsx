import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import styled from "styled-components";
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
    if (items.length) {
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


  return (
    <Container>
      <EspaiV alt="40px" />
      <Row>
        <Col>
          <div className="input-group">
            <div className="input-group-prepend">
              {/* <div className="input-group-text">URL</div> */}
            </div>
            {/* <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="URL de la imatge"
              value={url}
              onChange={(ev) => setUrl(ev.target.value)}
            /> */}
          </div>
          <EspaiV alt="10px" />
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Comentario</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="¿Que nos quieres decir?"
              value={coment}
              onChange={(ev) => setComent(ev.target.value)}
            />
          </div>
          <EspaiV alt="10px" /><div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Nombre</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Tu nombre"
              value={qui}
              onChange={(ev) => setQui(ev.target.value)}
            />
          </div>
          <EspaiV alt="10px" /><div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Email</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Email para contactar contigo"
              value={on}
              onChange={(ev) => setOn(ev.target.value)}
            />
          </div>
          <EspaiV alt="10px" />
          <Button color="danger" onClick={afegir}>
            Enviar
          </Button>
        </Col>

      </Row>

      <EspaiV alt="40px" />
      <EspaiV alt="100px" />
    </Container>
  );
};

export default Items;
