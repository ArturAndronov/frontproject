import React from "react";
import './index.css'
import NewCardWithCard from "./components/NewCardWithCard";
import {news} from "./data";

const AllNews = () => {

    return (
        <div className={'news'}>
            <div className={"news-link"}>
               <a href='/'>Главная<span>{'>'}</span></a>
               <a href='news'>Новости</a>
            </div>
            <div className={"list-teachers-cars-wrapper"}>
                <NewCardWithCard data={news} />
            </div>
        </div>
        
    );
};

export default AllNews;
