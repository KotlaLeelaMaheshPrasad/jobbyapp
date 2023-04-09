import './index.css';
import { Component } from "react";
import {Link} from 'react-router-dom';
import Header from '../header';

class Home extends Component{
    render() {
        return (<>
        <Header />
        <div className="homeContainer">
            <h1 className='Homeheading'>Find the jobs that fits your Life</h1>
            <p className='HomeContent'>Millions of people are searching for jobs, salary information, company reviews.
             Find the job that fits your abilities and potential.</p>
             <Link to = '/Jobs'><button className='findJobsButton'>Find Jobs</button></Link>
        </div>
        </>);
    }
}

export default Home;