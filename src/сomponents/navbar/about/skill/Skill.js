import React, {useEffect, useState} from "react";
import s from "./Skill.module.scss";

export const Skill = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const idInterval = setInterval(() => {
            setCount(state => state + 1)
        }, 20)

        if (count === props.number) {
            clearInterval(idInterval)

            return
        }

        return () => clearInterval(idInterval)
    }, [count])

    return (
            <div className={s.skill}>
                <div className={s.outer}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="130%" height="160%">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63"/>
                                <stop offset="0%" stopColor="#673ab7"/>
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round"/>
                    </svg>
                    <div className={s.inner}>
                        <div className={s.number}>{count}%</div>
                    </div>
                </div>
                <div className={s.text}>{props.title}</div>
            </div>
    )
}