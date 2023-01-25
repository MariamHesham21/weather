import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {

    let location = useLocation();
    const token= localStorage.getItem("Islogged")

    if(!token) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
    console.log("token",token)
 return children

};

export default ProtectedRoute;