import {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBorderAll, faUsers, faComputer} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export class AdminSideBar extends Component {
    render() {
        return (
            <div className="relative pt-10 pb-10 pl-2 pr-2 mx-auto">
                <Link to="/admin/dashboard">
                    <button className="w-full px-2 bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white
                                font-bold hover:scale-105"><FontAwesomeIcon icon={faBorderAll}/> Dashboard
                    </button>
                </Link>
                <Link to="/admin/manageCustomers">
                    <button className="w-full bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white
                                font-bold hover:scale-105"><FontAwesomeIcon icon={faUsers}/> Customers
                    </button>
                </Link>
                <Link to="/admin/manageProducts">
                    <button className="w-full bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white
                                font-bold hover:scale-105"><FontAwesomeIcon icon={faComputer}/> Products
                    </button>
                </Link>
            </div>
        );
    }
}
