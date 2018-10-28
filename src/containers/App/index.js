import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Todo from '../Todo';
import Login from '../Login';
import Registration from '../Registration';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Route path='/todo' component={Todo}/>
                <Route path='/login' component={Login}/>
                <Route path='/logup' component={Registration}/>
                <Redirect to="logup"/>
            </React.Fragment>
        );
    }
}

export default App;