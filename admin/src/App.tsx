import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./view/page/LoginPage/LoginPage";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Home} from "./view/page/Home/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage}></Route>
          <Route path="/allbooking" Component={DefaultLayout}></Route>
          <Route path="/home" Component={Home}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
