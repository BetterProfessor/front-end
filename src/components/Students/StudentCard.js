import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import { useForm } from 'react-hook-form';

const deleteStudent=(id, refreshStudentList)=>{
    axiosWithAuth()
        .delete(`/students/${id}`)
        .then(res=>{
            console.log('Student Deleted')
            refreshStudentList()
        })
        .catch(err=>{
            console.log(err, "Failed to delete Student")
        })
}
const finalizeStudent=(id, refreshStudentList, student, toggleEdit, edit)=>{
    axiosWithAuth()
        .put(`/students/${id}`, student)
        .then(res=>{
            console.log('Student Editted')
            toggleEdit(!edit)
            refreshStudentList()
        })
        .catch(err=>{
            console.log(err, "Failed to edit Student")
        })
}

const StudentCard = ({student, refreshStudentList})=>{
    const [edit, toggleEdit]=useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => finalizeStudent(student.id, refreshStudentList, data, toggleEdit, edit);
    console.log(errors);
    return(
        edit===false?
        <div className="studentCard">
            <h2>{student.studentName} {student.studentEmail}</h2>
            <button onClick={()=>deleteStudent(student.id, refreshStudentList)}>Delete</button>
            <button onClick={()=>toggleEdit(!edit)}>Edit</button>
        </div>:
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Student Name" name="studentName" ref={register({required: true, max: 15, min: 2, maxLength: 100})} />
                <input type="email" placeholder="Student Email" name="studentEmail" ref={register({required: true, max: 20, min: 2})} />
                <input type="submit" />
            </form>
            
            <button onClick={()=>toggleEdit(!edit)}>Cancel</button>
        </div>
    )
}

export default StudentCard