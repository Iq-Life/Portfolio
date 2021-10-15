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
                <NavLink to='/home' activeClassName={s.activeLink}><img src={home} /></NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/about' activeClassName={s.activeLink}><img src={about} /></NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/projects' activeClassName={s.activeLink}><img src={portfolio} /></NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/contact' activeClassName={s.activeLink}><img src={contact} /></NavLink>
            </li>

        </ul>
    )}
