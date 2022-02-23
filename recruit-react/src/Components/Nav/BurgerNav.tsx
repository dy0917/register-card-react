import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
    useNavigate,
} from "react-router-dom";

function Burger() {
    const navigate = useNavigate();
    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }} className=" nav-border-bottom">
                <Navbar>
                    <button className='btn btn-sm' onClick={() => {
                        navigate("/menu");
                    }}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Nav.Item className='ms-5'>
                        Register card form
                    </Nav.Item>
                    <Navbar.Toggle />
                </Navbar>
            </Col>
        </Row>
    )
}

export default Burger;