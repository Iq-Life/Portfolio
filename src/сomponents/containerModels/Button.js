import React from "react";
import s from "./Button.module.scss"


export function Button(props) {

    return (
        <button className={s.button}>
            <span className={s.buttonText}>{props.text}</span>
            <span className={s.buttonIcon}><img src={props.icon} alt={"icon"}/></span>
        </button>
    )
}