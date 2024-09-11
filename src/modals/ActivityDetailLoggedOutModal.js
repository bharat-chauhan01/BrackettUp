import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const LoggedOutModal = ({ isVisible, onLogin, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropColor="black"
      backdropOpacity={0.5}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Please login to make Reservation</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={onLogin}
          accessibilityRole="button"
          accessibilityLabel="Go to Login"
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
  },
  loginButton: {
    paddingHorizontal: 20,
    backgroundColor: '#000000',
    paddingVertical: 5,
    borderRadius: 30,
    width: '80%'
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default LoggedOutModal;
