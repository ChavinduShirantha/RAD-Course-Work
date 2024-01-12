import {Component} from "react";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";
import {AdminFooter} from "../AdminFooter/AdminFooter";
export class ManageCustomers extends Component {
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
                                <h1>Admin Customer Content</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        );
    }
}
