import {Container, Row, Col, Form} from "react-bootstrap";
import Buttons from './Button';
import RedirectLink from "./Redirect";
import {faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';


function Socials() {
    return (
        <section className="socials">
            <Container>
                <Row style={{paddingTop: 98, paddingBottom: 98}}>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6} lg={6}>
                                <div className="left-socials-container">
                                    <Form>
                                        <p>Stay updated</p>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Email"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox">By submitting this form I agree to the <a
                                                href="https://www.jetbrains.com/legal/docs/privacy/privacy/">JetBrains
                                                Privacy Policy?"</a></Form.Check>
                                        </Form.Group>
                                        <Buttons btnText="Submit"/>
                                    </Form>
                                </div>
                            </Col>
                            <Col xl={6} lg={6}>
                                <div className="right-socials-container">
                                    <RedirectLink
                                        iconSrc={faBookOpenReader}
                                        titleHeading={"Follow us"}
                                        redirectUrl={"https://www.jetbrains.com/support/sales/#email-sales"}
                                        textUrl={"JetBrains Blog"}
                                    />
                                    <RedirectLink
                                        iconSrc={faUsers}
                                        redirectUrl="https://www.jetbrains.com/support/sales/"
                                        textUrl="Contact Sales"
                                    />
                                    <RedirectLink
                                        iconSrc={faTwitter}
                                        redirectUrl="https://twitter.com/jetbrains"
                                        textUrl="@JetBrains on Twitter"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Socials