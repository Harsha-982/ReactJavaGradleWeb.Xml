import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navigate} from "react-router";
import './Dashboard.css'
import $ from "jquery";

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            message :'',
            isLoggedIn:false
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        alert("entered")
        const data = {
            email : this.email,
            password :this.password,
        }
        console.log(data)
        if( this.email!==undefined || this.password!==undefined) {
            alert("entered level2")
            $.ajax({
                type: 'Post',
                // url: 'http://localhost:8080/login',
                url :'https://20220214t104453-dot-awcore-practice-gcp.uc.r.appspot.com/login',
                data: {
                    'email': this.email,
                    'password': this.password
                },
                success: (data) => {
                    if (data !== "error") {
                        this.setState({message: data});
                    } else {
                        this.setState({message: "Authentication Failed!..."})
                    }
                }
            })
        }
        else{
            alert("Invalid credentials")
        }

    }

    render(){
        let error=''
        if(this.state.message==="Authentication Failed!..."){
            error =<div className="error">{this.state.message+"error"}</div>
            this.setState({isLoggedIn : true})
            this.props.callbackFromParent(this.state.isLoggedIn)
        }

        else if(this.state.message!==""){
            return <Navigate to={"/signup"}/>
        }

        return(
            <div className="Form">
                {error}
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               placeholder="Enter email"
                                onChange={e => this.email= e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type='password' className="form-control" id="inputPassword"
                               placeholder="Password"
                               onChange={e => this.password = e.target.value} />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );

    }
}
