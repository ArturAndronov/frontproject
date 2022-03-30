import './index.css'
import BurgerSVGsm from '../../../components/gloabal/UI/SVGComponents/BurgerSVGsm';
import BorderSVGsm from '../../../components/gloabal/UI/SVGComponents/BorderSVGsm';

interface TeacherMoreProps { 
  firstName?: string, 
  lastName?: string, 
  secondName?: string, 
  img?: string, 
  status?: string,
}

const TeacherContent = (props: TeacherMoreProps) => {
  const {
    firstName,
    lastName,
    secondName,
    // status,
    img,
    
} = props
  return (

    <div>
      <div className="teachers-wrapper">
        <div className='teachers-wrapper-title'>
          <div className="teachers-wrapper-image">
            <BurgerSVGsm className='teacher-burger-back' />
            <BorderSVGsm className='teacher-border-back' />
          </div>
          <div className='teachers-wrapper-name'>

          </div>
        </div>

        <div className="tabs">
          <div id="content-1">
            Содержимое 1...
          </div>
          <div id="content-2">
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
