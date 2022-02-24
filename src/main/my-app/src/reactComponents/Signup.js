import React,{Component} from 'react'
import $ from "jquery";

export default class Signup extends Component{
    constructor(props) {
        super(props);
        this.state={
            message :''
        }
    }
    emailExistence=(e)=>{
        e.preventDefault()
        const emailInfo={
            email :this.email
        }
        alert("got into email check")
            $.ajax({
                type:'GET',
                url: 'http://localhost:8080/register',
                data:{
                    'email' :this.email
                },
                success:(data)=>{
                    if(data==="uerror"){
                        alert("Username has already exist!! please enter another name");
                    }
                }
            })
        }

    handleSubmit =(e)=>{
        e.preventDefault()
        const data = {
            firstName : this.firstName,
            lastName :this.lastName,
            email : this.email,
            password :this.password,
            confirmPassword :this.confirmPassword
        }
        if(this.firstName!==undefined || this.lastName!==undefined || this.email!==undefined || this.password!==undefined || this.confirmPassword!==undefined) {
            $.ajax({
                type: 'Post',
                url: 'http://localhost:8080/register',
                data: {
                    'email': this.email,
                    'password': this.password,
                    'firstName': this.firstName,
                    'lastName': this.lastName,
                    'confirmPassword':this.confirmPassword
                },
                success: (data) => {
                    if(data==="perror"){
                        this.setState({message: "Password mismatch"})
                    }
                    else{
                        alert(data)
                    }
                }
            })
        }

        else{
            alert("Check if all the fields are filled ")
        }

    }
    render(){
        return(
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    {this.state.message}
                    <h1>Sign up</h1>
                    <div>
                        <label htmlFor="inputFirstname">FirstName</label>
                        <input type="text" className="form-control" id="inputFirstname" placeholder="Enter FirstName"
                               onChange={e => this.firstName= e.target.value}/>
                    </div>

                    <div>
                        <label htmlFor="inputLastname">LastName</label>
                        <input type="text" className="form-control" id="inputLastname" placeholder="Enter LastName"
                               onChange={e => this.lastName = e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email"
                               onChange={e => this.email= e.target.value} onBlur={this.emailExistence}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type='password' className="form-control" id="inputPassword"
                               placeholder="Password"
                               onChange={e => this.password = e.target.value} />
                    </div>
                    <div>
                        <label htmlFor="inputConfirmPassword">ConfirmPassword</label>
                        <input type='password' className="form-control" id="inputConfirmPassword" placeholder="Confirm Password"
                               onChange={e => this.confirmPassword = e.target.value} />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
