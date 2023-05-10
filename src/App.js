import {Component} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import NavigationBar from "./components/Navbar";
import AllProductPackImage from "./components/AllProductPackImage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import MainImage from './assets/all-product-pack.png';


class App extends Component{
    render() {
        return (
            <>
            <header>
                <nav>
                    <div className="navigation-bar">
                        <Container>
                            <Row>
                                <Col md={12}>
                        <NavigationBar />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </nav>
            </header>

            <main>
                <div className="heading-container">
                    <div className="left-heading-container">
                        <Container>
                            <Row  style={{ marginTop: '50px' }}>
                                <Col md={6}>
                                    <AllProductPackImage src={MainImage} alt="All Products Pack Image" />
                                </Col>
                                <Col md={6}>
                                    <h1>All Product Pack</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="right-heading-container"></div>
                </div>
            </main>
            </>
        )
    }
}

export default App