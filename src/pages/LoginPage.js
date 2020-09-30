import React, { Component, Fragment } from "react";
import axios from 'axios';
import Registration from "../auth/RegistrationComponent"
import { NavLink } from 'react-router-dom'
import LoginComponent from "../auth/LoginComponent";
import Header from "../components/Header"

class LoginPage extends Component{

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data);
        this.props.history.push("/");  
    }

    // handleLogoutClick = () => {
    //     axios.delete("http://localhost:3001/logout", {withCredentials: true})
    //     .then(resp=>this.props.handleLogout())
    //     .catch(error=>console.log('logout error', error))
        
    // }


    render(){
        return(
            <Fragment>
                <header className="header-component">
                    <NavLink to="/" className='home-login' ><span className="login-text"><strong>Home</strong></span></NavLink>
                    <div className="content">
                    <div className="nytimes-text">The New York Times <span className="lite">lite</span></div>
                    </div>
                    <hr className="header-line"/>
                </header>

                <div className="form-container">
                    Status: {this.props.loggedInStatus}
                    <LoginComponent handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                    <NavLink to="/registration" className='registration'>Don't have credentials? Sign up</NavLink>
                    <br></br>
                    {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
                </div>
            </Fragment>

        )
    }
}
export default LoginPage