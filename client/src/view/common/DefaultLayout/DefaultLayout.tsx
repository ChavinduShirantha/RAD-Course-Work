import {Component} from "react";
import {Footer} from "../Footer/Footer";
import {MainContent} from "../MainContent/MainContent";
import {Navbar} from "../Navbar/Navbar";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <MainContent/>
                <Footer/>
            </>
        );
    }
}
