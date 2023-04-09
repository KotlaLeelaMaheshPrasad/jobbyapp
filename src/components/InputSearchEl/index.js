import { Component } from "react";

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
            <div>
                        <input type="text" onChange = {this.enterInput} value = {this.state.searchVal}></input>
                        <button onClick={this.onSearching}>Search</button>
            </div>
        );
    }
}

export default InputSearchEl;