import React, { useState, useEffect } from 'react'
import firebaseApp from './Fire_base'

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(null);

    useEffect = (() => {
        firebaseApp.auth() = onAuthStateChanged(setcurrentUser)
    }, [])

    return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>

};