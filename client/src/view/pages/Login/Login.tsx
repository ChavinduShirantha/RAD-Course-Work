import {Component} from "react";
import {Link} from "react-router-dom";

interface LoginProps {
    data: any;
}

interface LoginState {
    uname: string,
    password: string
}

export class Login extends Component<LoginProps, LoginState> {

    constructor(props: any) {
        super(props);
        this.state = {
            uname: '',
            password: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div className="flex flex-wrap justify-center min-h-screen bg-[#444544]">
                <div className="w-96 p-8 m-auto bg-white rounded-md shadow-[#000] shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                        Sign in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800">
                                User Name
                            </label>
                            <input type="text"
                                   className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc]
                                    focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                   name="uname"
                                   value={this.state.uname}
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#2cc1fc]
                                 focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <a href="#"
                           className="text-xs text-[#2cc1fc] hover:underline hover:font-bold">
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform
                                bg-[#2cc1fc] rounded-md hover:bg-white hover:text-black hover:border-black border-[1px]"
                                onClick={this.onLoginBtnClick}>
                                {
                                    this.state.uname === "admin" && this.state.password === "admin" ?
                                        <Link to="../admin">Login</Link>
                                         : <Link to="/">Login</Link>

                                }
                            </button>
                        </div>
                    </form>
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t"></div>


                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        Don't have an account? <br/> Sign up for a free account at our store. Registration is quick and
                        easy. It allows you to be able to order from our shop. To start shopping click register.
                    </p>

                    <button
                        className="mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-black hover:border-black border-[1px]">
                        <Link to="/signup">Create an Account</Link>
                    </button>
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

    private onLoginBtnClick = () => {
        if (this.state.uname === "" && this.state.password === "") {
            alert('Please Fill the fields and try again');
        } else if (this.state.uname === "admin" && this.state.password === "admin") {
            alert('Login Success');
        } else {
            alert('UserName Or Password Incorrect');
        }
    }
}
