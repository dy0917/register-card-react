import { Navbar, Container } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'



function Burger(){
    return (
    <Navbar>
    <Container>
        <Navbar.Brand href="#home">  <FontAwesomeIcon icon={faBars} /></Navbar.Brand>
        <Navbar.Toggle />
    </Container>
    </Navbar>
    )
}

export default Burger;