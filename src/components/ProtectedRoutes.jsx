import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const cartItems = useSelector((state) => state.cart);
    return cartItems.length > 0 ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;

