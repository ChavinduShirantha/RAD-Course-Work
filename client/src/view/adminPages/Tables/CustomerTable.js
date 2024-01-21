// CustomerTable.js
import React from 'react';

const CustomerTable = ({ data }) => {
    return (
        <table className="w-10/12 border mt-16 mb-10 border-gray-500">
            <thead className="h-20 border border-gray-500">
            <tr className="text-black text-center">
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">User
                    ID
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">First
                    Name
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Last
                    Name
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Contact</th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Date Of
                    Birth
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Address</th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">NIC</th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Country</th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Email</th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">User
                    Name
                </th>
                <th className="text-[14px] font-bold px-1 uppercase border border-gray-500">Password</th>
            </tr>
            </thead>
            <tbody>
            {data.map((data) => (
                <tr key={data._id} className="text-black text-center px-1 h-20 border border-gray-500">
                    <td className="px-1 border border-gray-500">{data.userID}</td>
                    <td className="px-1 border border-gray-500">{data.firstName}</td>
                    <td className="px-1 border border-gray-500">{data.lastName}</td>
                    <td className="px-1 border border-gray-500">{data.contact}</td>
                    <td className="px-1 border border-gray-500">{data.dateOfBirth}</td>
                    <td className="px-1 border border-gray-500">{data.address}</td>
                    <td className="px-1 border border-gray-500">{data.nic}</td>
                    <td className="px-1 border border-gray-500">{data.country}</td>
                    <td className="px-1 border border-gray-500">{data.email}</td>
                    <td className="px-1 border border-gray-500">{data.userName}</td>
                    <td className="px-1 border border-gray-500">{data.password}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
        ;
};

export default CustomerTable;
