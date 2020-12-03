import React, { useEffect, useState } from "react";

import ReadMoreReact from 'read-more-react';
// npm install read-more-react

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  Col,
} from "reactstrap";

const Parametres = ({ item, newLike }) => {

  return (
    <Col>
      <Card>
        <CardImg src={item.imagen} alt="Card image cap" />
        <CardBody>
          <CardText tag="h6">
            Autor: {item.qui}
          </CardText>
          <CardText tag="h6" className="mb-4 text-muted">
            {item.on}
          </CardText>
          <CardText>
            <ReadMoreReact
              text={item.coment}
              min={1}
              ideal={20}
              max={250}
              readMoreText="...Veure tot..." />1
          </CardText>
          {/* <Button color="primary" onClick={() => newLike(item.id)} >Like! <span class="badge badge-light">{item.likes}</span></Button> */}
        </CardBody>
      </Card>
      <br />
    </Col>
  );
};

export default Parametres;
