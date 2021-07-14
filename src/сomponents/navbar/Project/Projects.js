import React from "react";
import s from './Projects.module.css';
import container from "../../containerModels/Container.module.css"

function Projects() {
    return (
        <div className={container.page}>
            <div className={container.title}>
                <h1><span>MY</span> PROJECTS</h1>
                <div className={container.backTitle}>WORKS</div>
            </div>
            <div className={s.projectsBlock}>
                <div className={s.project}>
                    <div className={s.imgProject}>
                        <a className={s.buttonProject}> Посмотреть </a>
                    </div>
                    <h3>SocialNetwork</h3>
                    <p>detailed description of the project</p>
                </div>
                <div className={s.project}>
                    <div className={s.imgProject}>
                        <a className={s.buttonProject}> Посмотреть </a>
                    </div>
                    <h3>Todolist</h3>
                    <p>detailed description of the project</p>
                </div>
            </div>
        </div>
    )
}

export default Projects