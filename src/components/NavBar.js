
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">LMS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/features">{props.value1}</Nav.Link>
                    <Nav.Link as={Link} to="/clicker">Clicker</Nav.Link>
                    <Nav.Link as={Link} to="/timer">Timer</Nav.Link>
                    <Nav.Link as={Link} to="/pricing">{props.value2}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    );
}

export default NavBar