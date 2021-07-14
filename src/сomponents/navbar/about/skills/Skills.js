import React from "react";
import s from './Skills.module.css';


export function Skills() {
    return <div className={s.all}>
        <div className={s.title}><h2><span>MY</span> SKILLS</h2></div>
        <div className={s.blockSkills}>
            <div className={s.skill}>
                <span className={s.icon}>img</span>
                <h3>JS</h3>
                <p>detailed description of the skill</p>
            </div>
            <div className={s.skill}>
                        <span className={s.icon}>img</span>
                        <h3>HTML</h3>
                        <p>detailed description of the skill</p>
                    </div>
            <div className={s.skill}>
                <span className={s.icon}>img</span>
                <h3>CSS</h3>
                <p>detailed description of the skill</p>
            </div>
            <div className={s.skill}>
                <span className={s.icon}>img</span>
                <h3>TS</h3>
                <p>detailed description of the skill</p>
            </div>
            <div className={s.skill}>
                <span className={s.icon}>img</span>
                <h3>Redux</h3>
                <p>detailed description of the skill</p>
            </div>
            <div className={s.skill}>
                <span className={s.icon}>img</span>
                <h3>React</h3>
                <p>detailed description of the skill</p>
            </div>
        </div>
    </div>

}