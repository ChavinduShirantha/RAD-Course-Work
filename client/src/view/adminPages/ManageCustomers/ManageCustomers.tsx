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
                        <div className="flex flex-wrap justify-center min-h-screen w-full mt-20">
                            <div className="w-8/12 p-10 m-auto bg-white rounded-xl shadow-[#000] shadow-2xl">
                                <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                                    Manage Customers
                                </h1>
                                <form className="mt-6">
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2 ">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                First Name
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Last Name
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
                                                Contact
                                            </label>
                                            <input type="tel"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Date Of Birth
                                            </label>
                                            <input
                                                type="date"
                                                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Address
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                NIC
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
                                                Country
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                User Name
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-white hover:text-green-700 hover:border-green-700 border-[2px]">
                                            Save Customer
                                        </button>
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-yellow-400 rounded-md hover:bg-white hover:text-yellow-400 hover:border-yellow-400 border-[2px]">
                                            Update Customer
                                        </button>
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-white hover:text-red-600 hover:border-red-600 border-[2px]">
                                            Delete Customer
                                        </button>
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc] hover:border-[#2cc1fc] border-[2px]">
                                            Get All Customers
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <table className="w-10/12 border mt-10 mb-10 border-gray-500">
                                <thead className="h-20 border border-gray-500">
                                <tr className="text-black text-center">
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">First Name</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Last Name</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Contact</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Date Of Birth</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Address</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">NIC</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Country</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Email</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">User Name</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Password</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-white text-center px-1 h-20 border border-gray-500">
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="p-5 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        );
    }
}
