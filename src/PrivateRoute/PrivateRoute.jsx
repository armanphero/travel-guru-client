import React, { createContext, useContext } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../authProvider/authProvider';

export const NewsDetailsContext = createContext({});
const PrivateRoute = ({ children }) => {
    const newsData = useLoaderData();
    const { userData, isLoading } = useContext(AuthContext);
    console.log(userData);
    if (isLoading) {
        return <p>Loading....</p>
    }
    else if (!userData) {
        return <Navigate to='/login' replace></Navigate>
    }
    return (
        <>
            <NewsDetailsContext.Provider value={newsData}>
                {children}
            </NewsDetailsContext.Provider>
        </>
    );
};

export default PrivateRoute;