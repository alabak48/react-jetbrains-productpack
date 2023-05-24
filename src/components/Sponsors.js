import {Col, Container, Image, Row} from "react-bootstrap";
import Google from "../assets/google.svg";
import Salesforce from "../assets/salesforce.svg";
import HP from "../assets/hp.svg";
import Expedia from "../assets/expedia.svg";
import Samsung from "../assets/samsung.svg";
import Twitter from "../assets/twt.svg";


function Sponsors() {
    return (
        <section>
            <div className="sponsors-container">
                <Container>
                    <Row style={{marginTop: '100px'}}>
                        <Col md={3} lg={4} sm={12}>
                            <div className="left-sponsors-container">
                                <p>Trusted by 320,083<br/>businesses worldwide</p>
                            </div>
                        </Col>
                        <Col md={5} lg={6} sm={2}>
                            <div className="right-sponsors-container">
                                <Col md={3} lg={2} sm={2}>
                                    <div className="google-salesforce">
                                        <Image src={Google} alt="Google Logo" className="sponsor-image google"></Image>
                                        <Image src={Salesforce} alt="Salesforce logo" className="sponsor-image salesforce"></Image>
                                    </div>
                                </Col>
                                <Col md={2} lg={3} sm={2}>
                                    <div className="hp-expedia">
                                        <Image src={HP} alt="HP Logo" className="sponsor-image hp"></Image>
                                        <Image src={Expedia} alt="Expedia Logo" className="sponsor-image expedia"></Image>
                                    </div>
                                </Col>
                                <Col md={3} lg={3} sm={2}>
                                    <div className="samsung-twitter">
                                        <Image src={Samsung} alt="Samsung" className="sponsor-image samsung"></Image>
                                        <Image src={Twitter} alt="Twitter" className="sponsor-image twitter"></Image>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Sponsors