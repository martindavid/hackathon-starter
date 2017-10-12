import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import LoginButton from './LoginButton';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/">Project Name</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="component" activeClassName="active">Component</NavLink></li>
                    </ul>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <LoginButton />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Header;
