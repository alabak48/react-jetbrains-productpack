import React, {useState} from "react";
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
import ReSharper from "@jetbrains/logos/resharper/resharper.svg"
import ReSharperC from "@jetbrains/logos/resharper-cpp/resharper-cpp.svg"
import dotCover from "@jetbrains/logos/dotcover/dotcover.svg"
import dotMemory from "@jetbrains/logos/dotmemory/dotmemory.svg"
import dotTrace from "@jetbrains/logos/dottrace/dottrace.svg"


function TenIdeS() {
    const [hoveredText, setHoveredText] = useState(null);

    const handleTextHover = (text) => {
        setHoveredText(text);
    };

    const handleTextLeave = () => {
        setHoveredText(null);
    };
    return (
        <section>
            <Container className={"ten-ide-section"}>
                <Row style={{marginTop: '100px'}}>
                    <Col xl={6} lg={6}>
                        <Heading level={2}>10 IDEs</Heading>
                        <Col xl={6} lg={4} className={"ide-images"}>
                            <Row>
                                <Col xl={3} lg={4}>
                                    <Image
                                        src={IntellijIdea}
                                        style={{
                                            marginTop: "30px",
                                            opacity: hoveredText && hoveredText !== "IntellijIdea" ? 0.5 : 1
                                        }}
                                    />
                                </Col>
                                <Col xl={3} lg={4}>
                                    <Image
                                        src={WebStorm}
                                        style={{
                                            marginTop: "30px",
                                            opacity: hoveredText && hoveredText !== "WebStorm" ? 0.5 : 1
                                        }}
                                    />
                                </Col>
                                <Col xl={3} lg={4}><Image
                                    src={Rider}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "Rider" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={Pycharm}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "Pycharm" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={CLion}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "CLion" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={PhpStorm}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "PhpStorm" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={DataGrip}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "DataGrip" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={DataSpell}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "DataSpell" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={RubyMine}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "RubyMine" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}>
                                    <Image
                                        src={GoLand}
                                        style={{
                                            marginTop: "30px",
                                            opacity: hoveredText && hoveredText !== "GoLand" ? 0.5 : 1
                                        }}
                                    /></Col>
                            </Row>
                        </Col>
                    </Col>

                    <Col xl={6} lg={6}>
                        <Row className="space-around">
                            <Row>
                                <Col xl={6} lg={4} onMouseEnter={() => handleTextHover("IntellijIdea")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        IntelliJ IDEA Ultimate
                                    </a>
                                    </Heading>
                                    <span>Java</span>
                                    <span>Kotlin</span>
                                    <span>Groovy</span>
                                    <span>Scala</span>
                                </Col>
                                <Col xl={6} onMouseEnter={() => handleTextHover("WebStorm")}
                                     onMouseLeave={handleTextLeave}>
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
                                <Col xl={6} onMouseEnter={() => handleTextHover("Rider")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        Rider
                                    </a>
                                    </Heading>
                                    <span>.NET</span>
                                    <span>C#</span>
                                    <span>ASP.NET</span>
                                    <span>.NET Core</span>
                                </Col>
                                <Col xl={6} onMouseEnter={() => handleTextHover("Pycharm")}
                                     onMouseLeave={handleTextLeave}>
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
                                <Col xl={6} onMouseEnter={() => handleTextHover("CLion")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        CLion
                                    </a>
                                    </Heading>
                                    <span>C/C++</span>
                                    <span>Embedded</span>
                                    <span>Rust</span>
                                    <span>Python</span>
                                </Col>
                                <Col xl={6} onMouseEnter={() => handleTextHover("PhpStorm")}
                                     onMouseLeave={handleTextLeave}>
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
                                <Col xl={6} onMouseEnter={() => handleTextHover("DataGrip")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        DataGrip
                                    </a>
                                    </Heading>
                                    <span>SQL/NoSQL</span>
                                    <span>Databases</span>
                                </Col>
                                <Col xl={6} onMouseEnter={() => handleTextHover("DataSpell")}
                                     onMouseLeave={handleTextLeave}>
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
                                <Col xl={6} onMouseEnter={() => handleTextHover("RubyMine")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        RubyMine
                                    </a>
                                    </Heading>
                                    <span>Ruby, Rails</span>
                                    <span>JavaScript, TypeScript</span>
                                    <span>SQL/NoSQL</span>
                                    <span>Databases</span>
                                </Col>
                                <Col xl={6} onMouseEnter={() => handleTextHover("GoLand")}
                                     onMouseLeave={handleTextLeave}>
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

            <Container className={"extended-ide-section"}>
                <Row style={{marginTop: '100px'}}>
                    <Col xl={6} lg={6}>
                        <Heading level={2}>3 Extensions & 2 Profilers</Heading>
                        <Col xl={6} lg={4} className={"ide-extended-images"}>
                            <Row>
                                <Col xl={3} lg={4}>
                                    <Image
                                        src={ReSharper}
                                        style={{
                                            marginTop: "30px",
                                            opacity: hoveredText && hoveredText !== "ReSharper" ? 0.5 : 1
                                        }}
                                    />
                                </Col>
                                <Col xl={3} lg={4}>
                                    <Image
                                        src={ReSharperC}
                                        style={{
                                            marginTop: "30px",
                                            opacity: hoveredText && hoveredText !== "ReSharper C++" ? 0.5 : 1
                                        }}
                                    />
                                </Col>
                                <Col xl={3} lg={4}><Image
                                    src={dotCover}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "dotCover" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={dotMemory}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "dotMemory" ? 0.5 : 1
                                    }}
                                /></Col>
                                <Col xl={3} lg={4}><Image
                                    src={dotTrace}
                                    style={{
                                        marginTop: "30px",
                                        opacity: hoveredText && hoveredText !== "dotTrace" ? 0.5 : 1
                                    }}
                                /></Col>
                            </Row>
                        </Col>
                    </Col>

                    <Col xl={6} lg={6}>
                        <Row className="space-around">
                            <Row>
                                <Col xl={6} lg={4} onMouseEnter={() => handleTextHover("ReSharper")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        ReSharper</a>
                                    </Heading>
                                    <span>.NET</span>
                                    <span>C#</span>
                                    <span>.NET Core</span>
                                    <span>ASP.NET</span>
                                </Col>
                                <Col xl={6} onMouseEnter={() => handleTextHover("ReSharper C++")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        ReSharper C++
                                    </a>
                                    </Heading>
                                    <span>C/C++</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} onMouseEnter={() => handleTextHover("dotCover")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        dotCover
                                    </a>
                                    </Heading>
                                    <span>.NET</span>
                                    <span>.NET Core</span>
                                    <span>Mono</span>
                                </Col>
                                <Col xl={6} onMouseEnter={() => handleTextHover("dotMemory")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        dotMemory                                    </a>
                                    </Heading>
                                    <span>.NET</span>
                                    <span>.NET Core</span>
                                    <span>Mono</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} onMouseEnter={() => handleTextHover("dotTrace")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        dotTrace
                                    </a>
                                    </Heading>
                                    <span>.NET</span>
                                    <span>.NET Core</span>
                                    <span>Mono</span>
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