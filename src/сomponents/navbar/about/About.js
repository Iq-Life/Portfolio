import React from "react";
import s from './About.module.scss';
import container from '../../containerModels/Container.module.css';
import {Button} from "../../containerModels/Button";
import downloadCV from "../../../assets/img/download_icon_w.png"
import CV from "../../../assets/cv/CV-Vavilin-Pavel-React-Redux.pdf"

function About() {

    const liPersonalInfo = (firstPart, lastPart) => {
        return (
            <li><span className={s.liTitle}>{firstPart} : </span>
                <span className={s.liValue}>{lastPart}</span></li>
        )
    }

    const skill = (title, text) => {
        return (
            <svg className={s.progressRing}>
                <div className={s.circle}>div*2</div>
            </svg>
        )
    }

    return (
        <div className={container.page}>
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
                            {liPersonalInfo("First Name", "Pavel")}
                            {liPersonalInfo("Last Name", "Vavilin")}
                            {liPersonalInfo("Age", "28")}
                            {liPersonalInfo("Nationality", "Russian")}
                            {liPersonalInfo("Freelance", "Available")}
                        </ul>
                    </div>
                    <div className={s.profInfoText}>
                        <ul>
                            {liPersonalInfo("Address", "Russia, Penza")}
                            {liPersonalInfo("Phone", "+7(952)191-29-88")}
                            {liPersonalInfo("Email", "iq23life@gmail.com")}
                            {liPersonalInfo("Telegram", "IqLife")}
                            {liPersonalInfo("languages", "Russian, English")}
                        </ul>
                    </div>
                </div>
                <a href={CV} download={CV} style={{borderRadius: "35px"}}>
                <Button text="Download CV" icon={downloadCV}/>
                </a>
            </div>
            <div className={s.titleSkill}>
                <h2><span className={s.titleSpan}>MY</span> SKILLS</h2>
            </div>
            <div className={s.blockSkills}>
                {skill("JavaScript", "dfsdfsdfs")}
                {skill("TypeScript", "dsfsdfsdfsdf")}
                {skill("HTML", "gdfhfghd")}
                {skill("CSS", "fgdfgd")}
                {skill("React", "sdfsdfsdfsdf")}
                {skill("Redux", "sdfsdfsdfsdf")}
            </div>
        </div>
    )
}

export default About