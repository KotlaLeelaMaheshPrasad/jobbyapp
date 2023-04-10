import { Component } from "react";
import './index.css';

class InputSearchEl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: "",
        }
    }

    enterInput = (event) => {
        this.setState({searchVal: event.target.value});
    }

    onSearching = () => {
        this.props.onSearch(this.state.searchVal);
    }

    render() {
        return (
            <div className="inputContainer">
                        <input type="text" onChange = {this.enterInput} value = {this.state.searchVal} className="inputElement"></input>
                        <button onClick={this.onSearching} className="buttonEl">Search</button>
            </div>
        );
    }
}

export default InputSearchEl;