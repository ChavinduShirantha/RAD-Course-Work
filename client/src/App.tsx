import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";
import {SignUp} from "./view/pages/SignUp/SignUp";
import {Admin} from "./view/pages/Admin/Admin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*"
                       Component={DefaultLayout}>
                </Route>
                <Route path="/login"
                       Component={Login}>
                </Route>
                <Route path="/signup"
                       Component={SignUp}>
                </Route>
                <Route path="/admin"
                       Component={Admin}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
