import React, { useState, useEffect, useContext } from "react";

import {axiosWithAuth} from "../utils/axiosWithAuth";

import Students from "./Students/Students"
import Projects from "./Projects/Projects"
import Reminders from "./Reminders/Reminders"

import { useForm } from "react-hook-form";

import jwt from 'jsonwebtoken' //Needed to capture Username





const Dashboard = () => {
  
  
  //const {reminders, setReminders} = useContext(AppContext);
  const token = JSON.parse(localStorage.getItem('token'));
  const secret = "keepitsecret,keepitsafe!";
  let user;
  jwt.verify(token, secret, (error, decodedToken) => {
    user = decodedToken;
  });
  
  

  
  //submit handlers
  
  
  
  

  return (
    
    <div>
      <h1>Welcome, {user.username}</h1>
      <Students />
          {/*Project Forms and Render*/}
      <Projects />
      <Reminders />
      
    </div>
  );
};

export default Dashboard;
