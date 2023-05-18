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
            <Container className={"ten-ide-section"}>
                <Row style={{marginTop: '100px'}}>
                    <Col xl={6} lg={6}>
                        <Heading level={2}>10 IDEs</Heading>
                        <Col xl={6} lg={4} className={"ide-images"}>
                            <Row>
                                <Col xl={3} lg={4}><Image src={IntellijIdea} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={WebStorm} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={Rider} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={Pycharm} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={CLion} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={PhpStorm} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={DataGrip} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={DataSpell} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={RubyMine} style={{marginTop: '24px'}}></Image></Col>
                                <Col xl={3} lg={4}><Image src={GoLand} style={{marginTop: '24px'}}></Image></Col>
                            </Row>
                    </Col>
                    </Col>

                    <Col xl={6} lg={6}>
                        <Row className="space-around">
                                <Row>
                                    <Col xl={6} lg={4}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            IntelliJ IDEA Ultimate
                                        </a>
                                        </Heading>
                                        <span>Java</span>
                                        <span>Kotlin</span>
                                        <span>Groovy</span>
                                        <span>Scala</span>
                                    </Col>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            WebStorm
                                        </a>
                                        </Heading>
                                        <span>JavaScript, TypeScript</span>
                                        <span>Angular</span>
                                        <span>React</span>
                                        <span>Node.js</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            Rider
                                        </a>
                                        </Heading>
                                        <span>.NET</span>
                                        <span>C#</span>
                                        <span>ASP.NET</span>
                                        <span>.NET Core</span>
                                    </Col>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            PyCharm Professional
                                        </a>
                                        </Heading>
                                        <span>Python</span>
                                        <span>JavaScript, TypeScript</span>
                                        <span>SQL/NoSQL</span>
                                        <span>Data Science</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            CLion
                                        </a>
                                        </Heading>
                                        <span>C/C++</span>
                                        <span>Embedded</span>
                                        <span>Rust</span>
                                        <span>Python</span>
                                    </Col>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            PhpStorm
                                        </a>
                                        </Heading>
                                        <span>PHP</span>
                                        <span>JavaScript, TypeScript</span>
                                        <span>SQL/NoSQL</span>
                                        <span>Databases</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            DataGrip
                                        </a>
                                        </Heading>
                                        <span>SQL/NoSQL</span>
                                        <span>Databases</span>
                                    </Col>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            DataSpell
                                        </a>
                                        </Heading>
                                        <span>Data Science</span>
                                        <span>Python</span>
                                        <span>Jupyter</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            RubyMine
                                        </a>
                                        </Heading>
                                        <span>Ruby, Rails</span>
                                        <span>JavaScript, TypeScript</span>
                                        <span>SQL/NoSQL</span>
                                        <span>Databases</span>
                                    </Col>
                                    <Col xl={6}>
                                        <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                            GoLand
                                        </a>
                                        </Heading>
                                        <span>Go</span>
                                        <span>JavaScript, TypeScript</span>
                                        <span>SQL/NoSQL</span>
                                        <span>Databases</span>
                                    </Col>
                                </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TenIdeS