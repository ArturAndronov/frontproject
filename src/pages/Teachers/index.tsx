import './index.css'
import NewCardWithCard from "./components/NewCardWithCard";
import {news} from "./data";
import {useEffect} from "react"
import React, { useState } from "react";
import axios from "axios"

const Teachers = () => {
    const [users,setUsers]:any[] = useState([])

    useEffect (() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
          .then(res => {
            const persons = res.data.items;
            console.log (persons)
            setUsers(persons);
          })
      },[])

    return (
        // <div className={"list-teachers-grid"}>
        //             <Router
        //                 key={`${index}-${teacher.id}`}
        //                 id={teacher.id}
        //             />
        //         ))}
        //     </div>
        // <div className={'news'}>
        //     <div className={"list-teachers-cars-wrapper"}>
        //         <NewCardWithCard data={news} />
        //     </div>
        // </div>
        <div>hello</div>
    );
};

export default Teachers;
