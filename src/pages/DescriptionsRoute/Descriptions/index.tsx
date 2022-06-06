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
                    <span>Квалификация:</span> {props.qualif}.<br/>
                    <span>Срок обучения:</span> {props.term}.<br/>
                    <span>Форма обучения:</span> {props.form}.<br/>
                    <span>Язык обучения:</span> русский<br/>
                    <span>Перечень и форма вступительных испытаний:</span><br/>
                    {props.introductory}<br/>
                    <br/>
                    {props.introductoryinf}
                    </div>
                </div>
                <div className="description-destination-card-wrapper">     
                    <div className={"description-destination-cards"}>
                    <NavLink to="/des1"><DirectionsCard term="2 года 4 месяца (заочно)" qualification="2.09.04.04 - МАГИСТРАТУРА" direction="Программная инженерия" profile="Разработка программно-информационных
систем"/></NavLink> 
               <NavLink to="/des2"><DirectionsCard typeInfo={"grid"} qualification="2.09.03.04 - БАКАЛАВРИАТ" direction="Программная инженерия" profile="Разработка программно-информационных
систем"/></NavLink>
               <NavLink to="/des3"><DirectionsCard typeInfo={"grid"} qualification="6.44.03.01 - БАКАЛАВРИАТ" direction="Педагогическое образование" profile="Информационные технологии в образовании"/></NavLink>
               <NavLink to="/des4"><DirectionsCard term="2 года 3 месяца (заочно) / 2 года (очно)" qualification="6.44.04.01 - МАГИСТРАТУРА" direction="Педагогическое образование" profile="Информационные технологии в образовании"/></NavLink>
                    </div>
            </div>
            </div>
           
        </div>
    );
};

export default Description;
