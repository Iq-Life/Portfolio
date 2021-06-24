import React from "react";
import style from "./Home.module.css"
import photo from "../../../assets/img/ava1.jpg"

function Home() {
    return (
        <div className={style.container}>
            <div className={style.ava}></div>
            <div className={style.text}>
                <h3>HI THERE !</h3>
                <h1><span>I'M</span> PAVEL VAVILIN</h1>
                <p>I am a front-end developer from Russia, specializing in the development of the user interface,
                    that is, the external public part of the site in the browser.
                    I am passionate about making great software that will improve the lives of the people around me.</p>
            </div>
        </div>
    )
}

export default Home