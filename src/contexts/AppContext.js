import React, {useState, createContext} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Projects from '../components/Projects/Projects';


export const StudentsContext=createContext();
export const ProjectsContext=createContext();
export const RemindersContext=createContext();



export const AppProvider=props=>{
    const [students, setStudents]=useState([])
    const [projects, setProjects]=useState([])
    const [reminders, setReminders]=useState([])
    return(
        <StudentsContext.Provider value={[students, setStudents]}>
        <ProjectsContext.Provider value={[projects, setProjects]}>
        <RemindersContext.Provider value={[reminders, setReminders]}>
                {props.children}
        </RemindersContext.Provider>
        </ProjectsContext.Provider>
        </StudentsContext.Provider>
    );
}