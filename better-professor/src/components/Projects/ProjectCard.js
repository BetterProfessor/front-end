import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import { useForm } from 'react-hook-form';

const deleteProject=(id, refreshProjectList)=>{
    axiosWithAuth()
        .delete(`/projects/${id}`)
        .then(res=>{
            console.log('Student Deleted')
            refreshProjectList()
        })
        .catch(err=>{
            console.log(err, "Failed to delete Student")
        })
}
const finalizeProject=(id, refreshProjectList, project, toggleEdit, edit)=>{
    axiosWithAuth()
        .put(`/projects/${id}`, project)
        .then(res=>{
            console.log('Project Editted')
            toggleEdit(!edit)
            refreshProjectList()
        })
        .catch(err=>{
            console.log(err, "Failed to edit Project")
        })
}

const ProjectCard = ({project, refreshProjectList})=>{
    const [edit, toggleEdit]=useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => finalizeProject(project.id, refreshProjectList, data, toggleEdit, edit);
    console.log(errors);
    return(
        edit===false?
        <div>
            <h2>{project.projectName} {project.projectType}</h2>
            <button onClick={()=>deleteProject(project.id, refreshProjectList)}>Delete</button>
            <button onClick={()=>toggleEdit(!edit)}>Edit</button>
        </div>:
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Project Name" name="projectName" ref={register({required: true, max: 15, min: 2, maxLength: 100})} />
                <input type="email" placeholder="Project Email" name="projectEmail" ref={register({required: true, max: 20, min: 2})} />
                <input type="submit" />
            </form>
            
            <button onClick={()=>toggleEdit(!edit)}>Cancel</button>
        </div>
    )
}

export default ProjectCard