import React from "react";
import s from './Projects.module.css';
import container from "../../containerModels/Container.module.css"
import {Project} from "./Project";

function Portfolio() {
    return (
        <div className={container.page}>
            <div className={container.title}>
                <h1><span>MY</span> PROJECTS</h1>
                <div className={container.backTitle}>WORKS</div>
            </div>
            <div className={s.projectsBlock}>
                <Project
                    title={"SocialNetwork"}
                    text={"dsfsdfsdgfsdgdfgsdfgsdf"}
                />
                <Project title={"Todolist"} text={"sfsdfsdfsdfsdfsdfsdfsdfs"}/>

            </div>
        </div>
    )
}

export default Portfolio