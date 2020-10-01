import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'


class Header extends Component {
    state = {  }
    handleChange = () =>{
        this.props.history.push(`/login`);
    }
    
    render() { 
        return ( 
            <header className="header-component">
                <NavLink to="/login" className='home-login' ><span className="login-text"><strong>Login | Sign Up</strong></span></NavLink>
                <div className="content">
                <div className="nytimes-text">The New York Times <span className="lite">lite</span></div>
                </div>
                <hr className="header-line"/>
            </header>
         );
    }
}
 
export default Header;