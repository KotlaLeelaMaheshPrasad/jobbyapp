import { Component } from "react";
import Cookies from "js-cookie";
import './index.css'
import SimilarJobItem from "../SimilarJobItem";
import EachSkill from "./eachSkill";



const url = 'https://apis.ccbp.in/jobs';

class JobItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            job : null,
        }
    }

    getJob = async() => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: "GET",
        }
        const {id} = this.props.id;
        console.log(id);
        const updatedUrl = `${url}/${id}`;
        console.log(updatedUrl);
        const response = await fetch(updatedUrl, options);
        if(response.ok === true){
            const data = await response.json();
            console.log(data);
            this.setState({job : data});
        }
    }

    componentDidMount() {
        this.getJob();
    }

    render() {
        if(this.state.job===null)
        return <h1>Job page</h1>;
        else{
            return (
                <div>
                    <div className="JobProfileHeader">
                        <img src = {this.state.job.job_details.company_logo_url} /> 
                        <div>
                            <h1>Devops Engineer</h1>
                            <p>{this.state.job.job_details.rating} star</p>
                        </div>
                    </div>
                    <div className="jobDetails">
                        <div>
                            <div><span>{this.state.job.job_details.location}</span></div>
                            <div><span>{this.state.job.job_details.employment_type}</span></div> 
                        </div>
                        <div>
                            <p>{this.state.job.job_details.package_per_annum}</p>
                        </div>
                        
                    </div>
                    <hr></hr>
                    <div>
                        <div>
                            <h1>Description</h1>
                        <p>{this.state.job.job_details.job_description}</p>
                        </div>
                        
                        <div>
                            <h1>Skills</h1>
                            <div className="skillsContainer">
                            { 
                                this.state.job.job_details.skills.map((eachSkill, index) => {
                                    return <EachSkill  eachSkill = {eachSkill} key = {index}/>;
                                })
                            }
                            </div>
                        </div>
                        <div>
                            <h1>Life at Company</h1>
                            <p>{this.state.job.job_details.life_at_company.description}</p>
                        </div>
                        <div>
                            <h1>Similar Jobs</h1>
                            <div className="similarJobContainer">
                            {
                                
                                this.state.job.similar_jobs.map((eachSimilarJob,  index) => {
                                    return <SimilarJobItem eachSimilarJob = {eachSimilarJob} key = {index}/>;
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default JobItem;