import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom";
import App from './introduce/App';
import Subject from './subject/AllSubject';
import Room from './room/Room';
import Account from './account/Account';
import Exercise from './exercise/Exercise';
import Help from './help/Help';
import Login from './account/Login';
import Register from './account/Register';
import Home from './home/container-home';


class RouterUrl extends Component {
    render() {
        return (


                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/introduce" component={App} />
                    <Route path="/home" component={Home} />
                    <Route path="/subject/:id" component={Subject} />
                    <Route path="/subject/" component={Subject} />
                    <Route path="/exercise/:id" component={Exercise} />
                    <Route path="/exercise" component={Exercise} />
                    <Route path="/account" component={Account} />
                    <Route path="/room:id" component={Room} />
                    <Route path="/room" component={Room} />
                    <Route path="/help" component={Help} />
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={App} />
                </Switch>


        );
    }
}

export default RouterUrl;
