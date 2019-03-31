import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, Icon, Header } from 'semantic-ui-react';

import Home from './pages/home'

import 'semantic-ui-css/semantic.min.css';
import "./css/style.css";

//=========================================================================

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
