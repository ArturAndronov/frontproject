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

      const teachercontent = users.map((teacher:any, index:number) => 
        <TeacherContent
            firstName={teacher.user.name}
            lastName={teacher.user.surname}
            secondName={teacher.user.patronymic}
            img={teacher.avatar_path}
            publications_count={teacher.publications_count}
            projects_count={teacher.projects_count}
            conferences_count={teacher.conferences_count}
            diploma_projects_count={teacher.diploma_projects_count}
            regalias={teacher.regalias}
            education_level={teacher.education_level.name}
            professional_interests={teacher.professional_interests}
            dissertation_proof={teacher.dissertation_proof}
        />
    );

  return (
    <div className={"teacher-wrapper"} >
            <div className={"teacher-grid"}>
               {teachercontent[0]}
            </div>
            {/* <TeacherContent /> */}
    </div>
   
  );
};

export default Teachers;
