import {Col, Container, Image, Row} from "react-bootstrap";
import ScreenshotImage from "../assets/productImage.png";
import Heading from "./Headings";

function ToolboxApp() {
    return (
        <section>
            <div className="toolbox-app-container">
                <Container>
                    <Row style={{marginTop: '100px'}}>
                        <Col md={4}>
                            <div className="left-toolbox-container">
                                <Image src={ScreenshotImage} alt="All Products Pack Image"></Image>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="right-toolbox-container">
                                <Heading level={3}>Maintain your tools with the Toolbox App</Heading>
                                <p style={{marginTop: '20px'}}>Simple installations,
                                    updates, and more
                                </p>
                                <a href="https://www.jetbrains.com/toolbox-app/">Learn more</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default ToolboxApp