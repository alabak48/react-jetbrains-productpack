import {Col, Container, Row} from "react-bootstrap";
import Heading from "./Headings";

function Faq() {
    return (
        <section>
            <div className="faq-container">
                <Container>
                    <Row>
                        <Heading level={2}>FAQ</Heading>
                        <Col md={6}>
                            <div className="left-faq-container">
                                <p>Can I upgrade my existing IntelliJ IDEA, PyCharm, Webstorm or ResSharper Ultimate
                                    or any other JetBrains IDE license to the All Products Pack?</p>
                                <p>Yes, your existing licences to any JetBrains desktop product make you eligible to
                                    purchase new All Products Pack subscriptions with an additional discount.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="right-faq-container">
                                <p>How to upgrade to the All Products Pack?</p>
                                <p>You can upgrade your current subscription to All Products Pack license from your
                                    JetBrains account using the “Upgrade” link, which is displayed next to all the
                                    licenses that can be upgraded. You can click this link to go to JetBrains eStore
                                    and complete the order. If you have any questions, please contact <a href="https://www.jetbrains.com/support/sales/#email-sales">Sales.</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Faq