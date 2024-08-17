import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Otp from '../components/otp';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLogin } from '../store/slices/loginSlice';
import { validateMobileNumber } from '../validator/MobileValidator';
import { requestOtp, validateOtp } from '../apis/AuthApi';

const { width } = Dimensions.get('window');

const PhoneNumberLogin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [timerCount, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = value => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer(value);
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const onPhoneNumberSubmit = () => {
    try {
      validateMobileNumber(phoneNumber);
      requestOtp(phoneNumber);
      Toast.show({
        type: 'success',
        text1: 'Otp sent',
        swipeable: true,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.message,
        swipeable: true,
      });
      return;
    }
    startTimer(20);
    setShowOtpInput(true);
  };

  const onSubmitOtp = async otpValue => {
    try {
      const res = await validateOtp(phoneNumber, otpValue);
      console.log('res ', res);
      dispatch(setLogin({ res }));
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: error.message,
        swipeable: true,
      });
      return;
    }
    navigation.navigate('Landing');
  };

  const onChangePhoneNumber = () => {
    setShowOtpInput(false);
  };

  return (
    <LinearGradient
      colors={['#FF6F61', '#FFD54F']} // Background gradient colors
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          {!showOtpInput && (
            <View style={styles.content}>
              <Text style={styles.subTitle}>We will send you One Time SMS for authentication</Text>
              <View style={styles.phoneContainer}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  style={styles.phoneNumberInput}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
              <TouchableOpacity style={styles.submitButton} onPress={onPhoneNumberSubmit}>
                <LinearGradient
                  colors={['#00B4DB', '#00BFFF']} // Gradient colors for the submit button
                  style={styles.submitButtonGradient}
                >
                  <Text style={styles.submitButtonText}>Continue</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
          {showOtpInput && (
            <View style={styles.content}>
              <View style={styles.row}>
                <Text style={styles.infoText}>OTP sent on:</Text>
                <Text style={[styles.infoText, { fontWeight: 'bold' }]}>{phoneNumber}</Text>
                <TouchableOpacity onPress={onChangePhoneNumber}>
                  <Text style={styles.phoneEdit}>(edit)</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.otpContainer}>
                <Otp isFormEditable={true} numberOfInputs={6} onSubmit={onSubmitOtp} />
              </View>
              <TouchableOpacity
                style={[styles.submitButton, { width: '80%' }]}
                onPress={onSubmitOtp}
              >
                <LinearGradient
                  colors={['#00B4DB', '#00BFFF']} // Gradient colors for the submit button
                  style={styles.submitButtonGradient}
                >
                  <Text style={styles.submitButtonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.resendCodeHint}>Haven't received any code?</Text>
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={onPhoneNumberSubmit}
                  disabled={timerCount > 0}
                  style={{ opacity: timerCount > 0 ? 0.5 : 1 }}
                >
                  <Text style={styles.resendText}>RESEND NEW CODE</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.timer}>
                {timerCount > 0 ? `after ${timerCount} seconds` : ''}
              </Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  form: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  otpContainer: {
    marginTop: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  countryCode: {
    fontSize: 20,
    color: '#555',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  submitButton: {
    width: '100%',
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  submitButtonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
  phoneEdit: {
    fontSize: 15,
    color: '#007BFF',
    marginLeft: 5,
  },
  resendText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  resendCodeHint: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
  },
  timer: {
    fontSize: 15,
    color: '#555',
  },
  subTitle: {
    marginBottom: 20,
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  logintitle: {
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PhoneNumberLogin;
