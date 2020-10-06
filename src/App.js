import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./App.css";

const App = () => (
  <Container className="w-75 m-auto">
    <Row className="mt-5">
      <Col>
        <h1>Informacion</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre del banco</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre candidato</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Cedula</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre posicion</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Salario</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Atentido Por</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="success" className="mr-1">
            Exportar Word
          </Button>
          <Button variant="danger">Limpiar</Button>
        </Form>
      </Col>
      <Col>
        <div id="source-html" class="page p-3">
          <center>
            <div></div>
            <span style={{ fontSize: "13px" }}>
              <b>RNC #-##-#####-#, RNL #-##-######-####</b>
            </span>
            <span style={{ fontSize: "11.5px" }}>
              <div>
                Plantilla de contratos - Desarrollado con React
              </div>
              Teléfonos: ###-###-####
            </span>
          </center>
          <br />
          <br />
          <br />
          <br />
          <div style={{ fontSize: "14px" }}>
            6 de Octubre de 2020
            <br />
            Santo Domingo, R.D
          </div>
          <br />
          <br />
          <br />
          <div style={{ fontSize: "14px" }}>
            Distinguidos señores del adsadsf:
          </div>
          <br />
          <br />
          <br />
          <div>
            <p style={{ fontSize: "14px" }}>
              Por medio de la presente nos dirigimos a ustedes para certificar
              que el(la) señor(a) <b>asasdfas</b> portador(a) de la cédula{" "}
              <b>No. </b> labora en nuestra empresa en la posición{" "}
              <b>ASDFASDF</b> desde el <b>6 de Octubre de 2020</b>, devengando
              un salario por hora de{" "}
              <b>RD$asdfas PESOS DOMINICANOS CON 00/100</b>, sin sus respectivos
              incentivos incluidos. Solicitamos la apertura de una cuenta nomina
              en su banco.
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div style={{ fontSize: "14px" }}>
            <span style={{ fontSize: "15px" }}>
              <b>asdfasd</b>
            </span>
            <br />
            Coordinadora de Reclutamiento
            <br />
            Working Bees DR, SRL
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default App;
