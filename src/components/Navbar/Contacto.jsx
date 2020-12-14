import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styled from "styled-components";
const EspaiV = styled.div`
  height: ${({ alt }) => alt || "50px"};
`;

const Items = () => {
  const [coment, setComent] = useState();
  const [qui, setQui] = useState();
  const [on, setOn] = useState();

  const Buida = () => {
    if (coment) {
      setComent("");
      setQui("");
      setOn("");
      alert("Gracias por tu mensaje");
    }
  }

  return (
    <Container>
      <EspaiV alt="40px" />
      <Row>
        <Col>
          <div className="input-group">
            <div className="input-group-prepend">
            </div>
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
          <Button color="danger" onClick={Buida}>
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
