import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { transformDateByReferenceDayAndDDMMM } from '../utils/utils';
import CancellationModal from '../modals/ClassCancellationModal';
import { cancelReservation } from '../apis/ReservationApi';

// Main Component
const UpcomingActivitiesCard = ({
  title,
  date,
  time,
  instructor,
  institution,
  activityImageUrl,
  activityClassId,
  coordinates,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancelPress = () => {
    setModalVisible(true);
  };

  const handleConfirmCancel = async reason => {
    try {
      await cancelReservation(activityClassId, reason);
    } catch (error) {
      Alert.alert('', error.message);
    }

    setModalVisible(false);
  };

  const handleDirectionsPress = () => {
    if (coordinates && coordinates.latitude && coordinates.longitude) {
      const { latitude, longitude } = coordinates;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
      Linking.openURL(url).catch(err => {
        console.error('Failed to open URL:', err);
        Alert.alert('Error', 'Unable to open Google Maps.');
      });
    } else {
      Alert.alert('Error', 'Invalid coordinates.');
    }
  };

  const handleAddPress = () => {
    const eventTitle = encodeURIComponent(title);
    const eventDescription = encodeURIComponent(`${instructor} at ${institution}`);
    // const eventStartDate = new Date(date + ' ' + time).toISOString().replace(/-|:|\.\d+/g, '');
    // const eventEndDate = new Date(new Date(date + ' ' + time).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, ''); // 1-hour event

    // const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDescription}&dates=${eventStartDate}/${eventEndDate}`;

    // Linking.openURL(url).catch((err) => {
    //   console.error("Failed to open URL:", err);
    //   Alert.alert('Error', 'Unable to open Google Calendar.');
    // });
  };

  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.outer}>
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>
              {transformDateByReferenceDayAndDDMMM(date)} · {time}
            </Text>
            {/* Instructor and Institution Rows */}
            <View style={styles.row}>
              <MaterialCommunityIcons name="account" color="#000" size={14} style={styles.icon} />
              <Text style={styles.instructor}>{instructor}</Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons name="school" color="#000" size={14} style={styles.icon} />
              <Text style={styles.instructor}>{institution}</Text>
            </View>
          </View>
          <Image source={{ uri: activityImageUrl }} style={styles.activityImageUrl} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <MaterialCommunityIcons name="directions" color="#000" size={14} />
            <TouchableOpacity onPress={handleDirectionsPress}>
              <Text style={styles.buttonText}>Directions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <MaterialCommunityIcons name="calendar" color="#000" size={14} />
            <TouchableOpacity onPress={handleAddPress}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <MaterialCommunityIcons name="cancel" color="#000" size={14} />
            <TouchableOpacity onPress={handleCancelPress}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Render CancellationModal */}
      <CancellationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  details: {
    padding: 15,
  },
  outer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  date: {
    fontSize: 12,
    color: 'black',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  icon: {
    marginRight: 5,
  },
  instructor: {
    fontSize: 12,
    color: 'black',
  },
  activityImageUrl: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    gap: 4,
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
  },
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
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default UpcomingActivitiesCard;
