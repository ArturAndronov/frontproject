import React from "react";
import "./index.css";
import TelegramSVG from "../UI/SVGComponents/TelegramSVG";
import VkontakteSVG from "../UI/SVGComponents/VkontakteSVG";
import FacebookSVG from "../UI/SVGComponents/FacebookSVG";
import ViberSVG from "../UI/SVGComponents/ViberSVG";
import TweeterSVG from "../UI/SVGComponents/TweeterSVG";

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"footer-menu"}>
                <a href="/">Главная</a>
                <a href="http://localhost:3000/#prep">Преподаватели</a>
                <a href="/news">Новости </a>
                <a href="/schedule">Расписание</a>
                <a href="/questions">Вопрос-ответ</a>
            </div>
            <div className={'footer-right-path'}>
                <div className={'footer-soc-seti-wrapper'}>
                    <TelegramSVG/>
                    <VkontakteSVG/>
                    <FacebookSVG/>
                    <ViberSVG/>
                    <TweeterSVG/>
                </div>
                <div className={'footer-right-path-info'}>г. Рыбница ул. Гагарина, 12</div>
                <div className={'footer-right-path-info'}>0 (555) 2-39-12</div>
            </div>
        </div>
    );
};

export default Footer;
