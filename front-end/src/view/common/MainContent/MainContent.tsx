import {Component} from "react";
import {About} from "../../pages/About/About";
import {Route, Routes} from "react-router-dom";
export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                {/*<h1 className="text-4xl text-center text-tertiary">*/}
                {/*    This is Main Content!</h1>*/}

                <Routes>
                    <Route path="/about" Component={About}></Route>
                </Routes>
            </div>
        );
    }
}