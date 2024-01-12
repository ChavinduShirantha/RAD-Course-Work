import {Component} from "react";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminMainContent} from "../AdminMainContent/AdminMainContent";
import {AdminFooter} from "../AdminFooter/AdminFooter";
import {AdminSideBar} from "../AdminSideBar/AdminSideBar";

export class AdminDefaultLayout extends Component {
    render() {
        return (
            <>
                <AdminNavbar/>
                <AdminMainContent/>
                <AdminFooter/>
            </>
        );
    }
}
