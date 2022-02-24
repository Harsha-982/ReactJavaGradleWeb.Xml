import React,{Component} from 'react';
import axios from "axios";
import $ from 'jquery';

export default class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state={
            message :'',
            name :'',
            password :''
        }
    }

    submitHandler=(e)=>{
        e.preventDefault();
        alert("entered the handler")
        var username=this.state.name;
        var password=this.state.password;
        if(username!="" || password!="") {
            $.ajax({
                type: 'Post',
                url: 'http://localhost:8080/home',
                data: {
                    'username': username,
                    'password': password
                },
                success: (data) => {
                    if (data != "error") {
                        this.setState({message: data});
                    } else {
                        this.setState({message :"Authentication Failed!..."})
                    }
                }
            })
        }
        else{
            alert("Username and password should not be empty..")
        }
    }

    render() {
        {
            return (

                <div>
                    {this.state.message}
                    <form onSubmit={this.submitHandler} id="form">
                        EnterUsername : <input type="text" value={this.state.name}
                    onChange={e => this.setState({name :e.target.value})}/>
                        EnterPassword : <input type="password" value={this.state.password}
                    onChange={e=>this.setState({password : e.target.value})}/>
                        <button>Login</button>
                    </form>
                </div>
            )
        }
    }
}
