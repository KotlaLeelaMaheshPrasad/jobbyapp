import './index.css';
import { Component } from 'react';

class EachSkill extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="skillContainer">
                <img src = {this.props.eachSkill.image_url}></img>
                <p>{this.props.eachSkill.name}</p>
            </div>
        )
    }
}

export default EachSkill;