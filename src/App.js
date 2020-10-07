// TODO:
// [x] Separar los componentes
// [x] Agregar los valores digitados en el formulario a la plantilla
// [x] Agregar funcionalidad para pasar numeros a letras
// [] Limpiar el formulario
// [] Crear una mascara para los campos que lo necesiten
// [] exportar la plantilla a word y pdf

import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FormFill } from "./components/FormFill";
import { Template } from "./components/Template";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    bankName:'',
    name:'',
    identification:'',
    salary:'',
    attendedBy:''
  })
  return (
    <Container className="w-75 m-auto">
      <Row className="mt-5">
        <Col>
          <h1>Informacion</h1>
          <FormFill values={values} setValues={setValues} />
        </Col>
        <Col>
          <Template values={values}/>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
