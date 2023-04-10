import { Component } from "react";
import './index.css';
import {Navigate} from 'react-router-dom';
import Cookies from "js-cookie";

const url = "https://apis.ccbp.in/login";

class Login extends Component{
    constructor(props){
        super(props);
            this.state = {
            username :  "",
            password : "",
            login: false,
            invalidLogin: false,
        };
    }
    
    onSubmitSuccess = (JWT_token) => {
        Cookies.set('jwt_token', JWT_token, { expires: 30});
        this.setState(prevState => ({
            ...prevState, login: true
        }));
    }

    onSubmitFailure = () => {
        this.setState(prevState => ({
            ...prevState, invalidLogin: true,
        }));
    }

    authentication = async (credentials) => {
         const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        console.log(data);
        if(response.ok)
        this.onSubmitSuccess(data.jwt_token);
        else
        this.onSubmitFailure();
        return data;
    }
    
    onSubmitting = (event) => {
        event.preventDefault();
        const credentials = {
            username : this.state.username,
            password : this.state.password,
        };
        const jwtToken = this.authentication(credentials);
        console.log(jwtToken);
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
                <input id="Password" value={this.state.password} onChange={this.passwordChange} className="inputEl"></input>
                <button className="button">Login</button>
                {this.state.invalidLogin && <p className="errMsg">*invalid credentials entered</p>}
            </form>
            </div>
            </div>
          
          );
        } 
    }
}

export default Login;