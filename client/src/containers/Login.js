import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Login.css';

const mapStateToProps = state => ({
    ...state.login
});

const mapDispatchToProps = dispatch => ({
    onToggle: isOpen => {
        dispatch({ type: 'REGISTER_OPEN', isOpen })
    }
});

class Login extends Component {
    
    constructor() {
        super();
        this.onToggle = () => {
            this.props.onToggle(!this.props.isRegisterOpen);
        }
    }
    
    render() {

        return (
            <div className={`container ${this.props.isRegisterOpen ? 'active' : '' }`}>
                <div className="login-card"></div>
                <div className="login-card">
                    <h1 className="title">Login</h1>
                    <form>
                        <div className="input-container">
                            <input type="text" id="username" required="required" />
                            <label>Username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password" required="required" />
                            <label>Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button><span>Go</span></button>
                        </div>
                        <div className="footer"><a href="#">Forgot your password?</a></div>
                    </form>
                </div>
                <div className="login-card alt">
                    <div className="toggle" onClick={this.onToggle}></div>
                    <h1 className="title">
                        Register<div className="close" onClick={this.onToggle}></div>
                    </h1>
                    <form>
                        <div className="input-container">
                            <input type="text" required="required" />
                            <label>Username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" required="required" />
                            <label>Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" required="required" />
                            <label>Repeat Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button><span>Next</span></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);