import React from "react";
import s from "./Projects.module.scss";
import SuperButton from "../../containerModels/button for project/SuperButton.js";

export const Project = (props) => {

    return (
        <div className={s.project}>
            <div className={s.imgProject} style={props.style}>
                <a href={props.navLink} target="blank"><SuperButton title={"смотреть"}/></a>
            </div>
            <div className={s.projectInfo}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}