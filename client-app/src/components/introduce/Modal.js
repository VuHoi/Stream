import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Modals extends Component {

    constructor(props) {
        super(props);
        this.state={
            validate:false,
            fields: {},
            errors: {},
            duplicate:''
        }
    }


    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(this.props.status!=='Đăng nhập'){
            if(!fields["username"]){
                formIsValid = false;
                errors["username"] = "Không được bỏ trống";
            }

            if(typeof fields["username"] !== "undefined"){
                if(!fields["username"].match(/^[a-zA-Z]+$/)){
                    formIsValid = false;
                    errors["username"] = "Chỉ được được phép nhập kí tự";
                }
            }
        }

        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Không được bỏ trống";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email không  tồn tại";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }


    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }
    login=async()=>{
        //close modal

        if(this.handleValidation())
            await  axios.post('/login', {
                email:this.state.fields.email,
                password:this.state.fields.password
            }).then(p=>{
                console.log(p)
                if(p.data.status!==200)
                    this.setState({
                        validate:true
                    })
                else {
                    this.props.toggleModal();
                    this.setState({
                        validate:false,
                        fields:{},
                        errors:{}
                    })
                }
            })
        console.log(this.handleValidation())
    }

    signUp=async()=>{
        if(this.handleValidation())
            await  axios.post('/register', {
                email:this.state.fields.email,
                password:this.state.fields.password,
                username:this.state.fields.username
            }).then(p=>{
                console.log(p)
                if(p.data.status!==200)
                    this.setState({
                        validate: true,
                        duplicate:p.data.message.indexOf('email')>-1?'email':'username'
                    });
                else {
                    this.props.toggleModal();
                    this.setState({
                        validate:false,
                        fields:{},
                        errors:{}
                    })
                }
            })

    }




    render() {
        return (
            <Modal centered={1===1}  isOpen={this.props.modal} toggle={this.props.toggleModal}>
                <ModalHeader className=" alert-success alert"  toggle={this.props.toggleModal} >
                    {this.props.status}
                </ModalHeader>
                    <ModalBody >


                        <div  hidden={this.props.status==='Đăng nhập'} className="form-group">
                            <label htmlFor="username">Tên người dùng:</label>
                            <input ref="username" size="30" name="username" className="form-control" onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]}/>
                            <div className="alert alert-danger" hidden={!this.state.errors.username}>{this.state.errors.username}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} name="email" className="form-control"  required/>
                            <div className="alert alert-danger" hidden={!this.state.errors.email}>{this.state.errors.email}</div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} name="password" type="password" className="form-control"/>
                        </div>
                        <div className="alert alert-danger" hidden={!this.state.validate}>

                            {this.props.status==='Đăng nhập'?'Email hoặc mật khẩu không đúng':this.state.duplicate==='email'?'Email của bạn đã tồn tại':'Username  của bạn đã tồn tại'}
                        </div>


                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.status==='Đăng nhập'?this.login.bind(this):this.signUp.bind(this)}>{this.props.status}</Button>
                        <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                    </ModalFooter>

            </Modal>

        );
    }
}

export default Modals;
