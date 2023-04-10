import { Component } from "react";
import './index.css'

class NotFound extends Component {

    render() {
        return (<div className="notFoundContainer">
            <img src = "https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png" className="notFoundImage"/>
            <h1>Page Not Found</h1>
            <p>We are sorry, the page requested could not found</p>
        </div>)
    }
}

export default NotFound;