import Cookies from "js-cookie";
import { Component } from "react";
import { Navigate } from "react-router-dom";

class ProtectedRoute extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if(Cookies.get('jwt_token')===undefined){
            return <Navigate to = '/login' />;
        }
        else{
            return this.props.children;
        }
    }
}

export default ProtectedRoute;