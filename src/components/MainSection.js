import {Col, Container, Image, Row} from "react-bootstrap";
import MainImage from "../assets/all-product-pack.png";
import Heading from "./Headings";
import Button from "./Button";

function MainSection(props) {
    return (
        <Container>
            <main>
                <div className="heading-container">
                    <Row style={{marginTop: '100px'}}>
                        <Col md={6}>
                            <div className="left-heading-container">
                                <Image src={MainImage} alt="All Products Pack Image"></Image>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="right-heading-container">
                                <Heading level={1}>All Products Pack</Heading>
                                <Heading level={2}>The complete full-stack<br/>developer toolkit</Heading>
                                <Button btnText="I Want It All!"/>
                                <p style={{marginTop: '20px', color: '#696969'}}>An upgrade and switch option is
                                    available</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </main>
        </Container>
    )
}

export default MainSection