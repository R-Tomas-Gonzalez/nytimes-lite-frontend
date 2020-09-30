import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="header-component">
                <button className='home-login'><span className="login-text"><strong>Login | Sign Up</strong></span></button>
                <div className="content">
                <div className="nytimes-text">The New York Times <span className="lite">lite</span></div>
                </div>
                <hr className="header-line"/>
            </header>
         );
    }
}
 
export default Header;