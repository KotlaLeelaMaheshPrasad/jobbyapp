import { Component } from "react";
import './index.css'
import Profile from "../Profile";
import Header from "../header";

class Jobs extends Component{

    componentDidMount() {

    }

    render() {
        return (
            <>
            <Header/>
            <div className="JobsPageContainer">
                <div>
                    <Profile></Profile>
                    <hr></hr>
                    <div>
                        <p>Types of Employment</p>
                        <div className="checkboxContainer">
                            <div>
                            <input type= 'checkbox' id='chekbox1' ></input>
                        <label htmlFor="checkbox1">FullTime</label>
                        </div>
                        <div>
                            <input type= 'checkbox' id='chekbox2'></input>
                        <label htmlFor="chekbox2">partTime</label>
                        </div>
                        <div>
                            <input type= 'checkbox' id='chekbox3'></input>
                        <label htmlFor="chekbox3">FreeLance</label>
                        </div>
                        <div>
                            <input type= 'checkbox' id='chekbox4'></input>
                        <label htmlFor="checkbox4">Internship</label>
                        </div>
                        </div>  
                    </div>
                    <hr></hr>
                    <div>
                        <p>Salary Range</p>
                        <div className="checkboxContainer">
                            <div>
                            <input type= 'radio' id='radio1' name='salary' value="1"></input>
                        <label htmlFor="radio1">10Lpa and above</label>
                        </div>
                        <div>
                            <input type= 'radio' id='radio2' name='salary' value="2"></input>
                        <label htmlFor="radio2" >20Lpa and above</label>
                        </div>
                        <div>
                            <input type= 'radio' id='radio3' name='salary' value="3"></input>
                        <label htmlFor="radio3" >30Lpa and above</label>
                        </div>
                        <div>
                            <input type= 'radio' id='radio4' name='salary' value="4"></input>
                        <label htmlFor="radio4" >40Lpa and above</label>
                        </div>
                        </div>  
                    </div>
                </div>
                <div>

                </div>
            </div>
            </>
        );
    }
}

export default Jobs;