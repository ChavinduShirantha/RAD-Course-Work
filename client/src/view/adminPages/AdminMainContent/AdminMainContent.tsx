import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {AdminHome} from "../AdminHome/AdminHome";

export class AdminMainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={AdminHome}></Route>
                </Routes>
            </div>
        );
    }
}
