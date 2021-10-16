import React from "react";
import s from "./Projects.module.css";
import SuperButton from "../../containerModels/SuperButton/SuperButton.js";

export const Project = (props) => {

    return(
        <div className={s.project}>
                <div className={s.imgProject} style={props.style}>
                    <SuperButton title={"посмотреть"}/>
                </div>
                <div className={s.projectText}>
                    <h3>{props.title}</h3>
                    <p>{props.text}detailed description of the project</p>
                </div>
        </div>
    )
}