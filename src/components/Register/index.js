import { Component } from "react";
import {Navigate} from 'react-router-dom';
import Cookies from "js-cookie";
import './index.css';

const url = "https://jobby-app-backend.vercel.app/register";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            shortBio: "",
            login: false,
            invalidRegister: null,
        }
    }

    onSubmitSuccess = () => {
        this.setState(prevState => ({
            ...prevState, login: true
        }));
    }

    onSubmitFailure = (err) => {
        this.setState(prevState => ({
            ...prevState, invalidRegister: err,
        }));
    }

    register = async (credentials) => {
        try{
            //console.log("try");
                const response = await fetch(url, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            //console.log(data);
            if(response.ok)
            this.onSubmitSuccess();
            else
            throw data;
        } catch(err){
            this.onSubmitFailure(err);
        }
    }

    onSubmitting = (event) => {
        event.preventDefault();
        let credentials = {
            username: this.state.username,
            password: this.state.password,
            shortBio: this.state.shortBio
        }
        //console.log("onsubmitting");
        this.register(credentials);
    }

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

    shortBioChange = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            shortBio: event.target.value
        }));
    }

    render() {
        if(this.state.login===true)
        return <Navigate replace to =  '/login' />;
        else if((Cookies.get('jwt_token')!==undefined)){
            return <Navigate replace to =  '/' />;
        }
        else{
          return(
            <div className="RegisterPageOuterContainer">
                <div className="RegisterPageContainer">
            <h1 className="heading">JOBBY APP</h1>
            <form onSubmit = {this.onSubmitting} className="">
                <label htmlFor="Username" className="labelEl">Username</label>
                <input id="Username" value={this.state.username} onChange={this.userNameChange} className="inputEl"></input>
                <label htmlFor="Password" className="labelEl">Password</label>
                <input id="Password" value={this.state.password} onChange={this.passwordChange} className="inputEl" type="password"></input>
                <label htmlFor="shortBio" className="labelEl">short-bio</label>
                <input id="shortBio" value={this.state.shortBio} onChange={this.shortBioChange} className="inputEl"></input>
                <button className="button">Register</button>
                {this.state.invalidRegister && <p className="errMsg">{this.state.invalidRegister}</p>}
            </form>
            
            </div>
            </div>
          
          );
        } 
    }
}

export default Register;