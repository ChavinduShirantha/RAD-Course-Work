import React from 'react';

const ProductTable = ({data}) => {
    return (
        <table className="w-10/12 border mt-16 mb-10 border-gray-500">
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
            {data.map((data) => (
                <tr key={data._id} className="text-black text-center px-1 h-20 border border-gray-500">
                    <td className="px-1 border border-gray-500">{data.id}</td>
                    <td className="p-5 border border-gray-500">{data.description}</td>
                    <td className="px-1 border border-gray-500">{data.name}</td>
                    <td className="px-1 border border-gray-500">{data.price}{data.currency}</td>
                    <td className="border border-gray-500 p-4"><img className="h-24 mx-auto rounded-lg"
                                                                     src={require("../../../images/products/" + data.image)}
                                                                     alt=""/></td>
                    <td className="border border-gray-500 "><img className="h-16 mx-auto rounded-lg"
                                                                     src={require("../../../images/product-state/" + data.productState)}
                                                                     alt=""/></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
        ;
};

export default ProductTable;
