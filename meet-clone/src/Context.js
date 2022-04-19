import { useContext } from "react";
import { createContext } from "react";

const Context = createContext();

export const useAppContext = () => {
    return useContext(Context);
}

export const ContextProvider = ({ children }) => {
    const value = {};

    return <Context.Provider value={value} > {children} </Context.Provider>;
}