import style from './App.module.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./сomponents/navbar/home/Home";
import About from "./сomponents/navbar/about/About";
import Projects from "./сomponents/navbar/Project/Projects";
import Contact from "./сomponents/navbar/Contact";
import Blog from "./сomponents/navbar/Blog";
import {Navbar} from "./сomponents/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className={style.all}>

                <span className={style.display}>
                    <Route path='/home'
                           render={() => <Home/>}/>
                    <Route path='/about'
                           render={() => <About/>}/>
                    <Route path='/projects'
                           render={() => <Projects/>}/>
                    <Route path='/contact'
                           render={() => <Contact/>}/>
                    <Route path='/blog'
                           render={() => <Blog/>}/>
                </span>
                <span className={style.header}>
                    <Navbar />
                </span>
            </div>
        </BrowserRouter>
    );
}

export default App;
