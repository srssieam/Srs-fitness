import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // creating account
    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // normal login
    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const userLogout = ()=>{
        return signOut(auth)
    }

    // observe onAuthStateChanged
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log('observing current user', currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])


    const authInfo={createUser, userLogin, user, userLogout};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;