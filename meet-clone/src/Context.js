import { useState } from "react";
import { useContext, useEffect } from "react";
import { createContext } from "react";
import { auth } from "../lib/firebase"

const Context = createContext();

export const useAppContext = () => {
    return useContext(Context);
}

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [appState, setAppState] = useState(null);
    const [connecting, setConnecting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            setAppState("home");
            setCurrentUser(user);
            console.log(user);
          } else {
            setCurrentUser(null);
            setAppState("login");
          }
        });
      }, []);

    const value = {
        appState,
        currentUser,
        connecting,
        setConnecting,
        snackbarOpen,
        setSnackbarOpen,
      };

    return <Context.Provider value={value} > {children} </Context.Provider>;
}