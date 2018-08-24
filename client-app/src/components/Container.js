import React, { Component } from 'react';
import RouterUrl from './RouterUrl';
import {BrowserRouter as Router} from "react-router-dom";


class Container extends Component {

    render() {

        return (

            <Router>
                <RouterUrl></RouterUrl>
            </Router>

        );
    }
}

export default Container;
