import React from "react";
import s from "./Container.module.css"


export function Button (props){

    return(
        <div>
            <a className={s.button}>
                <span className={s.buttonText}>{props.text}</span>
                <span className={s.buttonIcon}><img src={props.icon} alt={"icon"}/></span>
            </a>
        </div>
    )
}