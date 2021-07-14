import React from "react";
import style from "./Home.module.css"

function Home() {
    return (
        <div className={style.home}>
            <div className={style.colorBlock}></div>
            <div className={style.block}>
                <div className={style.ava}></div>
                <div className={style.text}>
                    <h1 className={style.h}>I'M PAVEL VAVILIN.

                    </h1>
                    <span>FRONT END DEVELOPER</span>
                    <p>I am a front-end developer from Russia, specializing in the development of the user interface,
                        that is, the external public part of the site in the browser.
                        I am passionate about making great software that will improve the lives of the people around
                        me.</p>
                    <button>about me</button>
                </div>
            </div>

        </div>
    )
}

export default Home