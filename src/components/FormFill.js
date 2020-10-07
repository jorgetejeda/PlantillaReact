import { Form, Button } from "react-bootstrap";
import React from "react";
export const FormFill = ({ values, setValues }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre del banco</Form.Label>
          <Form.Control
            type="text"
            onChange={handleInput}
            value={values.bankName}
            name="bankName"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre candidato</Form.Label>
          <Form.Control
            type="text"
            onChange={handleInput}
            value={values.name}
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Cedula</Form.Label>
          <Form.Control
            type="number"
            onChange={handleInput}
            value={values.identification}
            name="identification"
          />
          <Form.Text className="text-muted">
            Este campo ser la cedula real
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Salario</Form.Label>
          <Form.Control
            type="text"
            onChange={handleInput}
            value={values.salary}
            name="salary"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Atentido Por</Form.Label>
          <Form.Control
            type="text"
            onChange={handleInput}
            value={values.attendedBy}
            name="attendedBy"
          />
        </Form.Group>
        <Button variant="success" className="mr-1">
          Exportar Word
        </Button>
        <Button variant="danger">Limpiar</Button>
      </Form>
    </React.Fragment>
  );
};
