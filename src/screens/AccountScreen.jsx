import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Grayscale } from 'react-native-color-matrix-image-filters';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { renderHeader } from '../modals/HeaderModal';
import { getItem } from '../store/LocalStorage';
import { fetchAccountData } from '../apis/CommonApi';
import { saveAccountData, requestPhoneOtp, requestEmailOtp } from '../apis/AccountApi';
import VerificationModal from '../modals/VerificationModal';

const AccountScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [accountData, setAccountData] = useState([]);
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSubtitle, setModalSubtitle] = useState('');
  const [type, setType] = useState('');
  const [otp, setOtp] = useState('');
  const [oldMobileNumber, setOldMobileNumber] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [reload, setReload] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const loadUser = async () => {
    setLoading(true);
    try {
      const auth = await getItem('auth');
      setUser(auth);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (title, subtitle, type, value) => {
    try {
      setModalTitle(title);
      setModalSubtitle(subtitle);
      setType(type);
      setModalVisible(true);

      if (type === 'phone') {
        requestPhoneOtp(value);
      } else {
        requestEmailOtp(value);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOtpSubmit = () => {
    console.log('OTP submitted:', otp);
    setModalVisible(false);
    setOtp('');
  };

  const reloadAccountData = () => {
    setReload(!reload);
  };
  const handleSave = async () => {
    setLoading(true);
    try {
      const payload = {
        firstName,
        lastName,
        gender,
      };
      const response = await saveAccountData(payload);
      await new Promise(resolve => setTimeout(resolve, 500));
      Alert.alert('Success', 'Your account information has been updated.');
      setReload(true);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadAccountData = async () => {
    setLoading(true);
    try {
      const data = await fetchAccountData();
      setAccountData(data);
      setFirstName(data.firstName || '');
      setLastName(data.lastName || '');
      setGender(data.gender || null);
      setMobileNumber(data.mobile || '');
      setOldMobileNumber(data.mobile || '');
      setEmail(data.email || '');
      setOldEmail(data.email || '');
    } catch (error) {
      console.error(error);
      setAccountData([]);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        loadUser();
      }
    }, [isFocused]),
  );

  useEffect(() => {
    if (user) {
      loadAccountData();
    } else {
      setAccountData([]);
    }
  }, [user, reload]);

  return (
    <>
      {renderHeader(navigation, 'Accounts')}
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset="0">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : user ? (
            <View>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
              />

              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last Name"
              />

              <Text style={styles.label}>Gender</Text>
              <View>
                <View style={styles.genderContainer}>
                  <TouchableOpacity
                    style={[styles.genderOption, gender === 'male' && styles.selectedGender]}
                    onPress={() => setGender('male')}
                  >
                    {gender === 'male' ? (
                      <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9193/9193899.png' }}
                        style={styles.genderIcon}
                      />
                    ) : (
                      <Grayscale>
                        <Image
                          source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/9193/9193899.png',
                          }}
                          style={styles.genderIcon}
                        />
                      </Grayscale>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.genderOption, gender === 'female' && styles.selectedGender]}
                    onPress={() => setGender('female')}
                  >
                    {gender === 'female' ? (
                      <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png' }}
                        style={styles.genderIcon}
                      />
                    ) : (
                      <Grayscale>
                        <Image
                          source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png',
                          }}
                          style={styles.genderIcon}
                        />
                      </Grayscale>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.saveContainer}>
                  <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>SAVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Mobile Number</Text>
              </View>
              <View style={styles.updateContainer}>
                <TextInput
                  style={styles.inputOtp}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  placeholder="Mobile Number"
                  keyboardType="phone-pad"
                />

                <TouchableOpacity
                  onPress={() =>
                    handleOpenModal(
                      'OTP Verification',
                      `Enter OTP sent to +91${mobileNumber}`,
                      'phone',
                      oldMobileNumber,
                    )
                  }
                >
                  <Text style={styles.updateButton}>Update</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.infoRow, { marginTop: 10 }]}>
                <Text style={styles.infoLabel}>Email ID </Text>
              </View>
              <View style={styles.updateContainer}>
                <TextInput
                  style={styles.inputOtp}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email ID"
                  keyboardType="email-address"
                />
                <TouchableOpacity
                  onPress={() =>
                    handleOpenModal(
                      'OTP Verification',
                      `Enter OTP sent to ${email}`,
                      'email',
                      oldEmail,
                    )
                  }
                >
                  <Text style={styles.updateButton}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.notLoggedInContainer}>
              <Text style={styles.noActivities}>Please log in to update your account.</Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
        <VerificationModal
          visible={modalVisible}
          onClose={() => {
            handleCloseModal();
            reloadAccountData();
          }}
          onSubmit={handleOtpSubmit}
          otp={otp}
          setOtp={setOtp}
          title={modalTitle}
          subtitle={modalSubtitle}
          type={type}
          value={type === 'phone' ? mobileNumber : email}
          oldValue={type === 'phone' ? oldMobileNumber : oldEmail}
          newValueUpdate={type === 'phone' ? setOldMobileNumber : setOldEmail}
        />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    paddingLeft: 5,
    fontSize: 14,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 14,
    fontSize: 16,
  },
  inputOtp: {
    height: 40,
    fontSize: 16,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    // marginBottom: 20,
  },
  genderOption: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 50,
    padding: 5,
  },
  genderIcon: {
    width: 85,
    height: 85,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  saveContainer: {
    // paddingHorizontal: 78,
  },
  updateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  noActivities: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  notLoggedInContainer: {
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
  },
  updateButton: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 14,
  },
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
    // marginBottom: 15,
    color: 'black',
  },
  otpInput: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    width: '100%',
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
  otpContainer: {
    flexDirection: 'row',
    borderColor: '#ccc',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  otpInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',

    borderRadius: 5,

    fontSize: 18,
    marginRight: 10,
  },
});

export default AccountScreen;
