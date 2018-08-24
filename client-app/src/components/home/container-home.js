import React, { Component } from 'react';
import Nav from './nav';
import News from './news';
import Subject from './subject';
import Friends from './friends';
class ContainerHome extends Component {

    render() {

        return (

            <div>
                <Nav/>
                <div className="row">
                    <div className="col-2">
                        <Subject/>
                    </div>
                    <div className="col-8">
                        <News/>
                    </div>
                    <div className="col-2">
                        <Friends/>
                    </div>
                </div>
            </div>

        );
    }
}

export default ContainerHome;
