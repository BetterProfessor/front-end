import React, { useState, useEffect, useContext } from 'react'
import { useForm } from "react-hook-form";
import StudentCard from "./StudentCard";
import {StudentsContext} from "../../contexts/AppContext"
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import axios from "axios"; //for David's axios call
import jwt from 'jsonwebtoken' //Needed to capture Username

const postNewStudent=(newStudent, refreshStudentList)=>{
    axiosWithAuth()
    .post('/students', newStudent)
    .then(res=>{
      console.log(res.data)
      refreshStudentList()
    })
    .catch(err=>{
      console.log(err, "Failed to post new student")
    })
  }
const Students = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    const secret = "keepitsecret,keepitsafe!";
    let user;
    jwt.verify(token, secret, (error, decodedToken) => {
        user = decodedToken;
    });
    const [students, setStudents] = useContext(StudentsContext)
    // const students = useContext(AppContext);
    // const setStudents = useContext(AppContext);

    const refreshStudentList = () =>{
        const token = JSON.parse(localStorage.getItem('token'));
        axios.get("https://better-prof.herokuapp.com/api/students", {
            headers: {
              Authorization: token,
            },
          })
            .then((res) => {
              console.log(res, 'STUDENT LIST GET');
              setStudents(res.data);
            })
            .catch(error=>{
              console.log(error)
            })
    }
    useEffect(() => {
        refreshStudentList()
    },[]);

    const submitStudent = (data) =>{
        postNewStudent({
          my_username: user.username,
          studentName: data.studentName,
          studentEmail: data.studentEmail
        }, refreshStudentList )
      };
    
    //For the Forms
    const { register, handleSubmit, errors } = useForm();
    console.log(errors);

    return(
        <div>
            <div className="background">
                <form className="form" onSubmit={handleSubmit(submitStudent)}>
                    <h2 style={{color: 'white'}}>Add Student</h2>
                    <input
                        className="forms"
                        type="text"
                        placeholder="Student Name"
                        name="studentName"
                        ref={register({ required: true, max: 15, min: 2, maxLength: 100 })}
                    />
                    <input
                        className="forms"
                        type="email"
                        placeholder="Student Email"
                        name="studentEmail"
                        ref={register({ required: true, max: 20, min: 2 })}
                    />

                    <input className="forms" type="submit" />
                </form>
            </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="studentList">
                {console.log(students)}
                {students.map((student, index) => (
                    <StudentCard student={student} refreshStudentList={refreshStudentList}/>
                ))}
            </div>
        </div>
      </div>
    )
}

export default Students;