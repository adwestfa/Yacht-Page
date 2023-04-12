import React, {useState} from 'react'
import './App.css'

import {HashRouter, NavLink, Outlet, Route, Routes} from "react-router-dom";
import Omnie from "./components/Omnie";
import Races from "./components/Races";
import MainPage from "./components/MainPage";


const Layout = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

function App() {

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='Omnie' element={<Omnie/>}/>
                        <Route path="Rejsy" element={<Races/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </>
    );
}

export default App
