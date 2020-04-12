import React, {useState} from 'react';


export const AuthContext = React.createContext({
    isAuth: false,
    initUserSession: () => {},
    userId: 0
});

const AuthContextProvider = props => {
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem('token') !== null 
    );
    const [userId, setUserId] = useState(
        localStorage.getItem("userId")
    );
    
    const initUserSession = ({userId, token}) => {
        localStorage.setItem("userId", userId);
        setUserId(userId);
        setToken(token);
    }

    const setToken = token => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{isAuth: isAuthenticated,initUserSession,userId}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;