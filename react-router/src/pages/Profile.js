import React, { Component } from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

class Profile extends Component {

    componentDidMount(){
        if(!this.props.login){
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Profile Page
                </h1>
                

                <ul>
                    <li>
                        <Link to ={`${this.props.match.url}/view-profile`} >View Profile</Link>
                    </li>
                    <li>
                        <Link to = {`${this.props.match.url}/edit-profile`}>Edit Profile</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path = {`${this.props.match.path}/view-profile`} component = {ViewProfile}/>
                    <Route path = {`${this.props.match.path}/edit-profile`} component = {EditProfile}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Profile);
