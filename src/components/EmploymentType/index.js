import { Component } from "react";
import './index.css';

class EmploymentType extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr : [false, false, false, false],
            fulltime: false,
            parttime: false,
            freelance: false,
            internship: false,
        }
        this.employmentType = ["FULLTIME", "PARTTIME", "FREELANCE", "INTERNSHIP"];
    }

    onCheck = (event) => {
        let val = parseInt(event.target.value);
        if(event.target.checked){
            this.setState(prevState => {
                prevState.arr[val] = true;
                return prevState;
            }, this.employmentChange)
        }
        else{
            this.setState(prevState => {
                prevState.arr[val] = false;
                return prevState;
            }, this.employmentChange)
        }
        
    }

    employmentChange = () => {
            this.props.onEmploymentTypeChange(this.getEmploymenttype());
    }

    getEmploymenttype = () => {
        let employment_type = "";
        for(let i=0; i<=3; i++){
            if(this.state.arr[i]===true)
            {
                if(employment_type!=="")
                employment_type += ",";
            employment_type += this.employmentType[i];
            }
        }
        return employment_type;
    }


    render() {
        return (
            <div>        
                <p>Types of Employment</p>
                        <div className="checkboxContainer">
                            <div>
                            <input type= 'checkbox' id='chekbox1' onChange = {this.onCheck} value = "0"></input>
                        <label htmlFor="checkbox1">FullTime</label>
                        </div>
                        <div>
                            <input type= 'checkbox' id='chekbox2' onChange = {this.onCheck} value = "1"></input>
                        <label htmlFor="chekbox2">partTime</label>
                        </div>
                        <div>
                            <input type= 'checkbox' id='chekbox3' onChange = {this.onCheck} value = "2"></input>
                        <label htmlFor="chekbox3">FreeLance</label>
                        </div>
                        <div>
                            <input type= 'checkbox' id='chekbox4' onChange = {this.onCheck} value = "3"></input>
                        <label htmlFor="checkbox4">Internship</label>
                        </div>
                        </div>
                </div>  
                    
        )
    }
}

export default EmploymentType;