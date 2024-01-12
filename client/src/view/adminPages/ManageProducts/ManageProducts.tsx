import {Component} from "react";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";
import {AdminFooter} from "../AdminFooter/AdminFooter";

export class ManageProducts extends Component {
    render() {
        return (
            <>
                <AdminNavbar/>
                <div className="flex flex-row mb-0">
                    <div className="flex basis-1/6 bg-[#444544]">
                        <AdminSideBar/>
                    </div>
                    <div className="flex basis-5/6 ">
                        <div className="flex flex-wrap justify-center  min-h-screen w-full mx-auto ">
                            <div className="w-8/12 p-10 m-auto bg-white rounded-xl shadow-[#000] shadow-2xl">
                                <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                                    Manage Products
                                </h1>
                                <form className="mt-6">
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2 ">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Product ID
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Name
                                            </label>
                                            <input type="tel"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Unit Price
                                            </label>
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Image
                                            </label>
                                            <input type="file"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Product State
                                            </label>
                                            <select className="block w-full px-4 py-3 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40" id="role_Type" name="role_Type">
                                                <option value="AVAILABLE">AVAILABLE</option>
                                                <option value="UNAVAILABLE">UNAVAILABLE</option>
                                                <option value="NEW_ARRIVAL">NEW_ARRIVAL</option>
                                                <option value="COMING_SOON">COMING_SOON</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-white hover:text-green-700 hover:border-green-700 border-[2px]">
                                            Save Product
                                        </button>
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-yellow-400 rounded-md hover:bg-white hover:text-yellow-400 hover:border-yellow-400 border-[2px]">
                                            Update Product
                                        </button>
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-white hover:text-red-600 hover:border-red-600 border-[2px]">
                                            Delete Product
                                        </button>
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc] hover:border-[#2cc1fc] border-[2px]">
                                            Get All Product
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        );
    }
}
