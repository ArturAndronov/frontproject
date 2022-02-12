import React from "react";
import './index.css'
import images from "../../../../assets/image";
import switchDarkTheme from "../../Layout.js";
import ld from "../../Layout.js";

const Header = () => {

    return (
        <div className={'header-main-wrapper'}>
            <div className={'header-wrapper'}>
                <img src={images.logo} alt="logo"/>
                <div className={'header-menu'}>
                    <div className={'active'}>Главная</div>
                    <div>Преподовалтели</div>
                    <div>Новости</div>
                    <div>Расписание</div>
                    <div>Вопрос-ответ</div>
                    <div className="switch-btn">
                        <button className="switch" onClick= { () =>{
                        window.localStorage.setItem('theme','white')
                        window.location.reload()
                        }}>🌕</button>
                        <button className="switch" onClick= { () =>{
                        window.localStorage.setItem('theme','dark')
                        window.location.reload()
                        }}>🌙</button>
                        <button className="switch" onClick= { () =>{
                        window.localStorage.setItem('fon','font')
                        window.location.reload()
                        }}>Увеличить шрифт</button>
                        <button className="switch" onClick= { () =>{
                        window.localStorage.setItem('fon','font1')
                        window.location.reload()
                        }}>Уменьшить шрифт</button>
                        {/* <button className="switch" onClick={() => {ld()}}>
                        Выкл/вкл тему по времени</button> */}
                    </div>
                    <div className={'header-login'}>Вход</div>
                </div>
            </div>
        </div>
    );
};


export default Header;
