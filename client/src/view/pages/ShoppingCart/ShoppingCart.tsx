import {Component} from "react";
import {CartItem} from "../../../model/CartItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

interface ShoppingCartProps {
    itemList: CartItem[];
}

interface ShoppingCartState {
    oid: string;
}

export class ShoppingCart extends Component<ShoppingCartProps,ShoppingCartState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            oid: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        let total = 0;

        return (
            <div className="flex justify-center items-start pt-10 pb-10 bg-[url(images/main_bg.jpg)] h-auto">
                <div className="bg-[#232323] w-full mx-16 justify-center pr-10 pl-10">
                    <div className="pb-2 pt-10 flex">
                        <label className="text-[20px] pt-3 text-white font-bold px-2 pr-5 uppercase">Order ID :</label>
                        <input type="text"
                               className="block w-1/6 px-4 py-2 mt-2 bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40" placeholder="ORD-0001"
                               name="oid" value={this.state.oid} onChange={this.handleMessageInputOnChange}
                        />
                    </div>

                    <table className="w-full border mt-10 border-gray-500">
                        <thead className="h-20 border border-gray-500">
                        <tr className="text-white text-center">
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Id</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Image</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Product Name
                            </th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Unit Price</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Qty</th>
                            {/*<th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Action</th>*/}
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.itemList.length === 0 ?
                                <tr>
                                    <td colSpan={6} className="h-36 px-1">
                                        <p className="text-center text-[30px] text-white font-bold">You Have No Items In
                                            Your Shopping
                                            Cart.</p>
                                    </td>
                                </tr>
                                : this.props.itemList.map((item) =>
                                    <tr className="text-white text-center px-1 h-20 border border-gray-500">
                                        <td className="px-1 border border-gray-500">{item.product.id}</td>
                                        <td className="p-5 border border-gray-500"><img className="h-24 mx-auto rounded-lg"
                                                                                        src={require("../../../images/products/" + item.product.image)}
                                                                                        alt=""/>
                                        </td>
                                        <td className="px-1 border border-gray-500">{item.product.description}</td>
                                        <td className="px-1 border border-gray-500">{item.product.price + item.product.currency}</td>
                                        <td className="px-1 border border-gray-500">{item.itemCount}</td>
                                        {/*<td className="px-1 hover:cursor-pointer hover:text-red-600 border border-gray-500">
                                            <FontAwesomeIcon
                                                icon={faX}/></td>*/}
                                        <td className="px-1 border
                                        border-gray-500">{(item.product.price * item.itemCount) + item.product.currency}</td>
                                        <td className="px-1 border border-gray-500 hidden">{total += item.product.price}</td>
                                    </tr>
                                )
                        }
                        </tbody>
                    </table>
                    <div>
                        <h1 className="float-left text-[20px] mt-10 font-bold px-1 uppercase text-white">Total : <span
                            className="text-[20px] mt-10 font-bold px-1 uppercase text-white">{total + ".00 LKR"}</span>
                        </h1>
                        <button className="float-right mt-10 mb-10 pl-6 pr-6 pt-2 pb-2 bg-[#2cc1fc] text-[16px]
                    font-bold text-white rounded uppercase border-[2px] border-[#2cc1fc]
                    hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px]
                    hover:border-[#2cc1fc] hover:scale-110 " onClick={this.onPurchaseBtnClick}>Purchase
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    handleMessageInputOnChange(event: { target: {value: any; name: any;} }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onPurchaseBtnClick = () => {
        try {
            this.api.post('/purchase/save', {
                oid: this.state.oid
            }).then((res: { data: any}) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any)=> {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

}
