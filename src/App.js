import style from './App.module.css';
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./сomponents/navbar/home/Home";
import About from "./сomponents/navbar/about/About";
import Projects from "./сomponents/navbar/Project/Projects";
import Contact from "./сomponents/navbar/contact/Contact";
import Blog from "./сomponents/navbar/Blog";
import {Navbar} from "./сomponents/Navbar";

const PATH = {
    Home: '/home',
    About: '/about',
    Projects: '/projects',
    Contact: '/contact',
    Blog: '/blog',
}

function App() {
    return (
        <HashRouter>
            <div className={style.all}>

                <span className={style.display}>
                    <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path={PATH.Home} render={() => <Home/>}/>
                    <Route path={PATH.About}
                           render={() => <About/>}/>
                    <Route path={PATH.Projects}
                           render={() => <Projects/>}/>
                    <Route path={PATH.Contact}
                           render={() => <Contact/>}/>
                    <Route path={PATH.Blog}
                           render={() => <Blog/>}/>
                        </Switch>
                </span>
                <span className={style.header}>
                    <Navbar/>
                </span>
            </div>
        </HashRouter>
    );
}

export default App;
