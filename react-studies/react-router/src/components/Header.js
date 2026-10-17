import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>
                    React Router Study
                </h1>
                <ul className = "nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
