import React from 'react';
import { View } from 'react-native';
import RNModal from 'react-native-modal';

const Modal = ({ children, isVisible, closeModal }) => {
  return (
    <RNModal isVisible={isVisible} onBackdropPress={closeModal}>
      {children}
    </RNModal>
  );
};

export default Modal;
