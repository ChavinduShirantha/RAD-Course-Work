import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../Dashboard/Dashboard";
import {ManageCustomers} from "../ManageCustomers/ManageCustomers";
import {ManageProducts} from "../ManageProducts/ManageProducts";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";

export class AdminMainContent extends Component {
    render() {
        return (
            <div className=" mx-auto">
                <div className="flex flex-row mb-0">
                    <div className="flex basis-1/6 bg-[#444544]">
                        <AdminSideBar/>
                    </div>
                    <div className="flex basis-5/6 ">
                        <Routes>
                            <Route path="/admin/dashboard" Component={Dashboard}/>
                            <Route path="/admin/manageCustomers" Component={ManageCustomers}/>
                            <Route path="/admin/manageProducts" Component={ManageProducts}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}
