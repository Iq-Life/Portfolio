import React from "react";
import s from './About.module.css';
import Skills from "./skills/Skills";

function About() {
    return <div className={s.all}>
        <div className={s.header}>
            <h1>ABOUT <span>ME</span></h1>
            <div className={s.title}>RESUME</div>
        </div>
        <div className={s.profInfo}>
            <div className={s.profInfoTitle}><h3>PERSONAL INFOS</h3>
                <div className={s.profInfoDiv}>
                    <div className={s.profInfoText}>
                        <ul>
                            <li><span className={s.liTitle}>First Name : </span>
                                <span className={s.liValue}> Pavel</span></li>
                            <li><span className={s.liTitle}>Last Name : </span>
                                <span className={s.liValue}>Vavilin</span></li>
                            <li><span className={s.liTitle}>Age : </span>
                                <span className={s.liValue}>28 Years</span></li>
                            <li><span className={s.liTitle}>Nationality : </span>
                                <span className={s.liValue}>Russian</span></li>
                            <li><span className={s.liTitle}>Freelance : </span>
                                <span className={s.liValue}>Available</span></li>
                        </ul>
                    </div>
                    <div className={s.profInfoText}>
                        <ul>
                            <li>
                                <span className={s.liTitle}>Address : </span>
                                <span className={s.liValue}>Russia, Penza</span></li>
                            <li>
                                <span className={s.liTitle}>Phone : </span>
                                <span className={s.liValue}>+7(952)191-29-88</span></li>
                            <li>
                                <span className={s.liTitle}>Email :  </span>
                                <span className={s.liValue}>iq23life@gmail.com</span></li>
                            <li>
                                <span className={s.liTitle}>Telegram : </span>
                                <span className={s.liValue}>IqLife</span></li>
                            <li>
                                <span className={s.liTitle}>languages : </span>
                                <span className={s.liValue}>Russian</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.profInfoBoxDiv}>
                <div className={s.profInfoBox}>
                    <div><h3>1 +</h3></div>
                    <div className={s.profInfoText}><p>YEARS OF EXPERIENCE</p></div>
                </div>
                <div className={s.profInfoBox}><h3>4 +</h3><p>COMPLETED
                    PROJECTS</p></div>
                <div className={s.profInfoBox}><h3>1 +</h3><p>HAPPY
                    CUSTOMERS</p></div>
            </div>
        </div>
        <span className={s.profInfoTitle}><h2>MY SKILLS</h2></span>
        <div className={s.skills}>
            <Skills title="JavaScript" description=" sad asd sdsadasdas dasd asd asdas das das"/>
            <Skills title="Css" description=" asdas ddfs sdf sdf asdas dasd sd asd asd "/>
            <Skills title="HTML" description=" dasd asd dasd asd asd asd asd asd asd asd asd"/>
            <Skills title="React" description=" dasd asd dasd asd asd asd asd asd asd asd asd"/>
            <Skills title="Redax" description=" dasd asd dasd asd asd asd asd asd asd asd asd"/>
            <Skills title="TypeScript" description=" dasd asd dasd asd asd asd asd asd asd asd asd"/>
        </div>
    </div>

}

export default About