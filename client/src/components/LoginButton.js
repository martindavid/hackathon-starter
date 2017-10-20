import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';
import LoginForm from './LoginForm';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <button className='btn btn-success' onClick={this.toggle}>
          Login
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Ready to Leave</ModalHeader>
          <ModalBody>
            <LoginForm />
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
            <Button color='primary' onClick={this.toggle}>Logout</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginButton;
