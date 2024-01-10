import {Component} from "react";

export class AdminSideBar extends Component {
    render() {
        return (
            <div className="relative mt-10 mb-10 mx-auto">
                <button className="w-full px-2 bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white font-bold hover:scale-105">Dashboard</button>
                <button className="w-full bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white font-bold hover:scale-105">Customers</button>
                <button className="w-full bg-[#2cc1fc] mb-5 h-16 rounded-2xl text-white font-bold hover:scale-105">Products</button>
            </div>
        );
    }
}
