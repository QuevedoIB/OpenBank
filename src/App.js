import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from 'routes';

import './App.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
            </Router>
        );
    }
}

export default App;
