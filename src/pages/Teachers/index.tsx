import './index.css'
import { useEffect } from "react"
import React, { useState } from "react";
import axios from "axios"
import TeacherContent from './components/TeacherContent';


const Teachers = () => {
  const [users,setUsers]:any[] = useState([])

    useEffect (() => {
        axios.get(`http://127.0.0.1:8000/api/teachers`)
          .then(res => {
            const persons = res.data;
            console.log (persons)
            setUsers(persons);
          })
      },[])

  return (
    <div className={"teacher-wrapper"} >
            {/* <div className={"teacher-grid"}>
                {users.map((teacher:any, index:number) => (
                    <TeacherContent
                        firstName={teacher.user.name}
                        lastName={teacher.user.surname}
                        secondName={teacher.user.patronymic}
                        img={teacher.avatar_path}
                    />
                ))}
            </div> */}
            <TeacherContent />
    </div>
   
  );
};

export default Teachers;
