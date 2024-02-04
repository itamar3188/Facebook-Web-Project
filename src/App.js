import React, {useState} from "react";
import Login from "./Components/Login";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Register from "./Components/Register";

function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path= "/" element={<Login />} ></Route>
            <Route path= "/Register" element={<Register />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;