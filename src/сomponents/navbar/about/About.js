import React from "react";
import s from './About.module.css';
import container from '../../containerModels/Container.module.css';
import {Skills} from "./skills/Skills";

function About() {
    return (
        <div className={container.page}>
            <div className={s.block1}>
                <div className={container.title}>
                    <h1>ABOUT <span>ME</span></h1>
                    <div className={container.backTitle}>RESUME</div>
                </div>
                <div className={s.profInfo}>
                    <div className={s.profInfoTitle}>
                        <h2>PERSONAL INFOS</h2>
                    </div>
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
            </div>
            <div className={s.titleSkill}>
                <h2><span className={s.titleSpan}>MY</span> SKILLS</h2>
            </div>
            <div className={s.blockSkills}>
                <Skills title={"JavaScript"} text={"dfsdfsdfs"}/>
                <Skills title={"TypeScript"} text={"dsfsdfsdfsdf"}/>
                <Skills title={"HTML"} text={"gdfhfghd"}/>
                <Skills title={"CSS"} text={"fgdfgd"}/>
                <Skills title={"React"} text={"sdfsdfsdfsdf"}/>
            </div>

        </div>
    )
}

export default About