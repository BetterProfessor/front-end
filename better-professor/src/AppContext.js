import React, {useState, createContext} from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth'


export const AppContext=createContext();


export const AppProvider=props=>{
    const [students, setStudents]=useState([])
    const [projects, setProjects]=useState([])
    return(
        <AppContext.Provider value={[students, setStudents]}>
            {props.children}
        </AppContext.Provider>
    );
}