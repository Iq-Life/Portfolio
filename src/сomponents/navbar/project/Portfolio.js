import React from "react";
import s from "./Projects.module.scss";
import container from "../../containerModels/Container.module.css"
import {Project} from "./Project";
import todo from "../../../assets/img/todolist.png"
import soc from "../../../assets/img/social.jpg"
import test from "../../../assets/img/test2.png"


function Portfolio() {
    const keyStyle = {
        social: {backgroundImage: `url(${soc})`},
        todolist: {backgroundImage: `url(${todo})`},
        test: {backgroundImage: `url(${test})`}
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
                    text={"Email: free@samuraijs.com"+" Password: free "}
                    style={keyStyle.social}
                    navLink={"https://Iq-Life.github.io/SocialNetwork#/login/"}
                />
                <Project
                    title={"Todolist"}
                    text={"Email: free@samuraijs.com"+" Password: free "}
                    style={keyStyle.todolist}
                    navLink={"https://Iq-Life.github.io/Todolist"}
                />
                <Project
                    title={"Test tasks"}
                    text={"Тестовые задачи"}
                    style={keyStyle.test}
                    navLink={"https://iq-life.github.io/React-homework/#/"}
                />
            </div>
        </div>
    )
}

export default Portfolio