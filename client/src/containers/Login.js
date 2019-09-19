import React from 'react';

const Login = () => (
  <div className="form-signin">
    <h2 className="form-signin-heading">Please sign in</h2>
    <label htmlFor="input-email" className="sr-only">
      Email address
      <input
        id="input-email"
        type="email"
        className="form-control"
        placeholder="Email address"
      />
    </label>
    <label htmlFor="input-password" className="sr-only">
      Password
      <input
        id="input-password"
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
      />
    </label>
    <div className="checkbox">
      <label htmlFor="remember-me">
        <input id="remember-me" type="checkbox" value="remember-me" />
        {' '}
Remember
        me
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="button">
      <i className="fa fa-unlock" />
      {' '}
Sign in
    </button>
    <button className="btn btn-lg btn-info btn-block" type="button">
      <i className="fa fa-facebook" />
      {' '}
| Sign in with Facebook
    </button>
    <button className="btn btn-lg btn-info btn-block" type="button">
      <i className="fa fa-twitter" />
      {' '}
| Sign in with Twitter
    </button>
    <button className="btn btn-lg btn-info btn-block" type="button">
      <i className="fa fa-google" />
      {' '}
| Sign in with Google
    </button>
    <button className="btn btn-lg btn-info btn-block" type="button">
      <i className="fa fa-linkedin" />
      {' '}
| Sign in with Linkedin
    </button>
    <button className="btn btn-lg btn-info btn-block" type="button">
      <i className="fa fa-instagram" />
      {' '}
| Sign in with Instagram
    </button>
  </div>
);

export default Login;
