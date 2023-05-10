import {Component} from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

class App extends Component{
    render() {
        return (
            <header>
                <div className="navigation-bar">
                    <NavigationBar />
                </div>
            </header>
        )
    }
}

export default App