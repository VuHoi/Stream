import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Modals extends Component {

    constructor(props) {
        super(props);
    }
    login=async()=>{
       //close modal
       this.props.toggleModal();

       await  axios.post('/login', {
            email:'hahaha.com',
            password:"Thatvuhai_7595"
        }).then(p=>console.log(p.data))

    }

    signUp(){
        this.props.toggleModal();

    }
    render() {
        return (
            <Modal centered={1===1}  isOpen={this.props.modal} toggle={this.props.toggleModal}>
                <ModalHeader className=" alert-success alert"  toggle={this.props.toggleModal} >
                    {this.props.status}
                </ModalHeader>
                <ModalBody >
                    <form >
                        <div  hidden={this.props.status==='Đăng nhập'} className="form-group">
                            <label htmlFor="username">Tên người dùng:</label>
                            <input name="username" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input name="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input name="password" className="form-control"/>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.login.bind(this)}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.signUp.bind(this)}>Cancel</Button>
                </ModalFooter>
            </Modal>

        );
    }
}

export default Modals;
