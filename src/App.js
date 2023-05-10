import {Component} from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import MainSection from "./components/MainSection";
import TenIdeS from "./components/TenIdeS";

class App extends Component {
    render() {
        return (<>
            <NavigationBar/>
            <MainSection />
            <TenIdeS />
        </>)
    }
}

export default App