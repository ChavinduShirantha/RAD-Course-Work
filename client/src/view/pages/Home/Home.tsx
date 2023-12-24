import {Component, SetStateAction} from "react";
import home_banner from "../../../images/home_banner.jpg";
import logo from "../../../images/logo.png";
import pc1 from "../../../images/pc1.jpg";

export class Home extends Component {
    render() {
        return (
            <div className="flex">
                <div
                    className="flex flex-wrap justify-center items-center mx-auto bg-[url(images/main_bg.jpg)] bg-no-repeat">
                    <div className="mb-5">
                        <img className="w-full" src={home_banner} alt=""/>
                    </div>
                    <div
                        className="w-72 h-96 mr-2 mb-2 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
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
                            <div className="ml-1 p-[0.3px] pr-2">
                                <h3 className="text-[16px] font-bold text-center text-white pl-2">122,200.00
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button className="w-full h-auto p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl">Add to
                                Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
