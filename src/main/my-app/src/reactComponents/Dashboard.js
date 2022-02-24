import React, {Component} from 'react';
import './Dashboard.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router"


import Login from "./Login";
import Nav from "./Nav";
import Signup from "./Signup";

export default class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLoggedData:''
        }
    }
    myCallback = (dataFromChild) => {
       this.setState({isLoggedData : dataFromChild})
    }

    render(){
        return(
            <BrowserRouter>
                {/*{this.state.isLoggedData}*/}
                <div>
                    <Nav value={this.state.isLoggedData}/>
                    <div>
                        <Routes>
                            <Route path='/login' element={<Login callbackFromParent={this.myCallback}/>}/>
                            <Route path='/signup' element={<Signup/>} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}
