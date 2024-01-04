import {Component} from "react";
import logo from '../../../images/logo2.png'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faWhatsapp, faTwitter, faInstagram, faGooglePlus} from '@fortawesome/free-brands-svg-icons'

export class Footer extends Component {
    render() {
        return (
            <div className="justify-center bg-[#232323]">
                <div className="p-2 bg-[#232323]
                                justify-center flex">

                    <div className="flex flex-row pl-16 pr-16 pt-6">
                        <div className="basis-4/12 mr-40 w-full">
                            <h1 className="text-[18px] font-bold text-[#0af] float-left">KNOW IT ALL FIRST!</h1>
                            <p className="text-[13px] text-white w-[60vh] float-left">Never Miss Anything From Techno
                                Computers By Signing Up
                                To Our Newsletter.</p>
                        </div>
                        <div className="basis-1/12">
                            <div
                                className="relative border-gray-500 justify-center w-0 h-16 mb-2 border border-t"></div>
                        </div>
                        <div className="flex pb-2 pl-10 basis-7/12 items-center">
                            <input type="email" placeholder="Enter your email"
                                   className="block w-11/12 px-5 py-2 bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"/>
                            <button type="button"
                                    className="ml-5 mr-14 pl-6 pr-6 pt-2 pb-2 bg-[#2cc1fc] text-[16px] font-bold text-white rounded uppercase border-[2px] border-[#2cc1fc] hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px] hover:border-[#2cc1fc] hover:scale-110">Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="ml-16 mr-16 flex items-center border-gray-500 justify-center w-11/12 mt-5 mb-5 border border-t"></div>
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