import React from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

const LoginModal = ({onClose}) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalDialog onClose={onClose}>
        <h1>Dialog Content</h1>
        <p>More Content. Anything goes here</p>
      </ModalDialog>
    </ModalContainer>
  );
}

export default LoginModal;