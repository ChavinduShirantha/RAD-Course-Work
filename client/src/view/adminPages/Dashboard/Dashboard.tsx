import {Component} from "react";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminFooter} from "../AdminFooter/AdminFooter";

export class Dashboard extends Component {
    render() {
        return (
            <>
                <AdminNavbar/>
                <div className="flex flex-row mb-0">
                    <div className="flex basis-1/6 bg-[#444544]">
                        <AdminSideBar/>
                    </div>
                    <div className="flex basis-5/6 ">
                        <div className="flex">
                            <div className="h-auto p-10">
                                <h1>Admin Dashboard Content</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        );
    }
}
