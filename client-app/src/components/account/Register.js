import React, { Component } from 'react';
import {Button} from 'reactstrap';
import axios from "axios/index";
import {Redirect} from 'react-router-dom';
const center={
    position: 'fixed',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
zIndex:10,
    boxShadow: '0 15px 0px rgba(0, 0, 0, 0.3)',
width:'350px',
    '::after': {
    content: '',
    position: 'absolute',
    zIndex: 9,

    boxShadow: '0 15px 0px rgba(0, 0, 0, 0.3)',
    width: '90%',
    left: '15%',
    height: '100px',
    bottom: '0'
}
}

// const shadow={
//     position: 'fixed',
//     top:'50%',
//     left:'50%',
//     transform: 'translate(-50%, -50%)',
//     width:'330px',
//
//     height:'300px',
//     backgroundColor:'#DDDDDD',
//     marginTop:'10px',
//     zIndex:9,
// }
const heightScreen={
    height:'100vh',
    backgroundImage: 'linear-gradient(to right bottom, #3c8dd3,#287ec8 , #00539b)'
}
class Register extends Component {

    constructor(props) {
        super(props);
        this.state={
            validate:false,
            fields: {},
            errors: {},
            duplicate:'',
            redirectToLogin:false
        }
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name

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

                    this.setState({
                        validate:false,
                        fields:{},
                        errors:{},
                        redirectToLogin:true
                    })
                }
            })

    }
    render() {
        if(this.state.redirectToLogin)return (
            <Redirect to={{pathname:'/login',state:{from:this.state.fields.email}}}></Redirect>
        )
        return (
            <div style={heightScreen}>
                {/*<div style={shadow}></div>*/}
                <form style={center} className=' card'>
                    <div   className="form-group">
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
                        {this.state.duplicate ==='email'?'Email của bạn đã tồn tại':'Username  của bạn đã tồn tại'}
                    </div>

                    <Button color="primary" onClick={this.signUp.bind(this)}>Register</Button>

                </form>
            </div>
        );
    }
}

export default Register;
