import React from "react";
import s from "./Home.module.scss"
import container from "../../containerModels/Container.module.scss"
import {Button} from "../../containerModels/Button";
import aboutMe from "../../../assets/img/next_icon_w.png"
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <div className={container.page}>
            <div className={s.colorBlock}/>
            <div className={s.block}>
                <div className={s.ava}/>
                <div className={s.text}>
                    <h1 className={s.h}>- I'M PAVEL VAVILIN.</h1>
                    <span className={s.textSpan}>FRONT-END DEVELOPER</span>
                    <p className={s.p}>
                        Front-end developer with experience in creating websites and SPA,
                        as well as applications using React (JS/TS), Redux, HTML and CSS.
                        Now I am improving my skills in this direction, expanding them with new technologies.
                        I will definitely start studying Vue in the future.js and AngularJS.<p/>
                        I devote my free time to studying documentation
                        and learning algorithms, solving katas on
                        Codewars, as well as improving my English
                        proficiency.<p/>
                        After working as a freelancer, I would like to find a
                        full-time project job in a creative company with
                        relevant tasks and a cohesive team.
                    </p>
                    <NavLink to={"/about"}>
                        <Button text="more about me" icon={aboutMe}/>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Home