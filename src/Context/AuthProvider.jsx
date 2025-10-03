import React, {  useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,signOut  } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const  googleProvider = new GoogleAuthProvider();
    

    const createUser = (email, password) =>{

        setLoading(true);
        return createUserWithEmailAndPassword(auth,  email, password);
    };

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser);
          setLoading(false);
          console.log('user in the state change', currentUser)
        })
        return () =>{
            unSubscribe();
        }
    },[])



    const authInfo = {
     createUser,
     user,
     loading,
     signIn,
     logOut,
     googleSignIn,
    }

    return (
        <AuthContext value={authInfo}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;