import {Col, Container, Image, Row} from "react-bootstrap";
import DownloadImage from "../assets/img-2.png";
import Heading from "./Headings";
import { AiOutlineDownload } from 'react-icons/ai';

function Download(props) {
    return (
        <Container>
            <main>
                <div className="download-container">
                    <Row style={{marginTop: '100px'}}>
                        <Col md={6} sm={6}>
                            <div className="left-download-container">
                                <Image src={DownloadImage} alt="All Products Pack Image"></Image>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="right-download-container">
                                <Heading level={2}>Enhance your productivity<br /> and speed up coding with <br />JetBrains tools!</Heading>
                                <a href="https://resources.jetbrains.com/storage/products/all-products-pack/APP_Infographics_individual_technologies.pdf?_ga=2.47047588.
                                2020109515.1683745698-370081378.1679504526&_gl=1*10x73k5*_
                                ga*MzcwMDgxMzc4LjE2Nzk1MDQ1MjY.*_ga_9J976DJZ68*MTY4Mzg4MzA2OS4yNy4xLj
                                E2ODM4ODQxOTIuNjAuMC4w">
                                    <AiOutlineDownload />
                                    <span style={{marginLeft: 10}}>Download the All Products Pack infographics</span></a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </main>
        </Container>
    )
}

export default Download