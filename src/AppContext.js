import React, {useState, createContext} from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth'

export const AppContext=createContext();


export const AppProvider=props=>{
    const [state, setState]=useState()
    return(
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    );
}