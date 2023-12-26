import {Component} from "react";

interface ProductProps {
    data: any
}

export class Product extends Component<ProductProps> {
    render() {
        const {data} = this.props;
        const image = require('../../../images/products/' + data.image);
        return (
            <div
                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                <div className="h-60 pt-4 bg-white rounded-t-2xl">
                    <img className="h-full mx-auto" src={image} alt=""/>
                </div>
                <div className="justify-center bg-[#4646469c] h-32">
                    <div>
                        <h3 className="text-white pt-2 font-bold text-center text-[16px] pl-2">{data.description}</h3>
                        <p className="uppercase text-[12px] text-center text-[#cfd4da] mt-4 mb-2">{data.name}</p>
                    </div>
                    <div className="ml-1 pb-2 p-[0.3px] pr-2">
                        <h3 className="text-[16px] font-bold text-center text-white pl-2">{data.price}
                            <small className="text-[10px] ml-1">{data.currency}</small></h3>
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
        );
    }
}