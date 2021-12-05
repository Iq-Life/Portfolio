import container from "./Title.module.scss";
import React from "react";

export const Title = ({firstTitle, secondTitle, backTitle}) => {

    return (
        <div className={container.title}>
            <h1>{firstTitle}<span>{secondTitle}</span></h1>
            <div className={container.backTitle}>{backTitle}</div>
        </div>
    )
}
