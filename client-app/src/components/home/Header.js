import React, { Component } from 'react';
import header from '../../assets/images/header.png';
import NavApp from './Nav';
const width={
    width:'100%'
}
const position ={
    top:'40%',


}
class Header extends Component {
    render() {
        return (
            <div>


                <NavApp></NavApp>
                <img style={width} src={header} alt="header my stream"/>
                <div className="position-absolute text-center w-100" style={position}>
                    <p className="h4 font-weight-normal">Classroom Online</p>
                    <h3>Chia sẻ kiến thức giúp xã hội tốt hơn</h3>
                    <p className="h4 font-weight-normal">Bắt đầu nào</p>
                    <button className="btn btn-outline-success">Xem tiếp</button>
                </div>
            </div>

        );
    }
}

export default Header;
