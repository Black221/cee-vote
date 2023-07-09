import {createContext, useState} from "react";

export const AppStateContext = createContext(undefined);


export const AppContextProvider = ({ children}) => {

    const [user, setUser] = useState("LHacSRT")
    const [screenSize, setScreenSize] = useState(0);
    const login = (log) => {

        localStorage.setItem('user', log.user)
        setUser(log.user)
    }

    return (
        <AppStateContext.Provider value={{
            user, login,
            screenSize, setScreenSize
        }}>
            {children}
        </AppStateContext.Provider>
    )
}
