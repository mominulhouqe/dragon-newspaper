import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

const createUser =(email, password)=> {
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);

}
const logOut = ()=>{
    return signOut(auth)
}
useEffect(()=>{
   const unsubscrib = onAuthStateChanged(auth, loggedUser =>{
        console.log('logeed in user authState change', loggedUser);
        setUser(loggedUser);
    })
    return() =>{
        unsubscrib();
    }
},[])


    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
   
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;