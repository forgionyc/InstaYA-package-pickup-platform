import React, { useState, useEffect } from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import EncabezadoGeneral from "./layout/EncabezadoGeneral";
import logo from "/images/logoNaranja.png";
import axios from "axios";

function ActualizarOrdenes() {
  useEffect(() => {
    document.title = "Actualizar Ordenes";
  });
  const [validated, setValidated] = useState(false);
  const [ruta, setRuta] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setRuta("/listado_ordenes");
  };

  const [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "http://127.0.0.1:5000/api/envios/638620812b1d92490814d031",
        });

        setOrdenes(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <EncabezadoGeneral />
      <Container>
        <Row
          className="d-flex justify-content-center align-items-center mt-4"
          id="login"
        >
          <Col lg={8}>
            <Card className="shadow">
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col className="mb-3" md="3">
                      <img src={logo} width="100" />
                    </Col>
                    <Col className="mb-3">
                      <Container>
                        <h3>Actualización de Orden</h3>
                      </Container>
                    </Col>
                    <Col className="mb-3" md="3">
                      <br></br>
                      <Button variant="warning" type="submit" href={ruta}>
                        Actualizar Orden
                      </Button>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>Fecha de recogida</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.fecha}
                        required
                        type="text"
                        placeholder="Ingresar la fecha" //Definir formato
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Hora de recogida</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.hora}
                        required
                        type="text"
                        placeholder="Ingresar hora"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Col className="mb-3" md="3"></Col>
                    <Col className="mb-3">
                      <Container>
                        <Form.Group md="4" controlId="validationCustom01">
                          <Form.Label>Estado del pedido</Form.Label>
                          <Form.Select
                            md="2"
                            aria-label="Default select example"
                          >
                            <option defaultValue={ordenes.estado}>
                              {ordenes.estado}
                            </option>
                            <option value="Guardado">Guardado</option>
                            <option value="Cancelado">Cancelado</option>
                            <option value="Cumplido">Cumplido</option>
                          </Form.Select>
                        </Form.Group>
                      </Container>
                    </Col>
                    <Col className="mb-3" md="3"></Col>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="3">
                      <Form.Label>Ancho</Form.Label>
                      <InputGroup>
                        <Form.Control
                          defaultValue={ordenes.ancho}
                          required
                          placeholder="Ancho"
                          aria-label="Ancho"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">
                          metros
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>Largo</Form.Label>
                      <InputGroup>
                        <Form.Control
                          defaultValue={ordenes.largo}
                          required
                          placeholder="Largo"
                          aria-label="Largo"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">
                          metros
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>Alto</Form.Label>
                      <InputGroup>
                        <Form.Control
                          defaultValue={ordenes.alto}
                          required
                          placeholder="Alto"
                          aria-label="Alto"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">
                          metros
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>Peso</Form.Label>
                      <InputGroup>
                        <Form.Control
                          defaultValue={ordenes.peso}
                          required
                          placeholder="Peso"
                          aria-label="Peso"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Kg</InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>Dirección Recogida</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.direccion_rec}
                        type="text"
                        placeholder="Direccion de recogida"
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                      <Form.Label>Ciudad Recogida</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.ciudad_rec}
                        type="text"
                        placeholder="Ciudad de recogida"
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>Nombre destinatario</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.nombre_des}
                        type="text"
                        placeholder="Nombre del destinatario"
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                      <Form.Label>Cedula/Nit Destinatario</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.cc_nit_des}
                        type="text"
                        placeholder="Identificacion del destinatario"
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>Dirección Entrega</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.direccion_ent}
                        type="text"
                        placeholder="Direccion de entrega"
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                      <Form.Label>Ciudad Entrega</Form.Label>
                      <Form.Control
                        defaultValue={ordenes.ciudad_ent}
                        type="text"
                        placeholder="Ciudad de entrega"
                        required
                      />
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

export default ActualizarOrdenes;
