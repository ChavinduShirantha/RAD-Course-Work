import {Component} from "react";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminFooter} from "../AdminFooter/AdminFooter";
import {ModifyCart} from "../../common/ModifyCart/ModifyCart";

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
                            <div className="h-auto p-10 flex flex-wrap">
                                <div
                                    className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                    <div className="h-60 pt-4 bg-white rounded-2xl">

                                    </div>

                                </div>
                                <div
                                    className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                    <div className="h-60 pt-4 bg-white rounded-2xl">

                                    </div>
                                </div>
                                <div
                                    className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                    <div className="h-60 pt-4 bg-white rounded-2xl">

                                    </div>
                                </div>
                                <div
                                    className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                    <div className="h-60 pt-4 bg-white rounded-2xl">

                                    </div>
                                </div>
                                <div
                                    className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                    <div className="h-60 pt-4 bg-white rounded-2xl">

                                    </div>
                                </div>
                                <div
                                    className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl drop-shadow-2xl
                                    hover:shadow-[#2cc1fc] hover:shadow-2xl">
                                    <div className="h-60 pt-4 bg-white rounded-2xl">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        );
    }
}
