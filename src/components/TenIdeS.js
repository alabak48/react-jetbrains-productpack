import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Heading from "./Headings";
import { ReactComponent as Intelij } from "@jetbrains/logos/intellij-idea/intellij-idea.svg";
import { ReactComponent as Webstorm } from "@jetbrains/logos/webstorm/webstorm.svg";
import { ReactComponent as Resharper } from "@jetbrains/logos/resharper/resharper.svg";
import { ReactComponent as Rider } from "@jetbrains/logos/rider/rider.svg";
import { ReactComponent as Appcode } from "@jetbrains/logos/appcode/appcode.svg";
import { ReactComponent as Clion } from "@jetbrains/logos/clion/clion.svg";
import { ReactComponent as Rubymine } from "@jetbrains/logos/rubymine/rubymine.svg";
import { ReactComponent as Datagrip } from "@jetbrains/logos/datagrip/datagrip.svg";
import { ReactComponent as Phpstorm } from "@jetbrains/logos/phpstorm/phpstorm.svg";
import { ReactComponent as Pycharm } from "@jetbrains/logos/pycharm/pycharm.svg";
import React from 'react';

const TenIdeS = () => {
    const iconData = [
        { icon: Intelij },
        { icon: Webstorm },
        { icon: Resharper },
        { icon: Rider },
        { icon: Appcode },
        { icon: Clion },
        { icon: Rubymine },
        { icon: Datagrip },
        { icon: Phpstorm },
        { icon: Pycharm }
    ];
    return (
        <section>
            <Container>
                <div className="ide-container">
                    <div className="left-ten-container">
                        <Row style={{marginTop: '100px'}}>
                            <Col md={6}>
                                <Heading level={3}>10 IDEs</Heading>
                                <table>
                                    <tbody>
                                    {iconData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{React.createElement(item.icon)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </div>
                    <div className="right-ten-container">
                        <Row style={{marginTop: '100px'}}>
                            <Col md={6}>

                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TenIdeS