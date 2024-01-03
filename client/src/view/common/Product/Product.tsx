import {Component} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any
}
interface ProductState {
    isActive: boolean
}


export class Product extends Component<ProductProps,ProductState> {
    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    render() {
        const {data} = this.props;
        const image = require('../../../images/products/' + data.image);
        const productState = require('../../../images/product-state/' + data.productState);
        return (
            <div
                className="ml-16 w-72 mr-2 mb-16 justify-center items-center rounded-2xl hover:shadow-[#2cc1fc] hover:shadow-2xl">
                <div>
                    <img className="h-16 absolute mt-[-6px]" src={productState} alt=""/>
                </div>
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
                            <small className="text-[16px]">{data.currency}</small></h3>
                    </div>
                </div>
                <div className=" justify-center">
                    {
                        this.state.isActive?<ModifyCart data={{product:data,isAdded:this.state.isActive}}/>:
                    <button
                        className="w-full h-10 p-[2.5px] bg-[#2cc1fc] text-white text-[14px] rounded-b-2xl" onClick={this.addToCartOnClick}>Add to Cart
                    </button>
                    }
                </div>
            </div>
        );
    }
    private addToCartOnClick = () => {
        this.setState({isActive: !this.state.isActive}, () => {
            console.log(this.state.isActive);
            // alert(this.state.isActive);
        })
    }
}