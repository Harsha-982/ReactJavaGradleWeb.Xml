import React ,{Component} from 'react';
import './Dashboard.css'

export default class Nav extends Component {

    render() {
        let bool=()=>{
            return this.props.value()
        }
        let condition=''
        if(bool){
            condition=(
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Sign up</a>
                        </li>
                    </ul>
                </div>
            )
        }
        else{
            condition=(
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                </div>
            )
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/home">Home</a>
                    {condition}
                </nav>
            </div>
        );
    }
}
