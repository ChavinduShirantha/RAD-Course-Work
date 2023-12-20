import {Component} from "react";
import logo from '../../../images/icon.png'
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <Link to="/">
                    <div className="flex">
                        <h1 className="text-1xl text-secondary">
                            Organic Shop</h1>
                        <img className="h-5 w-5 ml-1 pt-1" src={logo}
                             alt=""/>
                    </div>
                </Link>

                <ul className="list-none flex mt-1">
                    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <button className="text-[8px] text-[#e6f0e6]
                                   bg-green-400 pl-3 pr-3
                                   hover:text-tertiary"
                        onClick={this.onButtonClick}>
                    Sign In
                </button>
            </div>
        );
    }

    private onButtonClick = () => {
        alert("Button Clicked!")
    }
}