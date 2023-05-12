import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Col, Row} from "react-bootstrap";

function NavigationBar() {
    return (
        <header>
            <nav>
                <div className="navigation-bar">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Navbar collapseOnSelect expand="lg" className='navigation'>
                                    <Container className='NavigationContainer'>
                                        <Navbar.Brand href="#home" id='toolbox'>All Products Pack</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                                        <Navbar.Collapse id="responsive-navbar-nav">
                                            <Nav className="me-auto">
                                            </Nav>
                                            <Nav>
                                                <Nav.Link href="#overview" className='overview'>Overview</Nav.Link>
                                                <Nav.Link href="#toolboxApp" id='toolBoxApp'>Toolbox App</Nav.Link>
                                            </Nav>
                                            <Button variant="outline-secondary" className='buy-now-btn'>Buy
                                                Now</Button>{' '}
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </nav>
        </header>

    );
}

export default NavigationBar;