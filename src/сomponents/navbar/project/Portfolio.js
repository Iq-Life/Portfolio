import React from "react";
import s from "./Projects.module.css";
import container from "../../containerModels/Container.module.css"
import {Project} from "./Project";
import todo from "../../../assets/img/todolist.png"
import soc from "../../../assets/img/social.jpg"



function Portfolio() {
    const social = {
        backgroundImage: `url(${soc})`
    }
    const todolist = {
        backgroundImage: `url(${todo})`
    }
    return (
        <div className={container.page}>
            <div className={container.title}>
                <h1><span>MY</span> PROJECTS</h1>
                <div className={container.backTitle}>WORKS</div>
            </div>
            <div className={s.projectsBlock}>
                <Project
                    title={"Social Network"}
                    text={"dsfsdfsdgfsdgdfgsdfgsdf"}
                    style={social}
                />
                <Project
                    title={"Todolist"}
                    text={"sfsdfsdfsdfsdfsdfsdfsdfs"}
                    style={todolist}
                />

            </div>
        </div>
    )
}

export default Portfolio