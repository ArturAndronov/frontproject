import React from "react";
import './index.css'
interface ScheduleMoreProps {
    groupname?: string,
    day?:string,
    subject?:string,
  }
const ScheduleContent = (props: ScheduleMoreProps) => {
    const {
        groupname,
        day,
        subject,
      } = props

    return (
        <div className={'schedule'}>
         
            {/* <button className="switch" onClick= { () =>{
                       var link = document.createElement('a');
                       link.setAttribute('href','../../assets/doc/zvonki.docx');
                       link.setAttribute('download','download');
                       link.click();
                        }}>Download</button> */}
            <div className="wrapper-table">
                <table>
                <tr>
                <th ></th><th ></th><th >{groupname}</th><th ></th>
                </tr>
                <tr>
                <th id="test">Дни недели:</th><th id="test">Номер пары</th><th id="test">Дисциплина / преподователь</th><th id="test">Номер аудитории</th>
                </tr>
                <tr>
                    <th >{day}</th><th >1</th><th >1</th><th >1</th>
                </tr>
                <tr>
                    <th ></th><th >2</th><th >2</th><th >2</th>
                </tr>
                <tr>
                    <th ></th><th >3</th><th >3</th><th >3</th>
                </tr>
                <tr>
                    <th ></th><th >4</th><th >4</th><th >4</th>
                </tr>
                <tr>
                    <th ></th><th >5</th><th >5</th><th >5</th>
                </tr>
                <tr>
                    <th >{day}</th><th >1</th><th >1</th><th >1</th>
                </tr>
                <tr>
                    <th ></th><th >2</th><th >2</th><th >2</th>
                </tr>
                <tr>
                    <th ></th><th >3</th><th >3</th><th >3</th>
                </tr>
                <tr>
                    <th ></th><th >4</th><th >4</th><th >4</th>
                </tr>
                <tr>
                    <th ></th><th >5</th><th >5</th><th >5</th>
                </tr>
                <tr>
                    <th >{day}</th><th >1</th><th >1</th><th >1</th>
                </tr>
                <tr>
                    <th ></th><th >2</th><th >2</th><th >2</th>
                </tr>
                <tr>
                    <th ></th><th >3</th><th >3</th><th >3</th>
                </tr>
                <tr>
                    <th ></th><th >4</th><th >4</th><th >4</th>
                </tr>
                <tr>
                    <th ></th><th >5</th><th >5</th><th >5</th>
                </tr>
                <tr>
                    <th >{day}</th><th >1</th><th >1</th><th >1</th>
                </tr>
                <tr>
                    <th ></th><th >2</th><th >2</th><th >2</th>
                </tr>
                <tr>
                    <th ></th><th >3</th><th >3</th><th >3</th>
                </tr>
                <tr>
                    <th ></th><th >4</th><th >4</th><th >4</th>
                </tr>
                <tr>
                    <th ></th><th >5</th><th >5</th><th >5</th>
                </tr>
                <tr>
                    <th >{day}</th><th >1</th><th >1</th><th >1</th>
                </tr>
                <tr>
                    <th ></th><th >2</th><th >2</th><th >2</th>
                </tr>
                <tr>
                    <th ></th><th >3</th><th >3</th><th >3</th>
                </tr>
                <tr>
                    <th ></th><th >4</th><th >4</th><th >4</th>
                </tr>
                <tr>
                    <th ></th><th >5</th><th >5</th><th >5</th>
                </tr>
                <tr>
                    <th >{day}</th><th >1</th><th >1</th><th >1</th>
                </tr>
                <tr>
                    <th ></th><th >2</th><th >2</th><th >2</th>
                </tr>
                <tr>
                    <th ></th><th >3</th><th >3</th><th >3</th>
                </tr>
                <tr>
                    <th ></th><th >4</th><th >4</th><th >4</th>
                </tr>
                <tr>
                    <th ></th><th >5</th><th >5</th><th >5</th>
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
        </div>
        
    );
};

export default ScheduleContent;
