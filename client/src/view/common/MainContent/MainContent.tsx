import {Component} from "react";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Route, Routes} from "react-router-dom";
export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}