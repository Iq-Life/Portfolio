import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav >
            <div>
                <NavLink to='/home' activeClassName={s.activeLink}>HOME</NavLink>
            </div>
            <div>
                <NavLink to='/about' activeClassName={s.activeLink}>ABOUT</NavLink>
            </div>
            <div >
                <NavLink to='/portfolio' activeClassName={s.activeLink}>PORTFOLIO</NavLink>
            </div>
            <div>
                <NavLink to='/contact' activeClassName={s.activeLink}>CONTACT</NavLink>
            </div>
            <div>
                <NavLink to='/blog' activeClassName={s.activeLink}>BLOG</NavLink>
            </div>
        </nav>
    )}
