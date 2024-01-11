import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "../AdminDashboard/AdminDashboard";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";

export class AdminMainContent extends Component {
    render() {
        return (
            <div className="flex flex-row mb-0">
                <div className="flex basis-1/6 bg-[#444544] ">
                    <AdminSideBar/>
                </div>
                <div className="flex basis-5/6 ">
                    <Routes>
                        <Route path="/" Component={AdminDashboard}></Route>
                    </Routes>
                </div>
            </div>
        );
    }
}
