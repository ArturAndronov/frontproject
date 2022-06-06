import "./index.css";
import images from "../../../../assets/image";
import Counter from "./components/Counter";
import {useEffect} from "react"
import React, {useState} from "react";
import axios from "axios"
let audio = new Audio("/ace.mp3")

// const getCounter = async () => {
//     return await axios.get(`http://127.0.0.1:8000/api/teachers`)
// }

let btn:any = document.querySelector('.first_block-about-department');
    btn?.addEventListener('onclick', function(){
       btn.classList.add('active')
    })
const clickfirstblock = () => {
    

}


const FirstBlock = () => {
    
    // const [users, setUsers]: any[] = useState([])
    // useEffect(() => {
    //     getCounter().then(res => {
    //         const persons = res.data;
    //         setUsers(persons);
    //     })
    // }, [])

    return (
        <div className={'first-block'}>
            <div className={"first-block-wrapper"}>
                <div className={"first-block-left-content"}>
                    <div className={"first-block-content-wrapper"}>
                        <div className='first_block-title'>Кафедра ИиПИ</div>
                        <div className='first_block-name'>Информатика и программная инженерия</div>
                        <div className='first_block-name_of_university'>Рыбницкий филиал ПГУ им. Т.Г.Шевченко</div>
                    </div>
                    <form action="https://www.youtube.com/watch?v=YxSTaFJ-HLg&t=11s">
                        <button className={"first_block-about-department"} >О кафедре</button>
                    </form>
                </div>
                <img src={images.firstBlockImg} alt="firstBlockImg" />
            </div>
            <div className={'first-block-counter-wrapper'}>
                <Counter label={"студентов"} countValue={298} />
                <Counter label={"выпускников"} countValue={787} />
                <Counter label={"публикации"} countValue={1894} />
                <Counter label={"проект"} countValue={371} />
            </div>
        </div>

    );
};

export default FirstBlock;
