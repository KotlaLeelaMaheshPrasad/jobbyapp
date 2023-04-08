import {Link} from 'react-router-dom';
import { Component } from 'react';
import Cookies from 'js-cookie';
import './index.css';

class Header extends Component {

constructor(props){
    super(props)
    this.state = {isLoggedin: !(Cookies.get('jwt_token')===undefined)}
}


Logout = () => {
   Cookies.remove('jwt_token');
this.setState({isLoggedin: false});
}

render(){
        return (<div className="headerContainer">
        <div >
            <h1 className='Headerheading'>JOBBY APP</h1>
        </div>
        <div>
            <Link to='/' className='link'>Home</Link>
            <Link to = '/Jobs' className='link'>Jobs</Link>
        </div>
        <div>
            <button className='Logoutbutton' onClick={this.Logout}>Logout</button>
        </div>
    </div>);
    }
    
}

export default Header;