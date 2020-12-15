import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import { withCookies } from "react-cookie";
import { Button, Row, Col } from "reactstrap";
import Controller from "../controllers/UsuariController";

const Logout = (props) => {
  const [tornar, setTornar] = useState(false);

  const doLogout = () => {
    let token = props.cookies.get("token");
    Controller.Logout(token)
    .then(()=>{
      //cal eliminar les cookies!
      props.cookies.remove("nom");
      props.cookies.remove("token");
      props.cookies.remove("id");
      setTornar(true);
    })
    .catch((error)=> console.log(error))
  };

  if (tornar === true) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Logout</h1>
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
            <Button onClick={doLogout} size="sm" color="success">
              {"Logout"}
            </Button>
          </span>
        </Col>
      </Row>
    </>
  );
};

export default withCookies(Logout);