import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./view/page/LoginPage/LoginPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
