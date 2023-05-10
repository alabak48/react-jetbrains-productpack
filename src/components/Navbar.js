import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='navigation-bar' fixed="top">
            <Container className='NavigationContainer'>
                <Navbar.Brand href="#home" id='toolbox'>Toolbox</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#overview" className='overview'>Overview</Nav.Link>
                        <Nav.Link href="#toolboxApp" id='toolBoxApp'>Toolbox App</Nav.Link>
                    </Nav>
                    <Button variant="outline-secondary" className='buy-now-btn'>Buy Now</Button>{' '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;