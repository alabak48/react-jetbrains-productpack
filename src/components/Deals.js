import {Col, Container, Image, Row} from "react-bootstrap";
import SecondImage from "../assets/deals-image.png";
import Heading from "./Headings";
import Value from "../assets/value.svg";
import Flexibility from "../assets/flexibility.svg";
import Toggle from "../assets/use-account.svg";
import Learn from "../assets/learn.svg";

function Deals() {
    return (
        <Container>
            <section>
                <div className="deals-container">
                    <Row style={{marginTop: '100px'}}>
                        <Col md={6}>
                            <div className="left-deals-container">
                                <Image src={SecondImage} alt="All Products Pack Image"></Image>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="right-deals-container">
                                <div className="great-value-container">
                                    <img src={Value} alt="Icon"/>
                                    <Heading level={5}>Great value</Heading>
                                    <p>Get 10 IDEs for the price of 2.</p>
                                </div>
                                <div className="flexibility-container">
                                    <img src={Flexibility} alt="Icon"/>
                                    <Heading level={5}>Flexibility</Heading>
                                    <p>Use different tools for different projects on multiple machines
                                        as and when you need them. Easily switch between the tools under the
                                        All Products Pack license.</p>
                                </div>
                                <div className="simple-license-management-container">
                                    <img src={Toggle} alt="Icon"/>
                                    <Heading level={5}>Simple license management</Heading>
                                    <p>One unique license includes all the JetBrains desktop tools.
                                        Get unlimited access to all of them.</p>
                                </div>
                                <div className="further-your-skills-container">
                                    <img src={Learn} alt="Icon"/>
                                    <Heading level={5}>Further your skills</Heading>
                                    <p>Advance your programming skill with the best professional tools.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </Container>
    )
}

export default Deals