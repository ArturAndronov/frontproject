import './index.css'
import { useEffect } from "react"
import React, { useState } from "react";
import axios from "axios"
import ScheduleContent from './components/ScheduleContent';


const Schedule = () => {
  const [users,setUsers]:any[] = useState([])

    useEffect (() => {
        axios.get(`http://127.0.0.1:8000/api/schedules`)
          .then(res => {
            const persons = res.data;
            console.log (persons)
            setUsers(persons);
          })
      },[])

      const schedulecontent = users.map((schedule:any, index:number) => 
        <ScheduleContent
          groupname={schedule.group.name}
        />
    );

  return (
    <div className={"teacher-wrapper"} >
            <div className={"teacher-grid"}>
               {schedulecontent[0]}
            </div>
            {/* <TeacherContent /> */}
    </div>
   
  );
};

export default Schedule;
