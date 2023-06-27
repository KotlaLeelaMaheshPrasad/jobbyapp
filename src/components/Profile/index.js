import { Component } from "react";
import Cookies from "js-cookie";
import './index.css'

const url = 'https://jobby-app-backend.vercel.app/profile';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            gotProfile: "null",
            profileData: []
        }
    }

    getProfileData = async () => {
        const jwtToken = Cookies.get('auth_token');
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "GET",
        };

        const response = await fetch(url, options);
        if(response.ok===true){
            const data = await response.json();
            this.setState({gotProfile: "true" , profileData: data});
        }
        else{
            this.setState({gotProfile: "false" , profileData: []});
        }
    } 

    componentDidMount() {
        this.getProfileData();
    }

    render() {
        if(this.state.gotProfile==="null")
        return (<div className="ProfileContainer"></div>);
        else if(this.state.gotProfile==="false"){
        return (<div className="ProfileContainer"><button>Retry</button></div>);
        }
        else{
        return (<div className="ProfileContainer">
                        <img src={this.state.profileData.profile_image_url} alt="profile_image"/>
            <h1 className="userName">{this.state.profileData.name}</h1>
            <p className="userBio">{this.state.profileData.short_bio}</p>
        </div>);
        }
        
    }
}

export default Profile;