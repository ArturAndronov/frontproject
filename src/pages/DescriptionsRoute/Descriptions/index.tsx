import React from "react";
import "./index.css";
import {  BrowserRouter,Route } from "react-router-dom";
import {NavLink} from "react-router-dom";
import DirectionsCard from "../../HomePage/components/DescriptionDirections/components/DirectionsCard";

const Description = (props:any) => {
    return (
        <div>
        <div className={"description-destination-link"}>
               <a href='/'>Главная<span>{'>'}</span></a>
               <a href='news'>Описание направлений и специальностей</a>
        </div>
        <div className={"destination"}>
                <div className={"description-destination-info-wrapper"}>
                    <div className={"description-destination-info-title"}>{props.title}</div>
                    <div className={"description-destination-info"}>
                        {props.info1}<br/>
                        <span>{props.infospan}</span><br/>
                        {props.info2}
                    </div>
                    <div className={"description-destination"}>
                    <span>Квалификация:</span> магистр.<br/>
                    <span>Срок обучения:</span> – очная 2 года; – заочная 2 года 3 месяца.<br/>
                    <span>Форма обучения:</span> очная, заочная.<br/>
                    <span>Язык обучения:</span> русский<br/>
                    <span>Перечень и форма вступительных испытаний:</span><br/>
                    Педагогическая информатика (экзамен), иностранный язык (тестирование в Рыбницком филиале ПГУ им.Т.Г. Шевченко).<br/>
                    <br/>
                    Обучение по данному направлению осуществляется на договорной основе.<br/>
                    Для успешного овладения навыками профессии необходимо: хорошее знание математики, родного языка, информатики, умения и навыки по практическому использованию информационных технологий, умение находить различные решения практических задач с помощью ИКТ.<br/>
                    Требования, предъявляемые профессией: целеустремленность, усидчивость, умение работать с учебной литературой, математические способности.<br/>
                    Сфера применения полученных знаний по профилю: образование, социальная сфера, культура.<br/>
                    </div>
                </div>
                <div className="description-destination-card-wrapper">     
                    <div className={"description-destination-cards"}>
                    <NavLink to="/des1"><DirectionsCard/></NavLink> 
                    <NavLink to="/des2"><DirectionsCard typeInfo={"grid"}/></NavLink>
                    <NavLink to="/des3"><DirectionsCard typeInfo={"grid"}/></NavLink>
                    <NavLink to="/des4"><DirectionsCard/></NavLink>
                    </div>
            </div>
            </div>
           
        </div>
    );
};

export default Description;
