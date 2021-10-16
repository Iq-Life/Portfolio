import React from "react";
import s from './Skills.module.css';


export function Skills(props) {
    return (
        <div className={s.skill}>
            <span className={s.icon}>img</span>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
    /*<div className={s.skill}>
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
    </div>*/
}