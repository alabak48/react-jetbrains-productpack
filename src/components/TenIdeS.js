import {Col, Container, Row, Image} from "react-bootstrap";
import Heading from "./Headings";
import IntellijIdea from "@jetbrains/logos/intellij-idea/intellij-idea.svg";
import WebStorm from "@jetbrains/logos/webstorm/webstorm.svg"
import Rider from "@jetbrains/logos/rider/rider.svg"
import Pycharm from "@jetbrains/logos/pycharm/pycharm.svg"
import CLion from "@jetbrains/logos/clion/clion.svg"
import PhpStorm from "@jetbrains/logos/phpstorm/phpstorm.svg"
import DataGrip from "@jetbrains/logos/datagrip/datagrip.svg"
import DataSpell from "@jetbrains/logos/dataspell/dataspell.svg"
import RubyMine from "@jetbrains/logos/rubymine/rubymine.svg"
import GoLand from "@jetbrains/logos/goland/goland.svg"


function TenIdeS() {
    return (
        <section>
            <Container>
                <Row>
                    <Col xl={12}>
                        <Heading level={2}>10 IDEs</Heading>
                    </Col>
                    <Col xl={6} lg={4}>
                        <Row>
                            <Col xl={3} lg={4}><Image src={IntellijIdea}></Image></Col>
                            <Col xl={3} lg={4}><Image src={WebStorm}></Image></Col>
                            <Col xl={3} lg={4}><Image src={Rider}></Image></Col>
                            <Col xl={3} lg={4}><Image src={Pycharm}></Image></Col>
                            <Col xl={3} lg={4}><Image src={CLion}></Image></Col>
                            <Col xl={3} lg={4}><Image src={PhpStorm}></Image></Col>
                            <Col xl={3} lg={4}><Image src={DataGrip}></Image></Col>
                            <Col xl={3} lg={4}><Image src={DataSpell}></Image></Col>
                            <Col xl={3} lg={4}><Image src={RubyMine}></Image></Col>
                            <Col xl={3} lg={4}><Image src={GoLand}></Image></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TenIdeS