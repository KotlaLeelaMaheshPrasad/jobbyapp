import { Component } from "react";
import { Navigate } from "react-router-dom";
import './index.css'

class SimilarJobItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            nav : false,
        }
    }

    onClicking = () => {
        this.setState({nav:true});
    }

    render() {
        /*if(this.state.nav===true)
        {
            return <Navigate to = {`/Jobs/${this.props.eachSimilarJob.id}`} />
        }
        else */{
            return (
            <div onClick={this.onClicking}>
                <div className="SimilarJobItemHeader">
                    <img src = {this.props.eachSimilarJob.company_logo_url}></img>
                    <div>
                        <h1> {this.props.eachSimilarJob.title}</h1>
                        <p> {this.props.eachSimilarJob.rating} star</p>
                    </div>
                </div>
                <div>
                    <h1>Description</h1>
                    <p> {this.props.eachSimilarJob.job_description}</p>
                    <span> {this.props.eachSimilarJob.location}</span>
                    <span> {this.props.eachSimilarJob.employment_type}</span>
                </div>
            </div>
        )
    }
        }
        
}

export default SimilarJobItem;