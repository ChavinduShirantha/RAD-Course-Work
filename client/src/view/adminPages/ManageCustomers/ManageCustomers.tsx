import {Component} from "react";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";
import {AdminFooter} from "../AdminFooter/AdminFooter";
import axios from "axios";
import {UsersTable} from "../UsersTable/UsersTable";
import {Link} from "react-router-dom";

interface ManageCustomersProps {
    data: any;
}

interface ManageCustomersState {
    userID: string;
    firstName: string;
    lastName: string;
    contact: string;
    dateOfBirth: string;
    address: string;
    nic: string;
    country: string;
    email: any;
    userName: string;
    password: string;
    data: [];
}

export class ManageCustomers extends Component<ManageCustomersProps, ManageCustomersState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            userID: '',
            firstName: '',
            lastName: '',
            contact: '',
            dateOfBirth: '',
            address: '',
            nic: '',
            country: '',
            email: '',
            userName: '',
            password: '',
            data: [],
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    componentDidMount() {
        this.fetchData().then(r => console.log("Data Fetch Completed!" + r));
    }

    fetchData = async () => {
        try {
            this.api.get('/users/all').then((res: { data: any }) => {
                const jsonData = res.data;
                this.setState({
                    data: jsonData
                });
            }).catch((error: any) => {
                console.error('Axios Error', error)
            })
        } catch (error) {
            console.log('Error Fetching Data ', error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
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
                                    <div className="flex justify-center">
                                        <div className="mb-2 w-1/2 ">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                User ID
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="userID"
                                                   value={this.state.userID}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <button
                                            className="w-1/6 font-bold mt-6 ml-2 text-[14px] h-12  uppercase
                                            tracking-wide text-white transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]">
                                            Search
                                        </button>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2 ">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                First Name
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="firstName"
                                                   value={this.state.firstName}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                                name="lastName"
                                                value={this.state.lastName}
                                                onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Contact
                                            </label>
                                            <input type="tel"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="contact"
                                                   value={this.state.contact}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Date Of Birth
                                            </label>
                                            <input
                                                type="date"
                                                className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                                name="dateOfBirth"
                                                value={this.state.dateOfBirth}
                                                onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Address
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="address"
                                                   value={this.state.address}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                NIC
                                            </label>
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                                name="nic"
                                                value={this.state.nic}
                                                onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Country
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="country"
                                                   value={this.state.country}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                User Name
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="userName"
                                                   value={this.state.userName}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200 transform
                                            bg-green-700 rounded-md hover:bg-white hover:text-green-700
                                            hover:border-green-700 border-[2px]" onClick={this.onSaveBtnClick}>
                                            Save Customer
                                        </button>
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200 transform
                                            bg-yellow-400 rounded-md hover:bg-white hover:text-yellow-400
                                            hover:border-yellow-400 border-[2px]">
                                            Update Customer
                                        </button>
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200 transform
                                            bg-red-600 rounded-md hover:bg-white hover:text-red-600
                                            hover:border-red-600 border-[2px]">
                                            Delete Customer
                                        </button>
                                        <button
                                            className="w-52 font-bold m-1 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]" onClick={this.onGetAllBtnClick}>
                                            <Link to="/admin/manageCustomers"> Get All Customers</Link>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <table className="w-10/12 border mt-16 mb-10 border-gray-500">
                                <thead className="h-20 border border-gray-500">
                                <tr className="text-black text-center">
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">User
                                        ID
                                    </th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">First
                                        Name
                                    </th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Last
                                        Name
                                    </th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Contact</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Date Of
                                        Birth
                                    </th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Address</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">NIC</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Country</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Email</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">User
                                        Name
                                    </th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Password</th>
                                </tr>
                                </thead>
                                <tbody id="tblUsers">

                                {/*<tr className="text-black text-center px-1 h-20 border border-gray-500">
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                </tr>*/}
                                {
                                    data.map((user: any) => (
                                        <UsersTable key={user.userID} data={user}/>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        );
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSaveBtnClick = () => {
        try {
            this.api.post('/users/save', {
                userID: this.state.userID,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                contact: this.state.contact,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                nic: this.state.nic,
                country: this.state.country,
                email: this.state.email,
                userName: this.state.userName,
                password: this.state.password
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private onGetAllBtnClick = () => {

    }

}
