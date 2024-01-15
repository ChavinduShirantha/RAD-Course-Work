import {Component} from "react";
import axios from "axios";

interface SignUpProps {
    data: any;
}

interface SignUpState {
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
}

export class SignUp extends Component<SignUpProps, SignUpState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            firstName: '',
            lastName: '',
            contact: '',
            dateOfBirth: '',
            address: '',
            nic: '',
            country: '',
            email: '',
            userName: '',
            password: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen bg-[#444544] ">
                <div className="w-1/2 p-8 m-auto bg-white rounded-md shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Create Account
                    </h1>
                    <form className="mt-6">
                        <div className="flex flex-row gap-10 ">
                            <div className="mb-2 basis-1/2 ">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    User ID
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="userID"
                                />
                            </div>
                            <div className="mb-2 basis-1/2 ">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    First Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="firstName"
                                       value={this.state.firstName}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">

                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Contact
                                </label>
                                <input type="tel"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="contact"
                                       value={this.state.contact}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">

                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Date Of Birth
                                </label>
                                <input
                                    type="date"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="dateOfBirth"
                                    value={this.state.dateOfBirth}
                                    onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    NIC
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="nic"
                                    value={this.state.nic}
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
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="address"
                                       value={this.state.address}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Country
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="country"
                                       value={this.state.country}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">

                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    User Name
                                </label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 bg-white border rounded-md
                                       focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="userName"
                                       value={this.state.userName}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="flex justify-center ">

                            <div className="mb-2 basis-1/2">
                                <label
                                    className="block text-sm font-semibold text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md
                                    focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                className="w-52 font-bold px-4 py-2 uppercase tracking-wide text-white
                                transition-colors duration-200 transform bg-[#2cc1fc] rounded-md
                                hover:bg-white hover:text-black hover:border-black border-[1px]"
                                onClick={this.onCreateAccountBtnClick}>Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
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

    private onCreateAccountBtnClick = () => {
        try {
            this.api.post('/users/save', {
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
}
