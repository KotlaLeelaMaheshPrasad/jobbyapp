import { Component } from "react";
import './index.css'
import Profile from "../Profile";
import Header from "../header";
import EachJobItem from "../EachJobItem";
import InputSearchEl from "../InputSearchEl";
import Cookies from "js-cookie";
import EmploymentType from "../EmploymentType";
import MinimumPackage from "../MinimumPackage";

const url = 'https://apis.ccbp.in/jobs';

class Jobs extends Component{

    constructor(props){
        super(props);
        this.state = {
            jobs : null,
            employment_type: "",
            minimum_package: 0,
            search: ""
        }
    }

    getQueryParameters = () => {
        let path = "";
        if(this.state.employment_type!=="")
        path = path + `employment_type=${this.state.employment_type}`;
        if(this.state.minimum_package!==0){
            if(path==="")
            path = `${path}minimum_package=${this.state.minimum_package}`;
            else
            path =  `${path}&minimum_package=${this.state.minimum_package}`;
        }
        if(this.state.search!==""){
            if(path==="")
            path = `${path}search=${this.state.search}`;
            else
            path = `${path}&search=${this.state.search}`;
        }
        return path;
    }

    getUpdatedUrl = () => {
        const query = this.getQueryParameters();
        if(query === "")
        return url ;
        else
        return url + "?" + query;
    }

    getJobs = async() => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: "GET",
        }
        const updatedUrl = this.getUpdatedUrl();
        console.log(updatedUrl);
        const response = await fetch(updatedUrl, options);
        if(response.ok === true){
            const data = await response.json();
            console.log(data);
            this.setState({jobs : data.jobs});
        }
    }

    onEmploymentTypeChange = (EmploymentTypeVal) => {
        console.log(EmploymentTypeVal);
        this.setState(prevState => {
            return ({...prevState, employment_type: EmploymentTypeVal});
        }, this.getJobs)
    }

    onSearch = (searchVal) => {
        console.log(searchVal);
        this.setState(prevState => {
            return ({...prevState, search: searchVal});
        }, this.getJobs)
    }

    onMinimumPackageChange = (value) => {
        console.log(value);
        this.setState(prevState => {
            return ({...prevState, minimum_package: value});
        }, this.getJobs)
    }

    componentDidMount() {
        this.getJobs();
    }

    render() {
        return (
            <>
            <Header/>
            <div className="JobsPageContainer">
                <div className="Leftview">
                    <Profile></Profile>
                    <hr></hr>
                    <EmploymentType onEmploymentTypeChange = {this.onEmploymentTypeChange}/>
                    <hr></hr>
                    <MinimumPackage onMinimumPackageChange = {this.onMinimumPackageChange}/> 
                </div>
                <div className="Rightview">
                    <InputSearchEl onSearch = {this.onSearch}/>
                    {   
                            this.state.jobs!==null && this.state.jobs.map((EachJob, index) => {
                            return <EachJobItem EachJob = {EachJob} history = {this.props.history}
                            key = {index}/>;
                        })   
                }
                </div>
            </div>
            </>
        );
    }
}

export default Jobs;