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
        <section className="table-ide-section">
            <Container className={"ten-ide-section"}>
                <Row style={{marginTop: '100px'}} xs={2}>
                    <Col xl={6} lg={6} md={6} className="order-2 order-sm-1">
                        <Heading level={2}>10 IDEs</Heading>
                        <Col xl={6} lg={4} md={4} className="ide-images">
                            <Row xs={1}>
                                <Col xl={3} lg={4} md={4}>
                                    <Image
                                        src={IntellijIdea}
                                        style={{
                                            opacity: hoveredText && hoveredText !== "IntellijIdea" ? 0.5 : 1
                                        }}
                                        alt="IntellijIdea Icon"
                                        className="intellijidea icon"
                                    />
                                </Col>
                                <Col xl={3} lg={4} md={4}>
                                    <Image
                                        src={WebStorm}
                                        style={{
                                            opacity: hoveredText && hoveredText !== "WebStorm" ? 0.5 : 1
                                        }}
                                        alt="WebStorm Icon"
                                        className="webstorm icon"
                                    />
                                </Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={Rider}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "Rider" ? 0.5 : 1
                                    }}
                                    alt="Rider Icon"
                                    className="rider icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={Pycharm}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "Pycharm" ? 0.5 : 1
                                    }}
                                    alt="Pycharm Icon"
                                    className="pycharm icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={CLion}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "CLion" ? 0.5 : 1
                                    }}
                                    alt="CLion Icon"
                                    className="clion icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={PhpStorm}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "PhpStorm" ? 0.5 : 1
                                    }}
                                    alt="PhpStorm Icon"
                                    className="phpstorm icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={DataGrip}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "DataGrip" ? 0.5 : 1
                                    }}
                                    alt="DataGrip Icon"
                                    className="datagrip icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={DataSpell}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "DataSpell" ? 0.5 : 1
                                    }}
                                    alt="DataSpell Icon"
                                    className="dataspell icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={RubyMine}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "RubyMine" ? 0.5 : 1
                                    }}
                                    alt="RubyMine Icon"
                                    className="rubymine icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}>
                                    <Image
                                        src={GoLand}
                                        style={{
                                            opacity: hoveredText && hoveredText !== "GoLand" ? 0.5 : 1
                                        }}
                                        alt="GoLand Icon"
                                        className="goland icon"
                                    /></Col>
                            </Row>
                        </Col>
                    </Col>

                    <Col xl={6} lg={5} md={6} className="right-ide-container order-1 order-sm-2">
                        <Row xs={1}>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("IntellijIdea")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/idea"}>
                                    IntelliJ IDEA Ultimate
                                </a>
                                </Heading>
                                <p>Java</p>
                                <p>Kotlin</p>
                                <p>Groovy</p>
                                <p>Scala</p>
                            </Col>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("WebStorm")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/webstorm"}>
                                    WebStorm
                                </a>
                                </Heading>
                                <p>JavaScript</p>
                                <p>Angular</p>
                                <p>React</p>
                                <p>Node.js</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("Rider")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/rider"}>
                                    Rider
                                </a>
                                </Heading>
                                <p>.NET</p>
                                <p>C#</p>
                                <p>ASP.NET</p>
                                <p>.NET Core</p>
                            </Col>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("Pycharm")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/pycharm"}>
                                    PyCharm Professional
                                </a>
                                </Heading>
                                <p>Python</p>
                                <p>JavaScript</p>
                                <p>SQL/NoSQL</p>
                                <p>Data Science</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("CLion")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/clion"}>
                                    CLion
                                </a>
                                </Heading>
                                <p>C/C++</p>
                                <p>Embedded</p>
                                <p>Rust</p>
                                <p>Python</p>
                            </Col>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("PhpStorm")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/phpstorm"}>
                                    PhpStorm
                                </a>
                                </Heading>
                                <p>PHP</p>
                                <p>JavaScript</p>
                                <p>SQL/NoSQL</p>
                                <p>Databases</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("DataGrip")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/datagrip"}>
                                    DataGrip
                                </a>
                                </Heading>
                                <p>SQL/NoSQL</p>
                                <p>Databases</p>
                            </Col>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("DataSpell")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/dataspell"}>
                                    DataSpell
                                </a>
                                </Heading>
                                <p>Data Science</p>
                                <p>Python</p>
                                <p>Jupyter</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("RubyMine")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/ruby"}>
                                    RubyMine
                                </a>
                                </Heading>
                                <p>Ruby, Rails</p>
                                <p>JavaScript</p>
                                <p>SQL/NoSQL</p>
                                <p>Databases</p>
                            </Col>
                            <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("GoLand")}
                                 onMouseLeave={handleTextLeave}>
                                <Heading level={3}><a href={"https://www.jetbrains.com/go"}>
                                    GoLand
                                </a>
                                </Heading>
                                <p>Go</p>
                                <p>JavaScript</p>
                                <p>SQL/NoSQL</p>
                                <p>Databases</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className={"extended-ide-section"}>
                <Row style={{marginTop: '100px'}} xs={2}>
                    <Col xl={6} lg={6} md={6} className="order-2 order-sm-2">
                        <Heading level={2}>3 Extensions & 2 Profilers</Heading>
                        <Col xl={6} lg={4} md={4} className={"ide-extended-images"}>
                            <Row>
                                <Col xl={3} lg={4} md={4}>
                                    <Image
                                        src={ReSharper}
                                        style={{
                                            opacity: hoveredText && hoveredText !== "ReSharper" ? 0.5 : 1
                                        }}
                                        alt="ReSharper Icon"
                                        className="resharper icon"
                                    />
                                </Col>
                                <Col xl={3} lg={4} md={4}>
                                    <Image
                                        src={ReSharperC}
                                        style={{
                                            opacity: hoveredText && hoveredText !== "ReSharper C++" ? 0.5 : 1
                                        }}
                                        alt="ReSharperC Icon"
                                        className="resharperc icon"
                                    />
                                </Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={dotCover}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "dotCover" ? 0.5 : 1
                                    }}
                                    alt="dotCover Icon"
                                    className="dotcover icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={dotMemory}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "dotMemory" ? 0.5 : 1
                                    }}
                                    alt="dotMemory Icon"
                                    className="dotmemory icon"
                                /></Col>
                                <Col xl={3} lg={4} md={4}><Image
                                    src={dotTrace}
                                    style={{
                                        opacity: hoveredText && hoveredText !== "dotTrace" ? 0.5 : 1
                                    }}
                                    alt="dotTrace Icon"
                                    className="dottrace icon"
                                /></Col>
                            </Row>
                        </Col>
                    </Col>

                    <Col xl={6} lg={6} md={6} className="order-1 order-sm-2">
                        <Row className="space-around">
                            <Row>
                                <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("ReSharper")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/resharper"}>
                                        ReSharper</a>
                                    </Heading>
                                    <p>.NET</p>
                                    <p>C#</p>
                                    <p>.NET Core</p>
                                    <p>ASP.NET</p>
                                </Col>
                                <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("ReSharper C++")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/resharper-cpp"}>
                                        ReSharper C++
                                    </a>
                                    </Heading>
                                    <p>C/C++</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("dotCover")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/dotmemory"}>
                                        dotCover
                                    </a>
                                    </Heading>
                                    <p>.NET</p>
                                    <p>.NET Core</p>
                                    <p>Mono</p>
                                </Col>
                                <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("dotMemory")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/all/"}>
                                        dotMemory </a>
                                    </Heading>
                                    <p>.NET</p>
                                    <p>.NET Core</p>
                                    <p>Mono</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={6} onMouseEnter={() => handleTextHover("dotTrace")}
                                     onMouseLeave={handleTextLeave}>
                                    <Heading level={3}><a href={"https://www.jetbrains.com/profiler"}>
                                        dotTrace
                                    </a>
                                    </Heading>
                                    <p>.NET</p>
                                    <p>.NET Core</p>
                                    <p>Mono</p>
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