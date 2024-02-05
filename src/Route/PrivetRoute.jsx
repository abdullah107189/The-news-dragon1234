import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    if (user) {
        return children;
    }
    return <Navigate to={'/auth/login'} state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;