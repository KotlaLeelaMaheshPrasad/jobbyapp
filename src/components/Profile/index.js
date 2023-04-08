import { Component } from "react";
import Cookies from "js-cookie";
import './index.css'

const url = 'https://apis.ccbp.in/profile';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            gotProfile: "null",
            profileData: []
        }
    }

    getProfileData = async () => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
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
                        <img src={this.state.profileData.profile_details.profile_image_url}/>
            <h1>{this.state.profileData.profile_details.name}</h1>
            <p>{this.state.profileData.profile_details.short_bio}</p>
        </div>);
        }
        
    }
}

export default Profile;