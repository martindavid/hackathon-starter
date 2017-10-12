import React, { Component } from 'react';

import LoginModal from './LoginModal';

class LoginButton extends Component {
  // TODO: temp code to test react-modal
  state = {
    shoModal: false
  }

  openModal = () => {
    this.setState({ showModal: true });
  }
  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <button onClick={this.openModal}
        className="btn btn-outline-warning my-2 my-sm-0">
        Login
        {this.state.showModal ?
          <LoginModal onClose={this.closeModal} />
          : null}
      </button>
    )
  }
}

export default LoginButton;