import React from 'react';
import styled from "styled-components";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {

    const { currentUser } = useAuth();

    return (
        <>
            {currentUser ? <Outlet /> : <Navigate to="/login"/>}
        </>
    );
}

export default PrivateRoute;