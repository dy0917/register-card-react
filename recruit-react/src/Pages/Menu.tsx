import { Container, Row, Col } from 'react-bootstrap';
import BackNav from "../Components/Nav/BackNav";





function Menu() {

    return (
        <div>
            <BackNav></BackNav>
            <Container className='col-4'>
                <Row className="mb-5">
                    <Col md="auto">This is menu content</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu;