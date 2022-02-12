import React, { useState } from "react";
import images from "../../../../../../assets/image";
import './index.css'
import BurgerSVGsm from "../../../../../components/gloabal/UI/SVGComponents/BurgerSVGsm";
import BorderSVGsm from "../../../../../components/gloabal/UI/SVGComponents/BorderSVGsm";
import {useEffect} from "react"
import axios from "axios"

interface TeacherProps {
    item: {img:string, firstName:string, lastName:string, secondName:string, status:string}
}

const Teacher = (props:TeacherProps) => {

    const [users,setUsers]:any[] = useState([])
    const {
        img,
        firstName,
        lastName,
        secondName,
        status
    } = props.item

    
  useEffect (() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
      .then(res => {
        const persons = res.data.items;
        console.log (persons)
        setUsers(persons);
      })
  },[])
 return(
        <div>{users.map((user: any) => <div key={user}>{user.name}</div>)}</div>
 )
        // return (
        //     <div className="department-history-wrapper-people">
        //         <div className="department-history-wrapper-image-people">
        //             <BurgerSVGsm className={'burger-back'}/>
        //             <BorderSVGsm className={'border-back'}/>
        //             <div className={'department-history-image-people'}>
        //                 <img src={img} alt="images.tyagulska"/>
        //             </div>
        //         </div>
        //         <div className="department-history-wrapper-info-people">
        //             <div className={'info-people-lastName'}>{lastName}</div>
        //             <div className={'info-people-name-secondName'}>{firstName} {secondName}</div>
        //             <div className={'info-people-status'}>{status}</div>
        //         </div>
        //     </div>
        // )
}

export default Teacher