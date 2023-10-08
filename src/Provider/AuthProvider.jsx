import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true);

    // creating account
    const createUser = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // normal login
    const userLogin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const userLogout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // observe onAuthStateChanged
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log('observing current user', currentUser)
            setLoading(false)
        });
        
        return()=>{
            unSubscribe();
        }
    },[])


    const authInfo={createUser, userLogin, user, userLogout, loading};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;