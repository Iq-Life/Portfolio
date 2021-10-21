import React from "react";
import s from "./Home.module.scss"
import container from "../../containerModels/Container.module.css"
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
                    <span className={s.textSpan}>FRONT END DEVELOPER</span>
                    <p className={s.p}>
                        I am a front-end developer from Russia,
                        specializing in the development of the user interface,
                        that is, the external public part of the site in the browser.
                        I am passionate about making great software that will improve
                        the lives of the people around me.
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