import React, {useState} from "react";
import './index.css'
import images from "../../assets/image";
import Checkbox from "./checkbox/checkbox";
const Questions = () => {

    return (
        
        <div className={'questions'}>
            <div className={"questions-link"}>
                <a href='/'>Главная<span>{'>'}</span></a>
                <a href='/questions'>Вопрос-ответ</a>
            </div>
        
            <Checkbox/>
        </div>
            

    );
};

export default Questions;
