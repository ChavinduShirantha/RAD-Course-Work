import {Component} from "react";
import about_banner from '../../../images/about_banner.jpg';
import main_bg from '../../../images/main_bg.jpg';

export class About extends Component {
    render() {
        return (
            <div className="flex">
                <div className="h-auto mx-auto">
                    <div>
                        <img className="w-full" src={about_banner} alt=""/>
                    </div>
                    <div className="pt-6 pl-10 pr-10 bg-[url(images/main_bg.jpg)] bg-no-repeat ">
                        <h2 className="text-4xl
                                   text-[#2cc1fc]
                                   decoration-2
                                   pb-3
                                   font-bold
                                   text-center">About Us</h2>
                        <p className="pt-6 pb-8 text-[15px] text-white">Inspired by truly loved customers and established in 2005 as Tulip
                            Computers. Well known in PC industry all over Sri Lanka with The best PCs and Accessories as
                            a
                            seller with unique customer care experience and well managed warranty claiming experience.
                            <br/>
                            <br/>
                            <br/>
                            Being a leader with the unique passion on PC and giving the best option for customers Tulip
                            Computers have the experiences of decades in Industry as Your trusted PC partner. With the
                            reliable and durable range of products as Tulip Computers, without any hesitation that we
                            can
                            avouch that you will not have any regret choosing us as your new and one and only dependent
                            in
                            PC industry.
                            <br/>
                            <br/>
                            <br/>
                            With the belief of “Customers is the King” we assure the best ever experience in Quality
                            products and the best Service. With well manner and experienced staff you will feel Tulip
                            Computers same as your best friend in life.
                            <br/>
                            <br/>
                            <br/>
                            As your premium partner in IT we believe that we need to adapt with the future world with
                            the
                            best possible ways with field of computers and we are here to make all your Dreams and
                            Requirements make true.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}