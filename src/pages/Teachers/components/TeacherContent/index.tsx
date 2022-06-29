import './index.css'
import { useEffect } from "react"
import React, { useState } from "react";
import axios from "axios"
import BurgerSVGsm from '../../../components/gloabal/UI/SVGComponents/BurgerSVGsm';
import BorderSVGsm from '../../../components/gloabal/UI/SVGComponents/BorderSVGsm';

interface TeacherMoreProps {
  firstName?: string,
  lastName?: string,
  secondName?: string,
  img?: string,
  status?: string,
  publications_count?: any,
  projects_count?: string,
  conferences_count?: string,
  diploma_projects_count?: string,
  education_level?: string,
  professional_interests?: string,
  dissertation_proof?: string,
  teacher_position?: Array<any>,
  regalias1?:string,
  roles?:string,
}

const TeacherContent = (props: TeacherMoreProps) => {
  const {
    firstName,
    lastName,
    secondName,
    // status,
    img,
    publications_count,
    projects_count,
    conferences_count,
    diploma_projects_count,
    education_level,
    professional_interests,
    dissertation_proof,
    teacher_position,
    regalias1,
    roles

  } = props

  const [users, setUsers]: any[] = useState([])

   function fetchTeacherContent() {
    return axios.get( `http://127.0.0.1:8000/api/teachers`)
    .then(res => {
      const persons = res.data;
      setUsers(persons);
    })
  }
  
  useEffect(() => {
  fetchTeacherContent();
  }, [setUsers]);
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index:any) => {
    setToggleState(index);
  };
  //   const regal = props.regalias.map((regalias:any) =>
  //   <li>{regalias.name}</li>
  // );


  return (

    <div>
      {/* <div className="preloader">
        <div className="preloader__row">
          <div className="preloader__item"></div>
          <div className="preloader__item"></div>
        </div>
      </div> */}




      <div className="teachers-wrapper">
        <div className='teachers-wrapper-title'>
          <div className="teachers-wrapper-image">
            <BurgerSVGsm className='teacher-burger-back' />
            <BorderSVGsm className='teacher-border-back' />
            <div className={'teachers-image-people'}>
              <img src={img} />
            </div>
          </div>
          <div className="teachers-wrapper-info-people">
            <div className={'teachers-info-people-lastName'}>{lastName}</div>
            <div className={'teachers-name-container'}>
              <div className={'teachers-info-people-name-firstName'}>{firstName}</div>
              <div className={'teachers-info-people-name-secondName'}>{secondName}</div>
            </div>
            <div className={'info-people-name-regalias'}>{roles}<br/>{regalias1}<br/>{teacher_position}</div>
          </div>
          {/* <div className={'info-people-status'}>{status}</div> */}
          <div className={'teachers-project-container'}>
            <div>{publications_count}<span>публикации</span></div>
            <div>{projects_count}<span>проекты</span></div>
            <div>{conferences_count}<span>конференции</span></div>
            <div>{diploma_projects_count}<span>дипломных проектов</span></div>
          </div>

        </div>

        <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          О преподавателе
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Консультации
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Расписание
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Темы ВКР
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Публикации
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Наукометрия
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className='teachers-more-info'>
              <div>Ученая степень и звание:<span>{regalias1}, {teacher_position}</span></div>
              <div>Вид образования:<span>{education_level}</span></div>
              <div>Образование:<span></span></div>
              <div>Подтверждающий документ:<span></span></div>
              <div>Защита диссертации:<span>{dissertation_proof}</span></div>
              <div>Преподаваемые дисциплины:<span></span></div>
            </div>
            <div className='teachers-interests'>
              <div className='teacher-interests-scientific'>Профессиональные и научные интересы:</div>
              <div className='teacher-interests-more'>{professional_interests}</div>
            </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2>Content 5</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <h2>Content 6</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
      </div>
    </div>

  );
};

export default TeacherContent;
