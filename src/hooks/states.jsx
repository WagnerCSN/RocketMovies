import { createContext, useContext, useState, useEffect } from "react";

export const UseStatesContext = createContext({});
    

function StatesProvider({children}){
    const [data, setData ]=  useState([])
    
 
        function fetchMovie2({movies}){
                setData({movies});
              
        }       

    return(
        <UseStatesContext.Provider value={{fetchMovie2, data}}>
            {children}
        </UseStatesContext.Provider>
    )
}

function useStates(){
    const context = useContext(UseStatesContext);

    return context;
}

export { StatesProvider, useStates }
