import {Component} from "react";
import logo from '../../../images/logo.png'
import {Link} from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex
                            justify-center">

                <p className="text-[11px] text-[#e6f0e6]
                              pr-2 pt-1 hover:text-[#2cc1fc]">
                    Copyright @ 2023 All Rights Reserved.</p>

                <Link to="/">
                    <div className="flex">
                        <img className="h-7 w-full top-0 ml-1"
                             src={logo} alt=""/>
                    </div>
                </Link>
            </div>
        );
    }
}