import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
    isLoading: true,
    query: "",
};
let API = `https://jsonplaceholder.typicode.com/users`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {
        dispatch({ type: "RESET_LOADER" })
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_LEADS",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData(`${API}`);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
};

// Custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };