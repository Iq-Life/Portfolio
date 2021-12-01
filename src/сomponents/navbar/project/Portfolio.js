import React from "react";
import s from "./Projects.module.scss";
import container from "../../containerModels/Container.module.css"
import {Project} from "./Project";
import todo from "../../../assets/img/todolist.jpeg"
import soc from "../../../assets/img/social.jpg"
import test from "../../../assets/img/test2.png"
import teachJour from "../../../assets/img/teachersJournal.jpg"


function Portfolio() {
    const photosProject = {
        social: {backgroundImage: `url(${soc})`},
        todolist: {backgroundImage: `url(${todo})`},
        test: {backgroundImage: `url(${test})`},
        teachersJournal: {backgroundImage: `url(${teachJour})`}
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
                    text={'Для входа используйте :\nEmail: free@samuraijs.com\nPassword: free\n'+
                    'This application is written in TS based on the OOP principle. It is written in class components' +
                    ' using the Redux, Redux-thunk, React-router-dom libraries. Communication with the server was used' +
                    ' through the REST API and the axios library.'}
                    style={photosProject.social}
                    navLink={"https://Iq-Life.github.io/SocialNetwork#/login/"}
                />
                <Project
                    title={"Todolist"}
                    text={'Для входа используйте :\nEmail: free@samuraijs.com\nPassword: free\n'+
                    'This application is written in TS, in which I used the TDD principle and used a storybook.'+
                    'It is written in functional components using the Redux libraries, Redux Toolkit, Redux-thunk,'+
                    'React-router-dom. Communication with the server was used through the REST API and the axios library.' +
                    'For styling, I used the Material UI library'}
                    style={photosProject.todolist}
                    navLink={"https://Iq-Life.github.io/Todolist"}
                />
                <Project
                    title={"Teacher's journal"}
                    text={"This table of students, it helps to keep a convenient and strictly filled teacher's journal :book: visits and grades in\n" +
                    "the classroom. It will also easily help to calculate which of the students will receive an automatic credit by calculating according\n" +
                    "to the formula (average score > 4 and the share of missed classes for a disrespectful reason <=10%)\n"}
                    style={photosProject.teachersJournal}
                    navLink={"https://Iq-Life.github.io/Table/#/"}
                />
                <Project
                    title={"Test tasks"}
                    text={"Тестовые задачи"}
                    style={photosProject.test}
                    navLink={"https://iq-life.github.io/React-homework/#/"}
                />
            </div>
        </div>
    )
}

export default Portfolio