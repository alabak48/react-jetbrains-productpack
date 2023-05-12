import {Component} from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import MainSection from "./components/MainSection";
import Deals from "./components/Deals";
import ToolboxApp from "./components/ToolboxApp";
import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";
import Download from "./components/Download";

class App extends Component {
    render() {
        return (<>
            <NavigationBar/>
            <MainSection />
            <Deals />
            <ToolboxApp />
            <Sponsors />
            <Faq />
            <Download />
        </>)
    }
}

export default App