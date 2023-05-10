import {Component} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import NavigationBar from "./components/Navbar";
import AllProductPackImage from "./components/AllProductPackImage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import MainImage from './assets/all-product-pack.png';
import Heading from "./components/Headings";
import Button from "./components/Button";


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
                            <Row style={{ marginTop: '100px' }}>
                                <Col md={6}>
                                    <AllProductPackImage src={MainImage} alt="All Products Pack Image" />
                                </Col>
                                <Col md={6}>
                                    <Heading level={1}>All Products Pack</Heading>
                                    <Heading level={2}>The complete full-stack<br />developer toolkit</Heading>
                                    <Button btnText="I Want It All!"  />
                                    <p style={{ marginTop: '20px', color: '#696969'}}>An upgrade and switch option is available</p>
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