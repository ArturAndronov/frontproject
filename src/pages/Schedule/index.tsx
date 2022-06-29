import './index.css'
import { useEffect } from "react"
import React, { useState } from "react";
import axios from "axios"
import {Oval} from "react-loader-spinner";
import ScheduleContent from './components/ScheduleContent';

const getSchedule = async () => {
  let form = new FormData()
            form.append('filter_string', JSON.stringify({deleted:false}))

  return await axios.post(`http://127.0.0.1:8000/api/schedules/filter`, form )
}



const Schedule = () => {
  const [users,setUsers]:any[] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    setIsLoading(true)
    getSchedule().then(res => {
        const persons = res.data;
        console.log(persons)
        setUsers(persons);
        setIsLoading(false)
    })
}, [])
  

      const schedulecontent = users.map((schedule:any, index:number) => 
        <ScheduleContent
          groupname={schedule.group.name}
          day={schedule.day.name}
          subject={schedule.regularity[0]?.subject.name}
        />
    );

  return (
    
    <div className={"teacher-wrapper"} >
            <div className={"teacher-grid"}>
            {/* {isLoading && (
                    <div style={{
                        position: "fixed",
                        inset: 0,
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        background: 'white'
                    }}>
                        <Oval
                            ariaLabel="loading-indicator"
                            height={100}
                            width={100}
                            strokeWidth={5}
                            strokeWidthSecondary={1}
                            color="blue"
                            secondaryColor="white"
                        />
                    </div>
                )}
                {!isLoading && ( */}
               {schedulecontent}
                {/* )} */}
            </div>
    </div>
   
  );
};

export default Schedule;
