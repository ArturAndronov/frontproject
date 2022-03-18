import React from "react";
import Routers from "./components/settings/Routers/Routers";
import './index.css'
import Header from "./components/gloabal/Header/Header";
import Footer from "./components/gloabal/Footer";
import Menu from "./components/gloabal/Menu/Menu";
import { BrowserRouter } from "react-router-dom";

const InitialApp = () => {

    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <Menu/>
                <Routers/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default InitialApp;
