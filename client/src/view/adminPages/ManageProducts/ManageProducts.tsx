import React, {Component} from "react";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";
import {AdminFooter} from "../AdminFooter/AdminFooter";
import axios from "axios";
import ProductTable from "../Tables/ProductTable";


interface ManageProductsProps {
    data: any;
}

interface ManageProductsState {
    id: string;
    description: string;
    name: string;
    price: string;
    currency: string;
    image: string;
    productState: string;
    data: [];
}


export class ManageProducts extends Component<ManageProductsProps, ManageProductsState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            id: '',
            description: '',
            name: '',
            price: '',
            currency: '',
            image: '',
            productState: '',
            data: [],
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    componentDidMount() {
        this.fetchData().then(r => console.log("Data Fetch Completed!" + r));
    }

    fetchData = async () => {
        try {
            this.api.get(`/products/all`).then((res: { data: any }) => {
                const jsonData = res.data;
                this.setState({
                    data: jsonData
                });
            }).catch((error: any) => {
                console.error('Axios Error', error)
            })
        } catch (error) {
            console.log('Error Fetching Data ', error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <>
                <AdminNavbar/>
                <div className="flex flex-row mb-0">
                    <div className="flex basis-1/6 bg-[#444544]">
                        <AdminSideBar/>
                    </div>
                    <div className="flex basis-5/6 ">
                        <div className="flex flex-wrap justify-center mt-20 min-h-screen w-full mx-auto ">
                            <div className="w-8/12 p-10 m-auto bg-white rounded-xl shadow-[#000] shadow-2xl">
                                <h1 className="text-3xl font-semibold text-center text-[#2cc1fc] uppercase">
                                    Manage Products
                                </h1>
                                <form className="mt-6">
                                    <div className="flex justify-center gap-10">
                                        <div className="mb-2 basis-1/2 ">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Product ID
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="id"
                                                   value={this.state.id}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <button
                                            className="w-1/6 font-bold mt-6 ml-2 text-[14px] h-12  uppercase
                                            tracking-wide text-white transition-colors duration-200 transform
                                            bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]" onClick={this.onSearchBtnClick}>
                                            Search
                                        </button>

                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                                name="description"
                                                value={this.state.description}
                                                onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Name
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="name"
                                                   value={this.state.name}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>

                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Unit Price
                                            </label>
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2  bg-white border
                                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                focus:outline-none focus:ring focus:ring-opacity-40"
                                                name="price"
                                                value={this.state.price}
                                                onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Currency
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="currency"
                                                   value={this.state.currency}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>

                                        {/*<select
                                                className="block w-full px-4 py-3 mt-2  bg-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring focus:ring-opacity-40"
                                                id="state_Type" name="state_Type"
                                                value={this.state.productState}
                                                onChange={this.handleMessageInputOnChange}>
                                                <option value="AVAILABLE">AVAILABLE</option>
                                                <option value="UNAVAILABLE">UNAVAILABLE</option>
                                                <option value="NEW_ARRIVAL">NEW_ARRIVAL</option>
                                                <option value="COMING_SOON">COMING_SOON</option>
                                            </select>*/}
                                    </div>
                                    <div className="flex flex-row gap-10">
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Image
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="image"
                                                   value={this.state.image}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                        <div className="mb-2 basis-1/2">
                                            <label
                                                className="block text-sm font-semibold text-gray-800">
                                                Product State
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-2 mt-2 bg-white border
                                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc]
                                                   focus:outline-none focus:ring focus:ring-opacity-40"
                                                   name="productState"
                                                   value={this.state.productState}
                                                   onChange={this.handleMessageInputOnChange}/>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200
                                            transform bg-green-700 rounded-md hover:bg-white hover:text-green-700
                                            hover:border-green-700 border-[2px]" onClick={this.onSaveBtnClick}>
                                            Save Product
                                        </button>
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200
                                            transform bg-yellow-400 rounded-md hover:bg-white hover:text-yellow-400
                                            hover:border-yellow-400 border-[2px]" onClick={this.onGetAllBtnClick}>
                                            Update Product
                                        </button>
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200
                                            transform bg-red-600 rounded-md hover:bg-white hover:text-red-600
                                            hover:border-red-600 border-[2px]" onClick={this.onDeleteBtnClick}>
                                            Delete Product
                                        </button>
                                        <button
                                            className="w-52 font-bold m-2 text-[14px] px-4 py-2 uppercase
                                            tracking-wide text-white transition-colors duration-200
                                            transform bg-[#2cc1fc] rounded-md hover:bg-white hover:text-[#2cc1fc]
                                            hover:border-[#2cc1fc] border-[2px]" onClick={this.onGetAllBtnClick}>
                                            Get All Products
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/*<table className="w-10/12 border mt-16 mb-10 border-gray-500">
                                <thead className="h-20 border border-gray-500">
                                <tr className="text-black text-center">
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Product
                                        ID
                                    </th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Description</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Name</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Unit
                                        Price
                                    </th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Image</th>
                                    <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Product
                                        State
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-white text-center px-1 h-20 border border-gray-500">
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="p-5 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                    <td className="px-1 border border-gray-500"></td>
                                </tr>
                                </tbody>
                            </table>*/}
                            <ProductTable data={data}/>
                        </div>
                    </div>
                </div>
                <AdminFooter/>
            </>
        )
            ;
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSaveBtnClick = () => {
        try {
            this.api.post('/products/save', {
                id: this.state.id,
                description: this.state.description,
                name: this.state.name,
                price: this.state.price,
                currency: this.state.currency,
                image: this.state.image + '.jpg',
                productState: this.state.productState + '.png'
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private onGetAllBtnClick = () => {
        this.fetchData().then(r => console.log("Data Fetch Completed!" + r));
    }

    private onDeleteBtnClick = (e: any) => {
        try {
            this.api.delete(`/products/delete/${this.state.id}`)
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    alert(jsonData);
                }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private onSearchBtnClick = () => {
        try {
            this.api.get(`/products/find/${this.state.id}`)
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    this.setState({
                        data: jsonData
                    });
                }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
}
