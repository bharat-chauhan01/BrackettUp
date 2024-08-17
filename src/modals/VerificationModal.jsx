import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import {
  requestPhoneOtp,
  requestEmailOtp,
  validatePhoneOtp,
  validateEmailOtp,
  saveAccountData,
} from '../apis/CommonApi';

const resendOtp = async (type, value, onClose) => {
  try {
    if (type === 'phone') {
      await requestPhoneOtp(value);
    } else if (type === 'email') {
      await requestEmailOtp(value);
    }
    Alert.alert('OTP Resent', `An OTP has been resent to ${value}`, [{ text: 'OK' }]);
  } catch (error) {
    Alert.alert(error.message);
  }
};

const handleOtpSubmit = async (type, oldValue, value, otp, setOtp, onClose, newValueUpdate) => {
  try {
    if (type === 'phone') {
      await validatePhoneOtp(oldValue, value, otp);
      await saveAccountData({ mobile: value });
    } else if (type === 'email') {
      await validateEmailOtp(oldValue, value, otp);
      await saveAccountData({ email: value });
    }
    Alert.alert('Success', 'OTP validated successfully!', [
      {
        text: 'OK',
        onPress: () => {
          setOtp('');
          newValueUpdate(value);
          onClose();
        },
      },
    ]);
  } catch (error) {
    Alert.alert('Error', error.message, [{ text: 'OK', onPress: () => setOtp('') }]);
  }
};

const VerificationModal = ({
  visible,
  onClose,
  otp,
  setOtp,
  title,
  subtitle,
  type,
  value,
  oldValue,
  newValueUpdate,
}) => {
  const handleRequestClose = onClose || (() => {});

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={handleRequestClose}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalsubTitle}>{subtitle}</Text>

          <View style={styles.otpContainer}>
            <TextInput
              style={styles.otpInput}
              value={otp}
              onChangeText={setOtp}
              placeholder="OTP"
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => resendOtp(type, value, onClose)}>
              <Text style={styles.updateButton}>Resend</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() =>
                handleOtpSubmit(type, oldValue, value, otp, setOtp, onClose, newValueUpdate)
              }
            >
              <Text style={styles.modalButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: 'black',
  },
  modalsubTitle: {
    fontSize: 16,
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  otpInput: {
    flex: 1,
    height: 50,
    fontSize: 18,
    marginRight: 10,
  },
  updateButton: {
    color: 'black',
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VerificationModal;
