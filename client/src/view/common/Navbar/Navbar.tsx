import {Component} from "react";
import logo from '../../../images/logo2.png'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <Link to="/">
                    <div className="flex">
                        <img className="h-16 ml-6 pt-1" src={logo}
                             alt=""/>
                        <h1 className="ml-2 mt-5 uppercase text-[18px] text-[#0af] font-bold">Techno computers</h1>
                    </div>
                </Link>

                <ul className="list-none flex mt-1">
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link>
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/contact"><FontAwesomeIcon icon={faContactBook} /> Contact Us</Link>
                    </li>
                    <li className="mr-8 text-[16px] mt-3 text-[#e6f0e6] hover:text-[#2cc1fc]">
                        <Link to="/placeorder"><FontAwesomeIcon icon={faShoppingCart} /> My Cart</Link>
                    </li>
                </ul>

                <div>
                    <button className="text-[14px] font-bold text-[#e6f0e6]
                                   bg-[#2cc1fc] pl-3 pr-3 h-10 mt-3
                                   hover:text-tertiary rounded mr-5">
                        <Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</Link>
                    </button>
                    <button className="text-[14px] font-bold text-[#e6f0e6]
                                   bg-[#36C64C] pl-3 pr-3 h-10 mt-3
                                   hover:text-tertiary rounded">
                        <Link to="/signup"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Link>
                    </button>
                </div>
            </div>
        );
    }

}