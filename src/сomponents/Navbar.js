import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <ul className={s.nav} >
            <li className={s.li}>
                <NavLink to='/home' activeClassName={s.activeLink}>HOME</NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/about' activeClassName={s.activeLink}>ABOUT</NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/projects' activeClassName={s.activeLink}>PROJECTS</NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/contact' activeClassName={s.activeLink}>CONTACT</NavLink>
            </li>
            <li className={s.li}>
                <NavLink to='/blog' activeClassName={s.activeLink}>BLOG</NavLink>
            </li>
        </ul>
    )}
