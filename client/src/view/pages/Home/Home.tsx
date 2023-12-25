import {Component} from "react";
import home_banner1 from "../../../images/home_banner1.jpg";
import home_banner2 from "../../../images/home_banner2.jpg";
import home_banner3 from "../../../images/home_banner3.jpg";
import home_banner4 from "../../../images/home_banner4.jpg";
import home_banner5 from "../../../images/home_banner5.jpg";
import home_banner6 from "../../../images/home_banner6.jpg";
import pc1 from "../../../images/pc1.jpg";
import kb from "../../../images/keyboard.jpg";
import usb from "../../../images/usb_drive.jpg";
import mf1 from "../../../images/manufactor_logo_1.png";
import mf2 from "../../../images/manufactor_logo_2.png";
import mf3 from "../../../images/manufactor_logo_3.png";
import mf4 from "../../../images/manufactor_logo_4.png";
import mf5 from "../../../images/manufactor_logo_5.png";
import mf6 from "../../../images/manufactor_logo_6.png";
import mf7 from "../../../images/manufactor_logo_7.png";
import mf8 from "../../../images/manufactor_logo_8.png";
import mf9 from "../../../images/manufactor_logo_9.png";
import mf10 from "../../../images/manufactor_logo_10.png";
import mf11 from "../../../images/manufactor_logo_11.png";
import mf12 from "../../../images/manufactor_logo_12.png";
import mf13 from "../../../images/manufactor_logo_13.png";
import mf14 from "../../../images/manufactor_logo_14.png";
import mf15 from "../../../images/manufactor_logo_15.png";
import mf16 from "../../../images/manufactor_logo_16.png";
import mf17 from "../../../images/manufactor_logo_17.png";
import mf18 from "../../../images/manufactor_logo_18.png";


export class Home extends Component {
    render() {
        const images = [mf1, mf2, mf3, mf4, mf5, mf6, mf7, mf8, mf9, mf10, mf11, mf12, mf13, mf14, mf15, mf16, mf17, mf18];

        const home_banner = [home_banner1, home_banner2, home_banner3, home_banner4, home_banner5,home_banner6];

        return (
            <div className="flex">
                <div
                    className="flex flex-wrap justify-start items-center mx-auto bg-[url(images/main_bg.jpg)] bg-cover">
                    <div className="mb-16">
                        <div className="xl:container mx-auto">
                            <div className=" flex items-center  justify-center">
                                <div className="w-[600%] overflow-hidden relative">
                                    <div
                                        className="w-[600%] flex items-center home-banner-animate">
                                        {home_banner.map((i, index) => {
                                            return (
                                                <div className="flex justify-center items-start w-full">
                                                    <img key={index} src={i}/>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<img className="w-full" src={home_banner1} alt=""/>*/}
                    </div>
                    <div className="pl-16 pr-16 xl:container mx-auto mb-16">
                        <div className=" flex items-center  justify-center">
                            <div className="w-[500%] h-20 overflow-hidden relative">
                                <div
                                    className="w-[500%] flex items-center h-20 justify-around absolute left-0 gap-20 animate">
                                    {images.map((i, index) => {
                                        return (
                                            <div className="flex justify-center items-start w-[20rem]">
                                                <img key={index} src={i}/>
                                            </div>
                                        );
                                    })}
                                    {images.map((i, index) => {
                                        return (
                                            <div className="flex justify-center items-start w-[20rem]">
                                                <img key={index} src={i}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                        <div className="h-60 pt-4 bg-white rounded-t-2xl">
                            <img className="h-full mx-auto" src={pc1} alt=""/>
                        </div>
                        <div className="justify-center bg-[#4646469c]">
                            <div>
                                <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Intel Core
                                    I3-8GB-128GB+1TB 10th Gen PC</h3>
                                <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">-Brand new
                                    desktop-</p>
                            </div>
                            <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                <h3 className="text-[16px] font-bold text-center text-white pl-2">122,200.00
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button
                                className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add
                                to
                                Cart
                            </button>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                        <div className="h-60 pt-4 bg-white rounded-t-2xl">
                            <img className="h-full mx-auto" src={kb} alt=""/>
                        </div>
                        <div className="justify-center bg-[#4646469c]">
                            <div>
                                <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Intel Core
                                    I3-8GB-128GB+1TB 10th Gen PC</h3>
                                <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">-Brand new
                                    desktop-</p>
                            </div>
                            <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                <h3 className="text-[16px] font-bold text-center text-white pl-2">122,200.00
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button
                                className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add
                                to
                                Cart
                            </button>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                        <div className="h-60 pt-4 bg-white rounded-t-2xl">
                            <img className="h-full mx-auto" src={usb} alt=""/>
                        </div>
                        <div className="justify-center bg-[#4646469c]">
                            <div>
                                <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Intel Core
                                    I3-8GB-128GB+1TB 10th Gen PC</h3>
                                <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">-Brand new
                                    desktop-</p>
                            </div>
                            <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                <h3 className="text-[16px] font-bold text-center text-white pl-2">122,200.00
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button
                                className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add
                                to
                                Cart
                            </button>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                        <div className="h-60 pt-4 bg-white rounded-t-2xl">
                            <img className="h-full mx-auto" src={kb} alt=""/>
                        </div>
                        <div className="justify-center bg-[#4646469c]">
                            <div>
                                <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Intel Core
                                    I3-8GB-128GB+1TB 10th Gen PC</h3>
                                <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">-Brand new
                                    desktop-</p>
                            </div>
                            <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                <h3 className="text-[16px] font-bold text-center text-white pl-2">122,200.00
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button
                                className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add
                                to
                                Cart
                            </button>
                        </div>
                    </div>
                    <div
                        className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                        <div className="h-60 pt-4 bg-white rounded-t-2xl">
                            <img className="h-full mx-auto" src={pc1} alt=""/>
                        </div>
                        <div className="justify-center bg-[#4646469c]">
                            <div>
                                <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">Intel Core
                                    I3-8GB-128GB+1TB 10th Gen PC</h3>
                                <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">-Brand new
                                    desktop-</p>
                            </div>
                            <div className="ml-1 pb-2 p-[0.3px] pr-2">
                                <h3 className="text-[16px] font-bold text-center text-white pl-2">122,200.00
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button
                                className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add
                                to
                                Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
