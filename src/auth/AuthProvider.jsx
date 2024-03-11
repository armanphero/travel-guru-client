import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutUser = () => {
        return signOut(auth);
    }
    const authData = {
        createUser,
        loginUser,
        logoutUser,
        user,
        setUser
    }
    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            setUser(user);
            console.log(user);
        })
        return () => {
            unsubscribed();
        }
    }, [])
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;