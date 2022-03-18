import React from "react";
import './index.css'
const Schedule = () => {

    return (
        <div className={'schedule'}>
            <div className={"schedule-link"}>
               <a href='/'>Главная<span>{'>'}</span></a>
               <a href='/schedule'>Расписание</a>
            </div>
            <div className={"schedule-download"}>
                <p><a href="../../assets/doc/zvonki.docx" download="zvonki.docx">Download</a></p>
                <p><a href="../../assets/doc/zvonki.docx">Download</a></p>
            </div>
            <button className="switch" onClick= { () =>{
                       var link = document.createElement('a');
                       link.setAttribute('href','../../assets/doc/zvonki.docx');
                       link.setAttribute('download','download');
                       link.click();
                        }}>Download</button>
        </div>
        
    );
};

export default Schedule;
