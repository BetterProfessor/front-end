import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import { useForm } from 'react-hook-form';

const deleteReminder=(id, refreshReminderList)=>{
    axiosWithAuth()
        .delete(`/projects/reminders/${id}`)
        .then(res=>{
            console.log('Student Deleted')
            refreshReminderList()
        })
        .catch(err=>{
            console.log(err, "Failed to delete Student")
        })
}
const finalizeReminder=(id, refreshReminderList, reminder, toggleEdit, edit)=>{
    axiosWithAuth()
        .put(`/projects/reminders/${id}`, reminder)
        .then(res=>{
            console.log('Reminder Editted')
            toggleEdit(!edit)
            refreshReminderList()
        })
        .catch(err=>{
            console.log(err, "Failed to edit Reminder")
        })
}

const ReminderCard = ({reminder, refreshReminderList})=>{
    const [edit, toggleEdit]=useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => finalizeReminder(reminder.id, refreshReminderList, data, toggleEdit, edit);
    console.log(errors);
    return(
        edit===false?
        <div>
            <h2>{reminder.studentName} {reminder.dueDate} {reminder.dueTime} {reminder.reminder}</h2>
            <button onClick={()=>deleteReminder(reminder.id, refreshReminderList)}>Delete</button>
            <button onClick={()=>toggleEdit(!edit)}>Edit</button>
        </div>:
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Student Name" name="studentName" ref={register({required: true, max: 15, min: 2, maxLength: 300})} />
                <input type="datetime" placeholder="Due date" name="dueDate" ref={register({required: true, max: 30, min: 2, maxLength: 300})} />
                <input type="time" placeholder="Time Due" name="dueTime" ref={register({max: 20, min: 2})} />
                <textarea name="reminder" ref={register({max: 300, min: 2, maxLength: 300})} />
                <input type="submit" />
            </form>
            <button onClick={()=>toggleEdit(!edit)}>Cancel</button>
        </div>
    )
}

export default ReminderCard