import style from "./App.module.scss";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./сomponents/navbar/home/Home";
import About from "./сomponents/navbar/about/About";
import Portfolio from "./сomponents/navbar/project/Portfolio";
import Contact from "./сomponents/navbar/contact/Contact";
import {Navbar} from "./сomponents/Navbar";

const PATH = {
    Home: '/home',
    About: '/about',
    Projects: '/projects',
    Contact: '/contact',
}

function App() {
    return (
        <HashRouter>
            <div className={style.all}>
                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path={PATH.Home} render={() => <Home/>}/>
                    <Route path={PATH.About}
                           render={() => <About/>}/>
                    <Route path={PATH.Projects}
                           render={() => <Portfolio/>}/>
                    <Route path={PATH.Contact}
                           render={() => <Contact/>}/>
                </Switch>
                <Navbar/>
            </div>
        </HashRouter>
    );
}

export default App;
