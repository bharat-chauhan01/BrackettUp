import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';

const CancellationModal = ({ visible, onClose, onConfirm }) => {
  const [cancellationReason, setCancellationReason] = useState('');

  const handleConfirm = () => {
    onConfirm(cancellationReason);
    setCancellationReason(''); // Clear input after confirmation
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Are you sure you want to cancel this class ?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter reason for cancellation"
            value={cancellationReason}
            onChangeText={setCancellationReason}
          />
          <View style={styles.modalButtonContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="Confirm"
                onPress={handleConfirm}
                disabled={!cancellationReason.trim()} // Disable when empty
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Cancel" onPress={onClose} color="black" />
            </View>
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
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the buttons
    width: '100%',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5, // Adds space between buttons
  },
});

export default CancellationModal;
