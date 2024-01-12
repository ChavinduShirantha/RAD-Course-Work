import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../images/logo2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import Clock from 'react-live-clock';

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
                <div className="flex text-[20px] font-bold text-[#e6f0e6] mt-3">
                    <label>Time :</label>
                    <Clock className="ml-2 mr-5" format={'HH:mm:ss'} ticking={true} timezone={'SriLanka'}/>
                    <label>Date :</label>
                    <Clock className="ml-2" format={'YYYY-MM-DD dddd'} ticking={true} timezone={'SriLanka'}/>
                </div>
                <div>
                    <label className="text-[24px] text-[#e6f0e6] pr-3"><FontAwesomeIcon
                        icon={faUser}/></label>
                    <label className="text-[18px] text-[#e6f0e6] pr-3">Admin</label>
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
