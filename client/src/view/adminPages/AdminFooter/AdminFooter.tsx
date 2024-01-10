import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../images/logo2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGooglePlus, faInstagram, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

export class AdminFooter extends Component {
    render() {
        return (
            <div className="justify-center bg-[#232323]">
                <div className="pl-16 pr-16 flex flex-row">
                    <div className="basis-1/4 pt-10">
                        <Link to="/">
                            <div className="flex flex-wrap">
                                <img className=" w-1/4 top-0 ml-1 hover:scale-125"
                                     src={logo} alt=""/>
                                <h1 className="ml-2 mt-6 uppercase text-[18px] text-[#0af] font-bold">Techno
                                    computers</h1>
                            </div>
                        </Link>
                        <h4 className="text-[14px] text-white pr-4 pt-3">Inspired by truly loved customers and
                            established in 2005 as Techno Computers. Well known in
                            PC industry all over Sri Lanka with The best PCs and Accessories..</h4>

                        <ul className="flex text-[#cbcbcb] pt-5 text-3xl">
                            <li className="mr-10 hover:text-[#0af] cursor-pointer hover:scale-150 "><FontAwesomeIcon
                                icon={faFacebookF}/>
                            </li>
                            <li className="mr-10 hover:text-[#0af] cursor-pointer hover:scale-150 "><FontAwesomeIcon
                                icon={faWhatsapp}/>
                            </li>
                            <li className="mr-10 hover:text-[#0af] cursor-pointer hover:scale-150 "><FontAwesomeIcon
                                icon={faTwitter}/>
                            </li>
                            <li className="mr-10 hover:text-[#0af] cursor-pointer hover:scale-150 "><FontAwesomeIcon
                                icon={faInstagram}/>
                            </li>
                            <li className="mr-10 hover:text-[#0af] cursor-pointer hover:scale-150 "><FontAwesomeIcon
                                icon={faGooglePlus}/></li>
                        </ul>

                    </div>
                    <div className="basis-1/4 pt-10">
                        <h4 className="pt-3 text-[16px] font-bold text-white uppercase">Head Office</h4>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faLocationDot}/> No.50, New
                            Road, Ambalangoda, Sri Lanka.</p>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faPhone}/> Call Us: +94 912
                            255 942</p>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faEnvelope}/> Email:
                            info@technocom.lk</p>
                    </div>
                    <div className="basis-1/4 pt-10">
                        <h4 className="pt-3 text-[16px] font-bold text-white uppercase">Galle Branch</h4>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faLocationDot}/> No.207C,
                            Wakwella
                            Road, Galle, Sri Lanka.</p>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faPhone}/> Call Us: +94 912
                            246 200</p>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faEnvelope}/> Email:
                            info@technocom.lk</p>
                    </div>
                    <div className="basis-1/4 pt-10">
                        <h4 className="pt-3 text-[16px] font-bold text-white uppercase">Matara Branch</h4>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faLocationDot}/> No.61A,
                            Anagarika
                            Dharmapala Mawatha, Matara, Sri
                            Lanka.</p>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faPhone}/> Call Us: +94 412
                            050 800</p>
                        <p className="pt-3 text-[15px] text-white"><FontAwesomeIcon icon={faEnvelope}/> Email:
                            info@technocom.lk</p>
                    </div>
                </div>
                <div className=" text-center justify-center mt-10 pl-0 bg-black pb-10 pt-6">
                    <div className="flex justify-center mb-2">
                        <p className="text-[11px] text-[#e6f0e6]
                                  pr-2 pt-4 hover:text-[#2cc1fc] mb-2">
                            Copyright @ 2023 All Rights Reserved.</p>
                        <Link to="/">
                            <div className="flex">
                                <img className="h-10 top-0 ml-1 mt-1 hover:scale-125"
                                     src={logo} alt=""/>
                                <h1 className="ml-5 mt-3 text-1xl text-[#0af] uppercase">
                                    Techno computers</h1>
                            </div>
                        </Link>
                    </div>
                    <p className="text-[11px] text-[#e6f0e6] text-center
                                  pr-2 pt-1 hover:text-[#2cc1fc]">
                        Designed By <span className="font-bold">Chavindu Shirantha</span>.</p>
                </div>

            </div>
        );
    }
}
