import React, { Component } from 'react';
import Header from './Header';
import Introduce from './Introduce';
import Subject from './Subject';
import News from './News';
import Guide from './Guide';
import Teacher from './Teacher';
import '../../assets/styles/css/App.css';
import Footer from "../Footer";


class App extends Component {

    render() {
        return (

            <div className="background ">

                <div id="header"> <Header></Header></div>
                <div id="introduce"> <Introduce></Introduce></div>
                <div id="subject">  <Subject></Subject></div>
                <div id="teacher">  <Teacher></Teacher></div>
                <div id="news">  <News></News></div>
                <div id="guide"> <Guide ></Guide></div>
                <div id="footer"> <Footer/></div>
            </div>

        );
    }
}

export default App;
