import style from './Header.module.css';
import React from "react";
import {Navbar} from "./Navbar";

function Header() {
    return (
        <div className={style.header}>
       <Navbar />
        </div>
    )
}

export default Header;
