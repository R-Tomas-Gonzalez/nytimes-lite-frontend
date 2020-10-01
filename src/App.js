import React, { Component} from 'react';
import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import Login from './pages/Login'
import UserPage from './pages/UserPage'
import { useHistory } from 'react-router-dom'


class App extends Component {
  

  render() {
    return (
      <Router>
      <div>
      
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userpage" component={UserPage}/>
        </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;





