import style from './App.module.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Components/navbar/home/Home";
import About from "./Components/navbar/about/About";
import Portfolio from "./Components/navbar/Portfolio";
import Contact from "./Components/navbar/Contact";
import Blog from "./Components/navbar/Blog";
import Header from "./Components/Header";

function App() {
    return (
        <BrowserRouter>
            <div className={style.all}>

                <span className={style.display}>
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
                </span>
                <span className={style.header}>
                    <Header/>
                </span>
            </div>
        </BrowserRouter>
    );
}

export default App;
