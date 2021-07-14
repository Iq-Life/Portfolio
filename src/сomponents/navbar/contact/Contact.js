import React from "react";
import container from "../../containerModels/Container.module.css";
import S from "./Contact.module.css";
import s from "../about/About.module.css";

function Contact () {
    return (
        <div className={container.page}>
            <div className={container.title}>
                <h1>GET IN <span>TOUCH</span></h1>
                <div className={container.backTitle}>CONTACT</div>
            </div>
            <div>
                <div>
                    <h3>DON'T BE SHY</h3>
                    <p>Feel free to get in touch with me.
                        I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </p>
                    <p><span className={s.liTitle}>MAIL ME </span>
                        <span className={s.liValue}>iq23life@gmail.com</span></p>
                    <p><span className={s.liTitle}>CALL ME </span>
                        <span className={s.liValue}>+7 952 191 29 88</span></p>
                    <ul>
                        <li>F</li>
                        <li>T</li>
                        <li>E</li>
                        <li>R</li></ul>
                </div>
                <div>
                    <div><input type="text" name="name" placeholder="YOUR NAME"/></div>
                    <div><input type="email" name="email" placeholder="YOUR EMAIL"/></div>
                    <div><input type="text" name="subject" placeholder="YOUR SUBJECT"/></div>
                    <div><textarea name="message" placeholder="YOUR MESSAGE"/>
                    <button></button></div>
                    <div className={s.div}><span></span></div>
                </div>
            </div>
        </div>
    )
}

export default Contact