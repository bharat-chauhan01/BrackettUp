import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = ({ username, onLogout }) => {
  return (
    <View style={styles.userProfileContainer}>
      <Text style={styles.usernameText}>{username}</Text>
      <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  userProfileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default UserProfile;
