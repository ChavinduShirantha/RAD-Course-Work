import {Component} from "react";
import {AdminMainContent} from "../AdminMainContent/AdminMainContent";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminFooter} from "../AdminFooter/AdminFooter";

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
