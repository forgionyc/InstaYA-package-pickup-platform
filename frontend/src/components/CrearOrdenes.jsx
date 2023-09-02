import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import EncabezadoGeneral from './layout/EncabezadoGeneral';
import logo from '/images/logoNaranja.png'

function CrearOrdenes() {
    useEffect(()=>{document.title = "Crear Ordenes"})
  const [validated, setValidated] = useState(false);
  const [ruta, setRuta] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setRuta("/listado_ordenes")
  };

  return (
    <>
        <EncabezadoGeneral/>
        <Container>
            <Row className="d-flex justify-content-center align-items-center" id="login">
                <Col lg={8}>
                    <Card className="shadow" >
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col className='mb-3' md="3">
                                <img src={logo} width="100"/>
                            </Col>
                            <Col className='mb-3'>
                                <Container>
                                    <h3>Creación de Orden</h3>                                    
                                </Container>
                            </Col>  
                            <Col className='mb-3' md="3">
                                <br></br>
                                <Button variant="warning" type="submit" href={ruta}>Crear Orden</Button>
                            </Col>                          
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col}  controlId="validationCustom01">
                            <Form.Label>Fecha de recogida</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="Ingresar la fecha"    //Definir formato                             
                            />
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado la fecha.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Hora de recogida</Form.Label>
                            <Form.Control
                                required
                                type="time"
                                placeholder="Ingresar hora"                                
                            />
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado la hora.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Ancho</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Ancho"
                                aria-label="Ancho"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado el ancho.
                                </Form.Control.Feedback>
                            </InputGroup>
                            
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Largo</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Largo"
                                aria-label="Largo"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado el largo.
                                </Form.Control.Feedback>
                            </InputGroup>                                
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Alto</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Alto"
                                aria-label="Alto"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado el alto.
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Peso</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Peso"
                                aria-label="Peso"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">Kg</InputGroup.Text>
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado el peso.
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección de Recogida</Form.Label>
                            <Form.Control type="text" placeholder="Direccion de recogida" required /> 
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado la dirección de recogida.
                                </Form.Control.Feedback>                           
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Ciudad de Recogida</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad de recogida" required />
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado la ciudad de recogida.
                                </Form.Control.Feedback> 
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Nombre del destinatario</Form.Label>
                            <Form.Control type="text" placeholder="Nombre del destinatario" required />                            
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado el nombre de destinatario.
                                </Form.Control.Feedback> 
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Cédula/Nit del Destinatario</Form.Label>
                            <Form.Control type="text" placeholder="Identificacion del destinatario (sin puntos)" required />
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado la cédula.
                                </Form.Control.Feedback> 
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección de Entrega</Form.Label>
                            <Form.Control type="text" placeholder="Direccion de entrega" required />                            
                                <Form.Control.Feedback type="invalid">
                                    No ha ingresado la dirección de entrega.
                                </Form.Control.Feedback> 
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Ciudad de Entrega</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad de entrega" required />
                            <Form.Control.Feedback type="invalid">
                                    No ha ingresado la ciudad de entrega.
                                </Form.Control.Feedback> 
                            </Form.Group>
                        </Row>
                        </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default CrearOrdenes