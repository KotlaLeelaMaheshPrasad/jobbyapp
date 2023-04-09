import { Component } from "react";
import './index.css';

class MinimumPackage extends Component {
    constructor(props){
        super(props);
        this.state = {
            minPackage: 0,
        }
    }

    onMinPackageSelect = (event) => {
        this.setState({minPackage: parseInt(event.target.value)}, this.props.onMinimumPackageChange(parseInt(event.target.value)*1000000) );
    }


    render() {
        return (
                    <div>
                        <p>Salary Range</p>
                        <div className="checkboxContainer" onChange = {this.onMinPackageSelect}>
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
        )
    }
}

export default MinimumPackage;