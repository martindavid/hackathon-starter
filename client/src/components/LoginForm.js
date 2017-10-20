import React from 'react';

const LoginForm = () => {
  return (
    <div className='form-signin'>
      <h2 className='form-signin-heading'>Please sign in</h2>
      <label className='sr-only'>Email address</label>
      <input type='email' className='form-control' placeholder='Email address' />
      <label className='sr-only'>Password</label>
      <input type='password' className='form-control' placeholder='Password' />
      <div className='checkbox'>
        <input type='checkbox' value='remember-me' /> Remember me
      </div>
      <button className='btn btn-lg btn-primary btn-block' type='button'>
        <i className='fa fa-unlock' /> Sign in</button>
      <button className='btn btn-lg btn-info btn-block' type='button'>
        <i className='fa fa-facebook' /> | Sign in with Facebook</button>
      <button className='btn btn-lg btn-info btn-block' type='button'>
        <i className='fa fa-twitter' /> | Sign in with Twitter</button>
      <button className='btn btn-lg btn-info btn-block' type='button'>
        <i className='fa fa-google' /> | Sign in with Google</button>
      <button className='btn btn-lg btn-info btn-block' type='button'>
        <i className='fa fa-linkedin' /> | Sign in with Linkedin</button>
      <button className='btn btn-lg btn-info btn-block' type='button'>
        <i className='fa fa-instagram' /> | Sign in with Instagram</button>
    </div>
  );
};

export default LoginForm;