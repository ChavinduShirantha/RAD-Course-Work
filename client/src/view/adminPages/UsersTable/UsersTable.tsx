import {Component} from "react";

interface UsersTableProps {
    data: any
}

export class UsersTable extends Component<UsersTableProps> {
    constructor(props: UsersTableProps) {
        super(props);
    }
    render() {
        const {data} = this.props;
        return (
            <tr className="text-black text-center px-1 h-20 border border-gray-500">
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
        );
    }
}
