import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import App from './App';
import Home from './modules/Home';
import About from './modules/About';
import Contact from './modules/Contact';
ReactDOM.render((
    <Router history = {hashHistory}>
            <Route path = "/" component = {App}/>
            {/*<IndexRoute component = {App} />*/}
            <Route path = "home" component = {Home} />
            <Route path = "about" component = {About} />
            <Route path = "contact" component = {Contact} />
    </Router>

), document.getElementById('app'));