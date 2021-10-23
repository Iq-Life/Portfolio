import React from "react";
import container from "../../containerModels/Container.module.css";
import s from "./Contact.module.css";
import {Button} from "../../containerModels/Button";
import paperPlane from "../../../assets/img/paper_plane_icon_w.png"

function Contact() {
    return (
        <div className={container.page}>
            <div className={container.title}>
                <h1>GET IN <span>TOUCH</span></h1>
                <div className={container.backTitle}>CONTACT</div>
            </div>
            <div className={s.allBlock}>
                <div className={s.block1}>
                    <div>
                        <h3>DON'T BE SHY !</h3>
                        <p className={s.p}>Feel free to get in touch with me. I am always open to discussing new
                            projects, creative ideas or opportunities to be part of your team.</p>
                        <p><span className={container.liTitle}>MAIL ME </span></p>
                        <p><span className={container.liValue}>iq23life@gmail.com</span></p>
                        <p><span className={container.liTitle}>CALL ME </span></p>
                        <p><span className={container.liValue}>+7 952 191 29 88</span></p>
                        <ul className={s.ulContact}>
                            <li>F</li>
                            <li>T</li>
                            <li>E</li>
                            <li>R</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={s.contactForm}>
                            <div><input className={s.input} type="text" name="name" placeholder="YOUR NAME"/></div>
                            <div><input className={s.input} type="email" name="email" placeholder="YOUR EMAIL"/></div>
                            <div><input className={s.input} type="text" name="subject" placeholder="YOUR SUBJECT"/>
                            </div>
                            <div className={s.divTextarea}><textarea
                                className={s.textarea} name="message" placeholder="YOUR MESSAGE"/>
                                <Button text="send message" icon={paperPlane}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact