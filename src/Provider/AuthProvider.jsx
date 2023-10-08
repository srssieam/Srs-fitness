import { createContext } from "react";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo={createUser, userLogin};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;