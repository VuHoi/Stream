import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom";
import App from './home/App';
import Subject from './subject/AllSubject';
import Room from './room/room';
import Account from './account/account';
import Exercise from './exercise/exercise';
import Help from './help/help';
class ReturnUrl extends Component {
    render() {
        return (
            <div>

                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/home" component={App} />
                    <Route path="/subject/:id" component={Subject} />
                    <Route path="/subject/" component={Subject} />
                    <Route path="/exercise" component={Exercise} />
                    <Route path="/account" component={Account} />
                    <Route path="/room:id" component={Room} />
                    <Route path="/room" component={Room} />
                    <Route path="/help" component={Help} />
                    <Route component={App} />
                </Switch>
            </div>

        );
    }
}

export default ReturnUrl;
