import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/images/logoNaranja.png'

function EncabezadoLogin() {
  return (
      <Navbar bg="warning" expand="lg">
        <Container id="containerBrand">
          <Navbar.Brand>
            <img
                alt=""
                src={logo}
                width="50"
                className="d-inline-block align-top"
              />{' '}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="acercade">Acerca de</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default EncabezadoLogin;