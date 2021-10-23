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
                    text={"dsfsdfsdgfsdgdfgsdfgsdf"}
                    style={keyStyle.social}

                />
                <Project
                    title={"Todolist"}
                    text={"sfsdfsdfsdfsdfsdfsdfsdfs"}
                    style={keyStyle.todolist}
                />
                <Project
                    title={"Test tasks"}
                    text={"sfsdfsdfsdfsdfsdfsdfsdfs"}
                    style={keyStyle.test}
                    navLink={"https://iq-life.github.io/React-homework/#/"}
                />
            </div>
        </div>
    )
}

export default Portfolio