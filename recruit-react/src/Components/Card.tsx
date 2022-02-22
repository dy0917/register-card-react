import { Navbar, Container } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'



function Card(){
    return (
    <Navbar>
    <Container>

        <Navbar.Brand href="#home">  <FontAwesomeIcon icon={faBars} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default Card;