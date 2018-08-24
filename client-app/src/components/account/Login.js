import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import axios from "axios/index";
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
const heightScreen={
    height:'100vh',
    backgroundImage: 'linear-gradient(to right bottom, #3c8dd3,#287ec8 , #00539b)'
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            validate:false,
            fields: {},
            errors: {},
            title:'',
            redirectToHome:false,

        }
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name

            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "Không được bỏ trống";
            }

            if(typeof fields["password"] !== "undefined"){
                if(!fields["password"].match(/^[a-zA-Z1-9_]+$/)){
                    formIsValid = false;
                    errors["password"] = "Chỉ được được phép nhập kí tự";
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
                        validate:true,
                        title:p.data.title,

                    })
                else {

                    this.setState({
                        validate:false,
                        redirectToHome:true,
                        fields:{},
                        errors:{},

                    })
                }
            })

    }
    render() {

        if(this.state.redirectToHome)
            return (<Redirect to={{pathname:'/'}}></Redirect>)
        return (
            <div style={heightScreen}>

                <form autoComplete="off" style={center} className=' card'>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input   onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} name="email" className="form-control"  required/>
                        <div className="alert alert-danger" hidden={!this.state.errors.email}>{this.state.errors.email}</div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu:</label>
                        <input onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} name="password" type="password" className="form-control"/>
                    </div>
                    <div className="alert alert-danger" hidden={!this.state.validate}>
                        {this.state.errors.email}{this.state.errors.password}{this.state.title}
                    </div>

                    <Button color="primary" onClick={this.login.bind(this)}>Login</Button>

                </form>
            </div>
        );
    }
}

export default Login;
