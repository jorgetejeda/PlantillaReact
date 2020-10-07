import { Form, Button } from "react-bootstrap";
import React from "react"
export const FormFill = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
