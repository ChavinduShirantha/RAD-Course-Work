import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../images/logo2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

export class AdminNavbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <Link to="/">
                    <div className="flex">
                        <img className="h-16 ml-6 pt-1 hover:scale-110" src={logo}
                             alt=""/>
                        <h1 className="ml-2 mt-5 uppercase text-[18px] text-[#0af] font-bold">Techno computers</h1>
                    </div>
                </Link>

                <div>
                    <button className="text-[14px] font-bold text-[#e6f0e6]
                                   bg-[#2cc1fc] pl-3 pr-3 h-10 mt-3
                                   hover:text-tertiary rounded mr-5 hover:scale-110">
                        <Link to="/"><FontAwesomeIcon icon={faSignOutAlt}/> Log Out</Link>
                    </button>
                </div>
            </div>
        );
    }
}
