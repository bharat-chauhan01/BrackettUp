import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';

const LoggedInModal = ({ isVisible, onClose, activity, onConfirm }) => {
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
        <View style={styles.headerContainer}>
          <Text style={styles.checkout}>Checkout</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityContainer}>
          <View style={styles.activityDetails}>
            <Text style={styles.activityName}>{activity?.activityName || 'N/A'}</Text>
            <Text style={styles.activityDetail}>{activity?.time || 'N/A'}</Text>
            <Text style={styles.activityDetail}>
              {activity?.organisationName || 'N/A'} · {activity?.location || 'N/A'}
            </Text>
          </View>
          {activity?.images?.[0]?.uri && (
            <Image source={{ uri: activity.images[0].uri }} style={styles.activityImage} />
          )}
        </View>

        <Text style={styles.cancellationPolicy}>{activity?.cancellationPolicy || 'N/A'}</Text>

        <Text style={styles.credits}>{activity?.credits || 'N/A'} credits</Text>

        <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm reservation</Text>
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
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '38%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkout: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 14,
    marginTop: 8,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'black',
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  activityDetails: {
    flex: 1,
  },
  activityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  activityDetail: {
    fontSize: 15,
    color: 'gray',
    marginTop: 5,
  },
  activityLocation: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  activityImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  cancellationPolicy: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
    opacity: 0.7,
  },
  credits: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 17,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoggedInModal;
