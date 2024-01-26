import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {LoginPage} from "./view/pages/Login/LoginPage";
import {Register} from "./view/pages/Register/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}></Route>
                <Route path="/login" Component={LoginPage}></Route>
                <Route path="/register" Component={Register}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
