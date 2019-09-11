import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './layouts/Header';

import Home from './pages/Home';
import Tasks from './pages/Tasks';

export default function AppRouter() {
    return (
        <Router>
            <Header></Header>
            <Route path="/" exact component={Home} ></Route>
            <Route path="/tasks" component={Tasks} ></Route>
        </Router>
    )
}