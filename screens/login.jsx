import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
//import { loginUser, clearState } from '../reducers/authSlice';
import { useSelector , useDispatch } from 'react-redux';
import { setLogin } from '../store/slices/loginSlice';
// import { RootState } from '../store/store';

const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.Login.user);

  const onChangeInput = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const onSubmitLogin = () => {
    const { username, password } = user;
    setLoginData = {
      user: {"name":"abc"},
      isLoading: false,
      error : false
    }
    dispatch(setLogin({ setLoginData }));
    navigation.navigate('Home')
  };

//   useEffect(() => {
//     if (isSuccess) {
//       navigation.navigate('Home');
//     }
//   }, [isSuccess, navigation]);

//   useEffect(() => {
//     if (isError) {
//       Toast.show({
//         type: 'error',
//         text1: 'Invalid User name or password',
//         swipeable: true,
//       });
//      // dispatch(clearState());
//     }
//   }, [isError, dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={user.username}
          onChangeText={(text) => onChangeInput('username', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={user.password}
          onChangeText={(text) => onChangeInput('password', text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={onSubmitLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    color: '#000000',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
