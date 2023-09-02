import "/src/App.css";
import React from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EncabezadoGeneral from "./layout/EncabezadoGeneral";
import logo from "/images/logoNaranja.png";
import axios from "axios";

function ListadoOrdenes() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    document.title = "Listado Ordenes";
   const fetchData = async () => {
      try {
        const response = await axios.get({
          url: "http://localhost:5000/api/envios",
        });

        setOrdenes(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  /*useEffect(
        () =>
          axios
            .get(
              "http://127.0.0.1:5000/api/envios"
            )
            .then((res) => {
              setOrdenes(res.data);
              console.log(res.data);
              console.log(ordenes);
            })
            .catch((error) => console.log(error)),
        []
    )*/
  return (
    <>
      <EncabezadoGeneral />
      <div className="mt-5">
        <Container id="containerListadoOrdenes">
          <Card className="shadow">
            <Card.Body>
              <Row>
                <Col className="mb-3" md="2">
                  <img src={logo} width="100" />
                </Col>
                <Col className="mb-3">
                  <Container>
                    <h3>Listado Ordenes</h3>
                  </Container>
                </Col>
                <Col className="mb-3" md="2">
                  <br></br>
                  <Button variant="warning" type="submit" href="/crear_ordenes">
                    Crear Orden
                  </Button>
                </Col>
              </Row>
              <div
                className="table-responsive"
                style={{ height: "400px", overflowY: "auto" }}
              >
                <Table responsive striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Fecha</th>
                      <th>Ciudad Entrega</th>
                      <th>Direccion Entrega</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  {ordenes.map((orden, i) => (
                    <tbody key={orden._id}>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{orden.fecha}</td>
                        <td>{orden.ciudad_ent}</td>
                        <td>{orden.direccion_ent}</td>
                        <td>{orden.estado}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default ListadoOrdenes;
