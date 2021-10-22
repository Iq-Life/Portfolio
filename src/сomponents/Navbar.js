import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import home from '../assets/img/home_icon_w.png';
import about from '../assets/img/about_me_icon_w.png';
import portfolio from '../assets/img/portfolio_icon_w.png';
import contact from '../assets/img/contat_icon_w.png';


export const Navbar = () => {
    return (
        <ul className={s.nav} >
            <li className={s.li}>
                <NavLink to='/home' className={s.Link} activeClassName={s.activeLink}>
                    <img src={home} alt={"home"}/>
                    <h3 className={s.title}>home</h3>
                </NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/about' className={s.Link} activeClassName={s.activeLink}>
                    <img src={about}  alt={"about"}/>
                    <h3 className={s.title}>about</h3>

                </NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/projects' className={s.Link} activeClassName={s.activeLink}>
                    <img src={portfolio} alt={"portfolio"}/>
                    <h3 className={s.title}>portfolio</h3>
                </NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/contact' className={s.Link } activeClassName={s.activeLink}>
                    <img src={contact} alt={"contact"}/>
                    <h3 className={s.title}>contact</h3>
                </NavLink>
            </li>

        </ul>
    )}
