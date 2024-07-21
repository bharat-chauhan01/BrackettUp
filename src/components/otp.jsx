import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Pressable, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Otp = ({ isFormEditable, numberOfInputs = 6, onSubmit }) => {
  const [code, setCode] = useState('');
  const ref = useRef(null);
  const [error, setError] = useState(undefined);

  const handleChangeText = text => {
    setCode(text);
  };

  useEffect(() => {
    if (code.length === numberOfInputs) {
      onSubmit(code);
    }
  }, [code, numberOfInputs, onSubmit]);

  useEffect(() => {
    // Focus on the first input when the component mounts
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.otpBlockContainer}>
        {Array.from({ length: numberOfInputs }).map((_, index) => {
          const borderColor = index < code.length ? '#999999' : '#ccc';

          return (
            <Pressable
              key={index}
              onPress={() => ref.current?.focus()}
              disabled={!isFormEditable}
              style={[
                styles.otpBlock,
                {
                  borderColor,
                },
              ]}
            >
              <Text style={styles.otpText}>{code[index]}</Text>
            </Pressable>
          );
        })}
      </View>
      <TextInput
        style={styles.textInput}
        returnKeyType="done"
        textContentType="oneTimeCode"
        onChangeText={handleChangeText}
        onFocus={() => setError(undefined)}
        value={code}
        keyboardType="numeric"
        ref={ref}
        maxLength={numberOfInputs}
      />
      {/* <TouchableOpacity style={styles.submitButton} onPress={handleChangeText}>
        <Text style={styles.submitButtonText}>Next</Text>
    </TouchableOpacity> */}
      {error && (
        <View style={styles.errorStyle}>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 'xxl' },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  otpBlockContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  submitButtonText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  verticalBar: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 1,
    height: 20,
    top: 14,
    right: -5,
  },
  errorStyle: {
    flexDirection: 'row',
    paddingVertical: 'm',
    paddingStart: 'm',
  },
  textInput: { position: 'absolute', opacity: 0, top: 0, left: 0 },
  otpText: { textAlign: 'center', color: '#333', fontSize: 22, fontWeight: 'bold' },
  otpBlock: {
    borderRadius: 15,
    borderWidth: 0.9,
    padding: 5,
    width: 48,
    height: 48,
    marginBottom: 25,
    marginLeft: 12,
  },
});

export default Otp;
