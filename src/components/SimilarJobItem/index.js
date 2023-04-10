import { Component } from "react";

import './index.css'

class SimilarJobItem extends Component{
    constructor(props){
        super(props);
    }

    render() {
            return (             
                 <div className="similarJobItemContainer">
                <div className="SimilarJobItemHeader">
                    <img src = {this.props.eachSimilarJob.company_logo_url} className="companyLogo"></img>
                    <div>
                        <h1> {this.props.eachSimilarJob.title}</h1>
                        <p> {this.props.eachSimilarJob.rating} star</p>
                    </div>
                </div>
                <div>
                    <h1>Description</h1>
                    <p> {this.props.eachSimilarJob.job_description}</p>
                    <span className="location"> {this.props.eachSimilarJob.location}</span>
                    <span className="empltype"> {this.props.eachSimilarJob.employment_type}</span>
                </div>
            </div>   
        )
    }
        }
        


export default SimilarJobItem;