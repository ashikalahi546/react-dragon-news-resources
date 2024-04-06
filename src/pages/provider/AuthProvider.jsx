import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./../../firebase/firebase.confiq";
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoding] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email,password) =>{
    setLoding(true)
    return signInWithEmailAndPassword(auth,email,password)

  }
  const logOut = ()=>{
    setLoding(true)
 return    signOut(auth)
  }

  useEffect(() => {
    const unsubcrube = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the state change ", currentUser);
      setUser(currentUser);
      setLoding(false)
    });
    return () => {
      unsubcrube();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
