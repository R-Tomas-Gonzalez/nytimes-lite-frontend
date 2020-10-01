import React, { Component} from 'react';
import RegistrationPage from './pages/RegistrationPage';
import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserPage from './pages/UserPage'

class App extends Component {
  
  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  }

  checkLoginStatus = () => {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true})
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    })
    .catch(error => {
      console.log("check login error")
    })
  }

  componentDidMount = () => {
    this.checkLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" render={props => (<LoginPage {...props}  
        handleLogin={this.handleLogin} 
        handleLogout={this.handleLogout} 
        loggedInStatus={this.state.loggedInStatus}/>)}/>
        
        <Route exact path="/registration" render={props => (<RegistrationPage {...props} 
        handleLogin={this.handleLogin} 
        loggedInStatus={this.state.loggedInStatus}/> )} />
        <Route exact path="/userpage" component={UserPage}/>
        </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;





