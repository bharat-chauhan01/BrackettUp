// SortPickerModal.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

const SortPickerModal = ({ visible, onClose, selectedOption, onSelect, sortOptions }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.pickerContainer}>
              {sortOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.radioButtonContainer}
                  onPress={() => {
                    onSelect(option.value);
                    onClose();
                  }}
                >
                  <Text style={styles.radioButtonLabel}>{option.label}</Text>
                  <RadioButton
                    value={option.value}
                    color="black"
                    status={selectedOption === option.value ? 'checked' : 'unchecked'}
                    onPress={() => {
                      onSelect(option.value);
                      onClose();
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
  },
  radioButtonLabel: {
    fontSize: 15,
    color: 'black',
  },
});

export default SortPickerModal;
