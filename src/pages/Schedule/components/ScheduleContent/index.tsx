import React from "react";
import './index.css'
interface ScheduleMoreProps {
    groupname?: string,
  }
const ScheduleContent = (props: ScheduleMoreProps) => {
    const {
        groupname,
    
      } = props

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
            <table>
            <tr>
            <th ></th><th ></th><th >{groupname}</th><th ></th>
            </tr>
            <tr>
            <th id="test">Дни недели:</th><th id="test"># пары</th><th id="test">Дисциплина / преп.</th><th id="test"># ауд.</th>
            </tr>
            <tr>
                <th >Понедельник</th><th >1</th><th >1</th><th >1</th>
            </tr>
            <tr>
                <th >Вторник</th><th >2</th><th >2</th><th >2</th>
            </tr>
            <tr>
                <th >Среда</th><th >3</th><th >3</th><th >3</th>
            </tr>
            <tr>
                <th >Четверг</th><th >4</th><th >4</th><th >4</th>
            </tr>
            <tr>
                <th >Пятница</th><th >5</th><th >5</th><th >5</th>
            </tr>
            {/* <tr>
                <th>{day}</th>
            </tr>
            <tr>
                <th>{day}</th>
            </tr>
            <tr>
                <th>{day}</th>
            </tr>
            <tr>
                <th>{day}</th>
            </tr>
            <tr>
                <th>{day.name}</th>
            </tr> */}
            </table>
        </div>
        
    );
};

export default ScheduleContent;
