import {Component} from "react";
import logo from '../../../images/logo.png'
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <Link to="/">
                    <div className="flex">
                        <img className="h-16 w-full ml-6 pt-1" src={logo}
                             alt=""/>
                    </div>
                </Link>

                <ul className="list-none flex mt-1">
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/placeorder">Place Orders</Link>
                    </li>
                </ul>

                <button className="text-[14px] font-bold text-[#e6f0e6]
                                   bg-[#2cc1fc] pl-3 pr-3 h-10 mt-3
                                   hover:text-tertiary rounded ">Sign In
                </button>
            </div>
        );
    }

}