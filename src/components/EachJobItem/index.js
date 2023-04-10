import { Link, Navigate } from 'react-router-dom';
import './index.css';
import { Component } from 'react';

class EachJobItem extends Component {
    constructor(props){
        super(props);
        /*this.state = {
           nav : false
        }*/
    }

    /*click = () => {
        this.setState({nav: true});
    }*/

    render(){
        /*if(this.state.nav === true)
        return <Navigate  to = {`/Jobs/${this.props.EachJob.id}`}/>;
        */return (
            <Link to = {`/Jobs/${this.props.EachJob.id}`} className='eachJobItemStyle'>
                <div className='eachJobItem'>
                <div className ="companyDetails">
                    <img src = {this.props.EachJob!==undefined && this.props.EachJob.company_logo_url} alt="Logo" className='companyLogo'></img>
                    <div><h1>{this.props.EachJob!==undefined && this.props.EachJob.title}</h1>
                    <p>{this.props.EachJob!==undefined && this.props.EachJob.rating}star</p></div>
                </div>
                <div className = 'JobDetails'>
                    <div>
                        <label className='eachLabel'>{this.props.EachJob!==undefined && this.props.EachJob.location}</label>
                        <label className='eachLabel'>{this.props.EachJob!==undefined && this.props.EachJob.employment_type}</label>
                    </div>
                    <div>{this.props.EachJob!==undefined && this.props.EachJob.package_per_annum}</div>
                </div>
                <hr></hr>
                <div>
                    <h1>Description</h1>
                    <p>{this.props.EachJob!==undefined && this.props.EachJob.job_description}</p>
                </div>
            </div>
            </Link>
        );
    }
}

export default EachJobItem;