import React, { useState, useEffect, useContext } from 'react'
import { useForm } from "react-hook-form";
import ReminderCard from "../Reminders/ReminderCard";
import {RemindersContext} from "../../contexts/AppContext"
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import jwt from 'jsonwebtoken' //Needed to capture Username

const postNewReminder=(newReminder, refreshReminderList)=>{
    axiosWithAuth()
    .post('/reminders', newReminder)
    .then(res=>{
      console.log(res.data)
      refreshReminderList()
    })
    .catch(err=>{
      console.log(err, "Failed to post new student")
    })
}

const Reminders = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const secret = "keepitsecret,keepitsafe!";
    let user;
    jwt.verify(token, secret, (error, decodedToken) => {
        user = decodedToken;
    });
    const [reminders, setReminders] = useContext(RemindersContext)

    const refreshReminderList=()=>{
        axiosWithAuth()
        .get("/reminders")
        .then((res)=>{
          console.log(res);
          setReminders(res.data)
        })
        .catch(error=>{
          console.log(error)
        })
    }

    useEffect(() => {
        refreshReminderList()
    },[]);

    const submitReminders = (data) =>{
        console.log(data)
        postNewReminder({
          my_username: user.username,
          studentName: data.studentName,
          dueDate: data.dueDate,
          dueTime: data.dueTime,
          reminder: data.reminder
        }, refreshReminderList )
      };
    //For the forms
    const { register, handleSubmit, errors } = useForm();
    console.log(errors);
    return(
        <div>
            <h1>Reminders</h1>
            <div>
            <form onSubmit={handleSubmit(submitReminders)}>
                <input type="text" placeholder="Student Name" name="studentName" ref={register({required: true, max: 15, min: 2, maxLength: 300})} />
                <input type="datetime" placeholder="Due date" name="dueDate" ref={register({required: true, max: 30, min: 2, maxLength: 300})} />
                <input type="time" placeholder="Time Due" name="dueTime" ref={register({max: 20, min: 2})} />
                <textarea name="reminder" ref={register({max: 300, min: 2, maxLength: 300})} />
                <input type="submit" />
            </form>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="studentList">
                    {console.log(reminders, 'REMINDERS')}
                    {reminders.map((reminder, index) => (
                        <ReminderCard reminder={reminder} refreshReminderList={refreshReminderList} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reminders