import '/src/App.css'
import React from 'react'
import { Col, Button, Row, Container, Card, Form, Alert, InputGroup } from "react-bootstrap"
import logo from '/images/logoNaranja.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import EncabezadoLogin from './layout/EncabezadoLogin'

function Registro() {  
  useEffect(()=>{document.title = "Registro"})
  const [validated, setValidated] = useState(false);
  const [ruta, setRuta] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setRuta("/login")
  };

  return (
    <>
      <EncabezadoLogin/>
      <div>
        <Container id="containerRegistro">
          <Row className="vh-90 d-flex justify-content-center align-items-center" id="Registro">
            <Col md={8} lg={6} xs={12}>
              <Card className="shadow" >
                <Card.Body>
                  <div className="mb-0 mt-0" as={Col}>
                    <img src={logo} width="120"/>  
                      <p className=" mb-3">¡¡Por favor, diligencia el formulario de registro!!</p>
                    <div className="mb-1">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-2" controlId="formBasicName">
                          <Form.Label className="text-center">
                            Nombres y apellidos
                          </Form.Label>
                          <Form.Control 
                          required
                          type="text" 
                          placeholder="Ingresa tu nombre completo" />
                        </Form.Group>
                        <Form.Group  className="mb-2" md="4" controlId="validationCustomUsername">
                          <Form.Label>Usuario</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                              type="email"
                              placeholder="Ingresa tu correo electrónico"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              El usuario debe ser un correo.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group
                          className="mb-2"
                          //controlId="formBasicPassword"
                        >
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control 
                          required
                          type="password" 
                          placeholder="Ingresa tu Contraseña" 
                          id="pass1"/>
                        </Form.Group>
                        <Form.Group
                          required
                          className="mb-2"
                          controlId="formBasicCheckbox"
                        >
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <div className="border d-flex align-items-center">
                            <Form.Check
                            required
                            label="Aceptar terminos y condiciones"
                            feedback="Debes aceptar los terminos y condiciones para continuar."
                            feedbackType="invalid"
                            />
                            </div>
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="warning" type="submit" href={ruta} 
                            >
                                Registrar
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div> 
    </> 
  );
}
export default Registro