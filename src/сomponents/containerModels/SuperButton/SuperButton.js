import React from 'react'
import s from './SuperButton.module.css'

const SuperButton= (
    {
        red, className, title,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassNameButton = `${red ? s.red : s.button} ${className}`
    const finalClassNameSpanTop = red ? `${s.red_button_line_top} ${s.red_button_line}` : `${s.button_line_top} ${s.button_line}`
    const finalClassNameSpanRight = red ? `${s.red_button_line_right} ${s.red_button_line}` : `${s.button_line_right} ${s.button_line}`
    const finalClassNameSpanBottom = red ? `${s.red_button_line_bottom} ${s.red_button_line}` : `${s.button_line_bottom} ${s.button_line}`
    const finalClassNameSpanLeft = red ? `${s.red_button_line_left} ${s.red_button_line}` : `${s.button_line_left} ${s.button_line}`


    return (
        <a className={finalClassNameButton}
                {...restProps}
        >
            <span className={finalClassNameSpanTop}/>
            <span className={finalClassNameSpanRight}/>
            <span className={finalClassNameSpanBottom}/>
            <span className={finalClassNameSpanLeft}/>
            {title}
        </a>
    )
}

export default SuperButton
