import style from './App.module.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Portfolio from "./Navbar/Portfolio";
import Contact from "./Navbar/Contact";
import Blog from "./Navbar/Blog";
import {Navbar} from "./Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className={style.all}>
                <div className={style.ava}>img</div>
                <div className={style.text}>text</div>
                <div className={style.navbar}><Navbar/></div>
                <div>
                    <Route path='/home'
                           render={() => <Home/>}/>
                    <Route path='/about'
                           render={() => <About/>}/>
                    <Route path='/portfolio'
                           render={() => <Portfolio/>}/>
                    <Route path='/contact'
                           render={() => <Contact/>}/>
                    <Route path='/blog'
                           render={() => <Blog/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
