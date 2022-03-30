import React from "react";
import './index.css'
import images from "../../../../assets/image";


const Header = () => {

    return (
        <div className={'header-main-wrapper'}>
            <div className={'header-wrapper'}>
                <img src={images.logo} alt="logo"/>
                <div className={'header-menu'}>
                        <a href="/">Главная</a>
                        <a href="http://localhost:3000/#prep">Преподаватели</a>
                        <a href="/news">Новости</a>
                        <a href="/schedule">Расписание</a>
                        <a href="/questions">Вопрос-ответ</a>
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
                    <div className={'header-login'}><a href="http://127.0.0.1:8000/">Вход</a></div>
                </div>
            </div>
        </div>
    );
};


export default Header;
