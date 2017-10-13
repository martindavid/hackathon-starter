import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <label class="sr-only">Email address</label>
        <input type="email" className="form-control" placeholder="Email address" />
        <label class="sr-only">Password</label>
        <input type="password" className="form-control" placeholder="Password" />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="button"><i className="fa fa-unlock"></i> Sign in</button>
        <button className="btn btn-lg btn-info btn-block" type="button"><i className="fa fa-facebook"></i> | Sign in with Facebook</button>
        <button className="btn btn-lg btn-info btn-block" type="button"><i className="fa fa-twitter"></i> | Sign in with Twitter</button>
        <button className="btn btn-lg btn-info btn-block" type="button"><i className="fa fa-google"></i> | Sign in with Google</button>
        <button className="btn btn-lg btn-info btn-block" type="button"><i className="fa fa-linkedin"></i> | Sign in with Linkedin</button>
        <button className="btn btn-lg btn-info btn-block" type="button"><i className="fa fa-instagram"></i> | Sign in with Instagram</button>
      </div>
    )
  }
}

export default Login;