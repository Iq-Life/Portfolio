import React from "react";
import s from "./Projects.module.css";

export const Project = (props) => {
    return(
        <div className={s.project}>
                <div className={s.imgProject}>
                    <a className={s.buttonProject}> Посмотреть </a>
                </div>
                <div className={s.projectText}>
                    <h3>{props.title}</h3>
                    <p>{props.text}detailed description of the project</p>
                </div>
        </div>
    )
}