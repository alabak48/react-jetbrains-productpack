import {Component} from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import MainSection from "./components/MainSection";
import Deals from "./components/Deals";

class App extends Component {
    render() {
        return (<>
            <NavigationBar/>
            <MainSection />
            <Deals />
        </>)
    }
}

export default App