import React from 'react';
import './App.css';
import {Navbar} from "./view/common/Navbar/Navbar";
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;