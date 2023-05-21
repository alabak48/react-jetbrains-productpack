import {Container, Row, Col} from "react-bootstrap";
import RedirectLink from "./Redirect";

function FooterTop(){
    return(
        <footer>
            <Container className={"top-footer-container"}>
                <Row>
                    <Col xl={2} lg={2} sm={6} className={"products-container"}>
                        <RedirectLink
                        titleHeading={"Products"}
                        redirectUrl={"https://www.jetbrains.com/products/#type=ide"} textUrl={"IDEs"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/products/#tech=dotnet"} textUrl={".NET & Visual Studio"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/products/#type=team"} textUrl={"Team tools"}/>
                        <RedirectLink redirectUrl={"https://plugins.jetbrains.com/?_gl=1*axz3nr*_ga*MzcwMDgxMzc4LjE2Nzk1MDQ1MjY.*_ga_9J976DJZ68*MTY4Mzk2NzY1NS4zMS4xLjE2ODM5NjkyNjcuNDAuMC4w&_ga=2.241624705.2020109515.1683745698-370081378.1679504526"} textUrl={"Plugins"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/edu-products/"} textUrl={"Education"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/products/#type=language"} textUrl={"Languages"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/products/"} textUrl={"All Products"}/>
                    </Col>
                    <Col xl={2} lg={2} sm={6} className={"solutions-container"}>
                        <RedirectLink
                            titleHeading={"Solutions"}
                            redirectUrl={"https://www.jetbrains.com/cpp/"} textUrl={"C++ Tools"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/data-tools/"} textUrl={"Data Tools"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/devops/"} textUrl={"DevOps"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/education/"} textUrl={"Education"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/gamedev/"} textUrl={"Game Development"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/space/solutions/software-teams/"} textUrl={"Software Development"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/store/business/"} textUrl={"Tool For Business"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/quality-assurance-solutions/"} textUrl={"Quality Assurance"}/>

                    </Col>
                    <Col xl={2} lg={2} sm={6} className={"initiatives-container"}>
                        <RedirectLink
                            titleHeading={"Initiatives"}
                            redirectUrl={"https://www.jetbrains.com/opensource/kotlin/"} textUrl={"Kotlin"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/lp/mono/"} textUrl={"JetBrains Mono"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/research/"} textUrl={"JetBrains Research"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/opensource/"} textUrl={"Open Source Projects"}/>
                    </Col>
                    <Col xl={2} lg={2} sm={6} className={"community-container"}>
                        <RedirectLink
                            titleHeading={"Community"}
                            redirectUrl={"https://www.jetbrains.com/products/#type=ide"} textUrl={"Academic Licensing"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/products/#tech=dotnet"} textUrl={"Open Source Support"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/products/#type=team"} textUrl={"User Groups"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/edu-products/"} textUrl={"Events Partnership"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/products/#type=language"} textUrl={"Developer Recognition"}/>
                    </Col>
                    <Col xl={2} lg={2} sm={6} className={"resources-container"}>
                        <RedirectLink
                            titleHeading={"Resources"}
                            redirectUrl={"https://www.jetbrains.com/support/sales/"} textUrl={"Sales Support"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/support/"} textUrl={"Product Support"}/>
                        <RedirectLink redirectUrl={"https://sales.jetbrains.com/hc/en-gb/?_gl=1*i20ijv*_ga*MzcwMDgxMzc4LjE2Nzk1MDQ1MjY.*_ga_9J976DJZ68*MTY4Mzk2NzY1NS4zMS4xLjE2ODM5NjkyNjcuNDAuMC4w&_ga=2.207080976.2020109515.1683745698-370081378.1679504526"} textUrl={"Licensing FAQ"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/help/"} textUrl={"Documentation"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/resources/eap/"} textUrl={"Early Access"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/conferences/"} textUrl={"Event and Webinars"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/resources/newsletters/"} textUrl={"Newsletters"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/resources/industry-reports/"} textUrl={"Industry Reports"}/>
                        <RedirectLink redirectUrl={"https://blog.jetbrains.com/?_gl=1*1a9tewc*_ga*MzcwMDgxMzc4LjE2Nzk1MDQ1MjY.*_ga_9J976DJZ68*MTY4Mzk2NzY1NS4zMS4xLjE2ODM5NjkyNjcuNDAuMC4w&_ga=2.14148660.2020109515.1683745698-370081378.1679504526"} textUrl={"Blog"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/brand/desktop-art/"} textUrl={"Desktop Art"}/>
                    </Col>
                    <Col xl={2} lg={2} sm={6} className={"company-container"}>
                        <RedirectLink
                            titleHeading={"Company"}
                            redirectUrl={"https://www.jetbrains.com/company/"} textUrl={"About"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/contacts/#headquarters-international-sales"} textUrl={"Contacts"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/careers/apply/"} textUrl={"Careers"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/press/"} textUrl={"News"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/customers/"} textUrl={"Customers & Awards"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/commitment/"} textUrl={"Our Commitment"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/brand/"} textUrl={"Brand Assets"}/>
                        <RedirectLink redirectUrl={"https://www.jetbrains.com/company/partners/"} textUrl={"Partners and Resellers"}/>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterTop