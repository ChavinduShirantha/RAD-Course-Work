import {Component} from "react";

export class SignUp extends Component {
    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen bg-[#444544] ">
                <div className="w-11/12 p-8 m-auto bg-white rounded-md shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Create Account
                    </h1>
                    <form className="mt-6">
                        <div className="flex flex-wrap">
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    First Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Contact
                                </label>
                                <input type="tel"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Date Of Birth
                                </label>
                                <input
                                    type="date"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Address
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    NIC
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Country
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    User Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-2">
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
                                className="w-52 font-bold px-4 py-2 uppercase tracking-wide text-white transition-colors duration-200 transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-black hover:border-black border-[1px]">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}