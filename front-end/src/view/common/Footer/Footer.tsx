import {Component} from "react";
import logo from '../../../images/icon.png'
import {Link} from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex
                            justify-center">

                <p className="text-[11px] text-[#e6f0e6]
                              pr-2 pt-1 hover:text-green-400">
                    Copyright @ 2023</p>

                <Link to="/">
                    <div className="flex">
                        <h1 className="text-1xl text-secondary">
                            Organic Shop</h1>
                        <img className="h-5 w-5 top-0 ml-1"
                             src={logo} alt=""/>
                    </div>
                </Link>
            </div>
        );
    }
}