import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "./Home";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import Profile from "./Profile";

function Pages() {

    return (

        <Routes>
            <Route path="/" exact element={<LandingPage/>}/>
            <Route path="/login" exact element={<LandingPage/>}/>
            <Route path="/forgot-password" exact element={<ForgotPassword/>}/>


            <Route element={<PrivateRoute />}>

                <Route path="/home" exact element={<Home/>}/>
                <Route path="/profile" exact element={<Profile/>}/>


            </Route>

        </Routes>

    );
}

export default Pages;