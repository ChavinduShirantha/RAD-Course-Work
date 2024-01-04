import {Component} from "react";
import {CartItem} from "../../../model/CartItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'

interface ShoppingCartProps {
    itemList: CartItem[];
}

export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className="flex justify-center items-start pt-10 pb-10 bg-[url(images/main_bg.jpg)] h-auto">
                <div className="bg-[#232323] w-full mx-16 justify-center pr-10 pl-10">
                    <table className="w-full border mt-10 border-gray-500">
                        <thead className="h-20 border border-gray-500">
                        <tr className="text-white text-center">
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Id</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Product Name
                            </th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Unit Price</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Qty</th>
                            <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Action</th>
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
                                        <td className="px-1 border border-gray-500">{item.product.description}</td>
                                        <td className="px-1 border border-gray-500">{item.product.price + ' ' + item.product.currency}</td>
                                        <td className="px-1 border border-gray-500">{item.itemCount}</td>
                                        <td className="px-1 hover:cursor-pointer hover:text-red-600 border border-gray-500">
                                            <FontAwesomeIcon
                                                icon={faX}/></td>
                                        <td className="px-1 border border-gray-500">{(item.product.price * item.itemCount) + ' ' + item.product.currency}</td>
                                    </tr>
                                )
                        }
                        </tbody>
                    </table>
                    <button className="float-right mt-10 mb-10 pl-6 pr-6 pt-2 pb-2 bg-[#2cc1fc] text-[16px] font-bold text-white rounded uppercase border-[2px] border-[#2cc1fc] hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px] hover:border-[#2cc1fc]">Purchase</button>
                </div>
            </div>
        );
    }
}