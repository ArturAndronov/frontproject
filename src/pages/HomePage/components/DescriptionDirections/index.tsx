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
               <NavLink to="/des1"><DirectionsCard/></NavLink> 
               <NavLink to="/des2"><DirectionsCard typeInfo={"grid"}/></NavLink>
               <NavLink to="/des3"><DirectionsCard typeInfo={"grid"}/></NavLink>
               <NavLink to="/des4"><DirectionsCard/></NavLink>
            </div>
        </div>
    );
};

export default DescriptionDirections;
