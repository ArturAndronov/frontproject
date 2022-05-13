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
  regalias?: Array<any>,
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
    regalias,

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
          </div>
          {/* <div className={'info-people-status'}>{status}</div> */}
          <div className={'teachers-project-container'}>
            <div>{publications_count}<span>публикации</span></div>
            <div>{projects_count}<span>проекты</span></div>
            <div>{conferences_count}<span>конференции</span></div>
            <div>{diploma_projects_count}<span>дипломных проектов</span></div>
          </div>

        </div>

        <div className="tabs">

          <div className='first-content' id="content-1">
            <div className='teachers-more-info'>
              <div>Ученая степень и звание<span></span></div>
              <div>Вид образования<span>{education_level}</span></div>
              <div>Образование<span></span></div>
              <div>Подтверждающий документ<span></span></div>
              <div>Защита диссертации<span>{dissertation_proof}</span></div>
              <div>Преподаваемые дисциплины<span></span></div>
            </div>
            <div className='teachers-interests'>
              <div className='teacher-interests-scientific'>Профессиональные и научные интересы:</div>
              <div className='teacher-interests-more'>Разнообразный и богатый опыт укрепление и развитие структуры
                требуют от нас анализа модели развития. Повседневная практика показывает, что постоянный количественный рост
                и сфера нашей активности позволяет выполнять важные задания по разработке позиций, занимаемых участниками в
                отношении поставленных задач. Не следует, однако забывать, что начало повседневной работы по формированию позиции
                требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка,
                а также реализация намеченных плановых заданий позволяет оценить значение дальнейших направлений развития.
                Таким образом сложившаяся структура организации в значительной степени обуславливает создание новых предложений.
                Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют определения и уточнения новых предложений.
              </div>
              {/* <div className='teacher-interests-scientific'>{professional_interests}</div> */}
            </div>
          </div>

          <div className='second-content' id="content-2">
            Содержимое 2...
          </div>
          <div id="content-3">
            Содержимое 3...
          </div>
          <div id="content-4">
            Содержимое 4...
          </div>
          <div id="content-5">
            Содержимое 5...
          </div>
          <div id="content-6">
            Содержимое 6...
          </div>

          <div className="tabs__links">
            <a href="#content-1">О преподавателе</a>
            <a href="#content-2">Консультации </a>
            <a href="#content-3">Расписание</a>
            <a href="#content-4">Темы ВКР</a>
            <a href="#content-5">Публикации</a>
            <a href="#content-6">Наукометрия</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TeacherContent;
