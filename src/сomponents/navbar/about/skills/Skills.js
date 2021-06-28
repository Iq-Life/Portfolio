import React from "react";
import s from './Skills.module.css';


export function Skills() {
    return <div className={s.all}>
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