import React, { useState, useEffect } from "react";
import { withCookies, Cookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import { Button, Row, Col, FormGroup, Label, Input } from "reactstrap";
import Controller from "./UsuariController";

const Login = (props) => {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [tornar, setTornar] = useState(false);

  const login = () => {
    const data = { nom, password };
    Controller.Login(data)
      .then((resp) => {
        if (resp.ok) {
          props.cookies.set("nom", resp.token.nomusuari, { path: "/" });
          props.cookies.set("id", resp.token.idusuari, { path: "/" });
          props.cookies.set("token", resp.token.token, { path: "/" });
        }
        setTornar(true);
      })
      .catch((err) => console.log("err login: ", err));
  };

  if (tornar === true) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
        <Col>
          <span className="float-right">
            <Button
              type="button"
              onClick={() => setTornar(true)}
              size="sm"
              color="danger"
            >
              {"Sortir"}
            </Button>{" "}
            <Button onClick={login} size="sm" color="success">
              {"Login"}
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

export default withCookies(Login);