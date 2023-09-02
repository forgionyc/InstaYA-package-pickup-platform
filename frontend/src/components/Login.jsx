import '/src/App.css'
import React from 'react'
import { Col, Button, Row, Container, Card, Form, InputGroup} from "react-bootstrap"
import logo from '/images/logoNaranja.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import EncabezadoLogin from './layout/EncabezadoLogin'

function Login() {  
  useEffect(()=>{document.title = "Login"})

  const [validated, setValidated] = useState(false);
  const [ruta, setRuta] = useState(null);
  const [usuario, setUsuario] = useState("")
  const [contrasena, setContrasena] = useState("")

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("entra al checkvlidity = false")
      console.log("Ruta: " + ruta)
    } else {
      setRuta("/listado_ordenes");
    }
    setValidated(true);
    if(usuario === ""){
      return;
    }
    //setRuta("/listado_ordenes");
  };
  return (
    <>
      <EncabezadoLogin/>
      <div>
        <Container id="containerLogin">
          <Row className="vh-90 d-flex justify-content-center align-items-center" id="login">
            <Col md={8} lg={6} xs={12}>
              <Card className="shadow" >
                <Card.Body>
                  <div className="mb-0 mt-0">
                    <img src={logo} width="120"/>  
                      <p className=" mb-3">¡Por favor, introduce tu usuario y contraseña!!</p>
                    <div className="mb-1">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group  className="mb-2" md="4" controlId="validationCustomUsername"
                        
                        //value={formulario.usuario}
                        onChange={(e)=> setUsuario(e.target.value)}
                        value={usuario}>
                          <Form.Label>Usuario</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"  
                            >
                            @</InputGroup.Text>
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
                          className="mb-3"
                          controlId="formBasicPassword"
                          value={contrasena}
                          onChange={(e)=> setContrasena(e.target.value)}
                        >
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control 
                          required 
                          type="password" 
                          placeholder="Ingresa tu Contraseña" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="warning" type="submit">
                            Ingresar
                          </Button>
                        </div>
                      </Form>
                    <div className="mt-3">
                        <p className="mb-0  text-center">
                          Si no estas registrado?{" "}
                          <a href="/registro" className="text-warning fw-bold">
                          Crea una cuenta
                          </a>
                        </p>
                      </div>
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
export default Login