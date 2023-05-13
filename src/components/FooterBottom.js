import {Container, Row, Col} from "react-bootstrap";
import RedirectLink from "./Redirect";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faSquareFacebook,
    faTwitter,
    faLinkedin,
    faYoutube,
    faInstagram,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import {faBookOpenReader} from '@fortawesome/free-solid-svg-icons';


function FooterBottom() {
    return (
        <footer>
            <Container className={"bottom-footer-container"}>
                <Row className={"social-media-icons"}>
                    <Col xl={12}>
                        <FontAwesomeIcon icon={faSquareFacebook} style={{marginRight: 40}}/>
                        <FontAwesomeIcon icon={faTwitter} style={{marginRight: 40}}/>
                        <FontAwesomeIcon icon={faLinkedin} style={{marginRight: 40}}/>
                        <FontAwesomeIcon icon={faYoutube} style={{marginRight: 40}}/>
                        <FontAwesomeIcon icon={faInstagram} style={{marginRight: 40}}/>
                        <FontAwesomeIcon icon={faTiktok} style={{marginRight: 40}}/>
                        <FontAwesomeIcon icon={faBookOpenReader} style={{marginRight: 40}}/>
                    </Col>
                </Row>
                <Row className={"privacy-use-trademarks"}>
                    <Row className={"privacy-use-trademarks"}>
                        <Col xl={5} style={{display: "flex", flexWrap: "nowrap"}} className={"redirect-links"}>
                            <RedirectLink redirectUrl={"https://www.jetbrains.com/privacy-security/"}
                                          textUrl={"Privacy & Security"} style={{marginRight: 40}}/>
                            <RedirectLink redirectUrl={"https://www.jetbrains.com/legal/docs/company/useterms.html"}
                                          textUrl={"Terms of Use"} style={{marginRight: 40}}/>
                            <RedirectLink redirectUrl={"https://www.jetbrains.com/legal/trademarks/"}
                                          textUrl={"Trademarks"} style={{marginRight: 40}}/>
                            <RedirectLink redirectUrl={"https://www.jetbrains.com/legal/"} textUrl={"Legal"}
                                          style={{marginRight: 40}}/>
                            <RedirectLink redirectUrl={"https://www.jetbrains.com/genuine-tools/"}
                                          textUrl={"Genuine Tools"}/>
                        </Col>
                    </Row>
                </Row>
                <Row className={"copyright-container"}>
                    <Col xl={4}>
                        <p>Copyright © 2000-2023 JetBrains s.r.o.</p>
                    </Col>
                    <Col xl={8} className={"developed"}>
                        <p>Developed with drive and WebStorm</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterBottom