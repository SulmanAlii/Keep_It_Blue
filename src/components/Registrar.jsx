import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { API } from "./constants.js";
import { Button, Row, Col, FormGroup, Label, Input } from "reactstrap";
import {withCookies, Cookies } from 'react-cookie';

const Registrar = (props) => {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [tornar, setTornar] = useState(false);

  const registrar = () => {
    let data = { nom, password };

    fetch(API + "/usuaris/registre", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.ok === true) {
          return fetch(API + "/usuaris/login", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(data),
          });
        } else {
          throw new Error("usuari no registrat");
        }
      })
      .then((res) => res.json())
      .then((res) => {
        const token = res.data;
        console.log(token);
        if (token) {
          console.log("establint cookies");
          props.cookies.set("nom", token.nomusuari, { path: "/" });
          props.cookies.set("id", token.idusuari, { path: "/" });
          props.cookies.set("token", token.token, { path: "/" });
          setTornar(true);
        }
      })
      .catch((err) => console.log(err));
  };

  if (tornar) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Registre</h1>
        </Col>
        <Col>
          <span className="float-right">
            <Button
              type="button"
              onClick={() => setTornar(true)}
              size="sm"
              color="danger"
            >
              {"Sortir sense desar"}
            </Button>{" "}
            <Button onClick={registrar} size="sm" color="success">
              {"Desar canvis"}
            </Button>
          </span>
        </Col>
      </Row>
      <br />

      <Row>
        <Col sm="8">
          <FormGroup>
            <Label for="nom">Nom</Label>
            <Input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};


export default withCookies(Registrar);
