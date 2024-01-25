import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {LoginPage} from "./view/pages/Login/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}></Route>
                <Route path="/login" Component={LoginPage}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
