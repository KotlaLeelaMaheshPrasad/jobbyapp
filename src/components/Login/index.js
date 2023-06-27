import { Component } from "react";
import './index.css';
import {Navigate} from 'react-router-dom';
import Cookies from "js-cookie";

const url = "https://jobby-app-backend.vercel.app/login";

class Login extends Component{
    constructor(props){
        super(props);
            this.state = {
            username :  "",
            password : "",
            login: false,
            invalidLogin: null,
            register: false,
        };
    }

    onRegister = () => {
        this.setState(prevState => ({
            ...prevState, register : true
        }));
    }
    
    onSubmitSuccess = (JWT_token, auth_token) => {
        Cookies.set('jwt_token', JWT_token, { expires: 30});
        Cookies.set('auth_token', auth_token, {expires: 30});
        this.setState(prevState => ({
            ...prevState, login: true
        }));
    }

    onSubmitFailure = (data) => {
        this.setState(prevState => ({
            ...prevState, invalidLogin: data,
        }));
    }

    authentication = async (credentials) => {
        //console.log(JSON.stringify(credentials));
         const response = await fetch(url, {
            method: 'POST', 
            headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });
        const Credentials = await response.json();
        if(response.ok)
        {
            let data  = await fetch("https://apis.ccbp.in/login", {
                method: 'POST',
                body: JSON.stringify(Credentials.credentials)
            })
            data = await data.json();
            this.onSubmitSuccess(data.jwt_token, Credentials.token);
        }
        
        else
        this.onSubmitFailure(Credentials);
        return Credentials;
    }
    
    onSubmitting = (event) => {
        event.preventDefault();
        
        const credentials = {
            username : this.state.username,
            password : this.state.password,
        };
        const jwtToken = this.authentication(credentials);
        //console.log(jwtToken);
    };

    userNameChange  = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            username : event.target.value,
        }));
    }

    passwordChange = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            password : event.target.value,
        }));
    }

    render() {
        if(this.state.register===true)
        return <Navigate replace to =  '/register' />;
        if(this.state.login || (Cookies.get('jwt_token')!==undefined)){
            return <Navigate replace to =  '/' />;
        }
        else{
          return(
            <div className="LoginPageOuterContainer">
                <div className="LoginPageContainer">
            <h1 className="heading">JOBBY APP</h1>
            <form onSubmit = {this.onSubmitting} className="">
                <label htmlFor="Username" className="labelEl">Username</label>
                <input id="Username" value={this.state.username} onChange={this.userNameChange} className="inputEl"></input>
                <label htmlFor="Password" className="labelEl">Password</label>
                <input id="Password" value={this.state.password} onChange={this.passwordChange} className="inputEl" type="password"></input>
                <button className="button">Login</button>
                {this.state.invalidLogin && <p className="errMsg">{`*${this.state.invalidLogin}`}</p>}
            </form>
            <p className="p">*don't have an account</p>
            <button className="button" onClick= {this.onRegister}>Register</button>
            </div>
            </div>
          
          );
        } 
    }
}

export default Login;