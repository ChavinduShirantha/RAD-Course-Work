import {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBorderAll, faUsers, faComputer} from "@fortawesome/free-solid-svg-icons";

export class AdminSideBar extends Component {
    render() {
        return (
            <div className="relative mt-10 mb-10 mx-auto">
                <button className="w-full px-2 bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white
                                font-bold hover:scale-105"><FontAwesomeIcon icon={faBorderAll}/> Dashboard
                </button>
                <button className="w-full bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white
                                font-bold hover:scale-105"><FontAwesomeIcon icon={faUsers}/> Customers
                </button>
                <button className="w-full bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white
                                font-bold hover:scale-105"><FontAwesomeIcon icon={faComputer}/> Products
                </button>
            </div>
        );
    }
}
