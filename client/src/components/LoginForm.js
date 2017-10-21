import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  FormGroup,
  Input } from 'reactstrap';

const LoginForm = () =>
  (
    <div className='form-signin'>
      <Form>
        <FormGroup>
          <InputGroup>
            <Input
              type='text'
              name='text'
              id='username'
              placeholder='Username'
            />
            <InputGroupAddon><i className='fa fa-envelope' /></InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
            <InputGroupAddon><i className='fa fa-lock' /></InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <Button color='danger' className='col-sm-12'>
          <i className='fa fa-unlock' />&nbsp;Log In
        </Button>
      </Form>
      <hr />
      <div className='social-login'>
        <Button className='col-sm-12 social-login-fb'>
          <i className='fa fa-facebook' /> | Log in with Facebook
        </Button>
        <Button className='col-sm-12 social-login-twitter'>
          <i className='fa fa-twitter' /> | Log in with Twitter
        </Button>
        <Button className='col-sm-12 social-login-instagram'>
          <i className='fa fa-instagram' /> | Log in with Instagram
        </Button>
        <Button className='col-sm-12 social-login-linkedin'>
          <i className='fa fa-linkedin' /> | Log in with Linkedin
        </Button>
        <Button className='col-sm-12 social-login-google'>
          <i className='fa fa-google' /> | Log in with Google
        </Button>
      </div>
    </div>
  );

export default LoginForm;
