import React, { useState, useEffect, useContext } from 'react'
import { useForm } from "react-hook-form";
import ProjectCard from "../Projects/ProjectCard";
import {AppContext} from "../../AppContext"
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import jwt from 'jsonwebtoken' //Needed to capture Username

const postNewProject=(newProject, refreshProjectList)=>{
    axiosWithAuth()
    .post('/projects', newProject)
    .then(res=>{
      console.log(res.data)
      refreshProjectList()
    })
    .catch(err=>{
      console.log(err, "Failed to post new student")
    })
}

const Projects = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const secret = "keepitsecret,keepitsafe!";
    let user;
    jwt.verify(token, secret, (error, decodedToken) => {
        user = decodedToken;
    });
    
    const [projects, setProjects] = useState([]);

    const refreshProjectList=()=>{
        axiosWithAuth()
        .get("/projects")
        .then((res)=>{
          console.log(res);
          setProjects(res.data)
        })
        .catch(error=>{
          console.log(error)
        })
    }

    useEffect(() => {
        refreshProjectList()
    },[]);

    const submitProjects = (data) =>{
        console.log(data)
        postNewProject({
          my_username: user.username,
          projectName: data.projectName,
          projectType: data.projectType
        }, refreshProjectList )
      };
    //For the forms
    const { register, handleSubmit, errors } = useForm();
    console.log(errors);
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit(submitProjects)}>
                <input type="text" placeholder="Project Name" name="projectName" ref={register({required: true, max: 15, min: 2, maxLength: 300})} />
                <input type="text" placeholder="Project Type" name="projectType" ref={register({required: true, max: 300, min: 2, maxLength: 300})} />
                <input type="submit" />
                </form>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="studentList">
                    {console.log(projects, 'PROJECTS')}
                    {projects.map((project, index) => (
                        <ProjectCard project={project} refreshProjectList={refreshProjectList} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects