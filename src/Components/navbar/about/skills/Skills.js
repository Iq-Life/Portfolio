import React from "react";
import s from './Skills.module.css';
import sContainer from '../../../Container.module.css'

function Skills(props) {
    return <div className={`${s.all}&${sContainer.container}`}>
<div className={s.icon}>icon</div>
        <h3 className={s.title}>{props.title}</h3>
        <span className={s.text}>{props.description}</span>
    </div>

}

export default Skills