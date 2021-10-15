import React from "react";
import s from "./Home.module.css"
import {Button} from "../../containerModels/Button";
import aboutMe from "../../../assets/img/next_icon_w.png"

function Home() {
    return (
        <div className={s.home}>
            <div className={s.colorBlock}/>
            <div className={s.block}>
                <div className={s.ava}/>
                <div className={s.text}>
                    <h1 className={s.h}>- I'M PAVEL VAVILIN.

                    </h1>
                    <span className={s.textSpan}>FRONT END DEVELOPER</span>
                    <p className={s.p}>I am a front-end developer from Russia, specializing in the development of the user interface,
                        that is, the external public part of the site in the browser.
                        I am passionate about making great software that will improve the lives of the people around
                        me.</p>
                    <Button text="more about me" icon={aboutMe}/>
                </div>
            </div>

        </div>
    )
}

export default Home