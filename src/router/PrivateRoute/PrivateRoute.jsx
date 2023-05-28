import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
       return <Spinner animation="border" />
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>


    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;



/* 
-----steps----
1. check user is logged in or not
2.if user is logged in, then allow them to visit the route
3.ellse redirect home pages



*/