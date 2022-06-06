import React from "react";
import DirectionsCard from "./components/DirectionsCard";
import "./index.css";
import {NavLink} from "react-router-dom";

const DescriptionDirections = () => {
    return (
        <div className={"description-directions"}>
            <div className={"description-directions-title"}>
                Опиание направлений и специальностей
            </div>
            <div className={"description-directions-cards"}>
               <NavLink to="/des1"><DirectionsCard term="2 года 4 месяца (заочно)" qualification="2.09.04.04 - МАГИСТРАТУРА" direction="Программная инженерия" profile="Разработка программно-информационных
систем"/></NavLink> 
               <NavLink to="/des2"><DirectionsCard typeInfo={"grid"} qualification="2.09.03.04 - БАКАЛАВРИАТ" direction="Программная инженерия" profile="Разработка программно-информационных
систем"/></NavLink>
               <NavLink to="/des3"><DirectionsCard typeInfo={"grid"} qualification="6.44.03.01 - БАКАЛАВРИАТ" direction="Педагогическое образование" profile="Информационные технологии в образовании"/></NavLink>
               <NavLink to="/des4"><DirectionsCard term="2 года 3 месяца (заочно) / 2 года (очно)" qualification="6.44.04.01 - МАГИСТРАТУРА" direction="Педагогическое образование" profile="Информационные технологии в образовании"/></NavLink>
            </div>
        </div>
    );
};

export default DescriptionDirections;
