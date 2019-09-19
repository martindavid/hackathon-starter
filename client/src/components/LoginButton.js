import React, { Component } from 'react';
import {
 Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
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
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;
    return (
      <div>
        <button type="button" className="btn btn-success" onClick={this.toggle}>
          Login
        </button>
        <Modal isOpen={modal} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <LoginForm />
          </ModalBody>
          <ModalFooter>
            <span className="text-center">Do not have an account? Sign Up</span>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginButton;
