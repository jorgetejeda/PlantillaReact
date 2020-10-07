// TODO: 
// [] Separar los componentes
// [] Agregar los valores digitados en el formulario a la plantilla
// [] Agregar funcionalidad para pasar numeros a letras
// [] Limpiar el formulario
// [] Crear una mascara para los campos que lo necesiten
// [] exportar la plantilla a word y pdf

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {FormFill} from "./components/FormFill";
import {Template} from "./components/Template";
import "./App.css";

const App = () => (
  <Container className="w-75 m-auto">
    <Row className="mt-5">
      <Col>
        <h1>Informacion</h1>
        <FormFill/>
      </Col>
      <Col>
       <Template/>
      </Col>
    </Row>
  </Container>
);

export default App;
