import React, { Component } from "react";

class Login extends Component{
    constructor(props){
        super(props);
    this.state = {
        email: "",
        password: "",
        password_confirmation: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
} 
handleChange(event){
    console.log("handles change", event);
}
handleSubmit(event) {
    console.log("form submited")
    event.preventDefault()
}
    render(){
        return(
            <div>
             <header className="header-component">
               
                <div className="content">
                <div className="nytimes-text">The New York Times <span className="lite">lite</span></div>
                </div>
                <hr className="header-line"/>
            </header>
            <h2>hello from the other side</h2>
            <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required/>
            </form>
            </div>
        )
    }
}
export default Login