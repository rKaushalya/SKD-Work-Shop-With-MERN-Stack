import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./view/page/LoginPage/LoginPage";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage}></Route>
          <Route path="/allbooking" Component={DefaultLayout}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
