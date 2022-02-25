import { Navbar, Col, Row, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
    useNavigate,
} from "react-router-dom";

function Back() {
    const navigate = useNavigate();
    return (
        <Container>
            <Row >
                <Col md={{ span: 4, offset: 4 }} className="nav-border-bottom">
                    <Navbar>
                        <button className='btn btn-sm' onClick={() => {
                            navigate("/");
                        }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>


                        <Nav.Item className='ms-5'>
                            Menu
                        </Nav.Item>
                        <Navbar.Toggle />

                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Back;