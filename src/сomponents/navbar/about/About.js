import React from "react";
import s from './About.module.scss';
import container from '../../containerModels/Container.module.scss';
import {Button} from "../../containerModels/Button";
import downloadCV from "../../../assets/img/download_icon_w.png"
import CV from "../../../assets/cv/CV-Vavilin-Pavel-React-Redux.pdf"
import {Skill} from "./skill/Skill";
import {Title} from "../../containerModels/Titel";

function About() {

    const liPersonalInfo = (firstPart, lastPart) => {
        return (
            <li><span className={s.liTitle}>{firstPart} : </span>
                <span className={s.liValue}>{lastPart}</span></li>
        )
    }


    return (
        <div className={container.page}>
            <Title firstTitle='about' secondTitle='me' backTitle='resume'/>
            <div className={s.profInfo}>
                <div>
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
                <Skill title="React" number={82}/>
                <Skill title="Redux" number={82}/>
                <Skill title="TypeScript" number={73}/>
                <Skill title="JavaScript" number={65}/>
                <Skill title="HTML" number={57}/>
                <Skill title="CSS" number={60}/>
                <Skill title="Storybook" number={68}/>
                <Skill title="Material UI" number={67}/>
                <Skill title="REST API" number={70}/>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default About