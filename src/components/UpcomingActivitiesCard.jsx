import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { transformDateByReferenceDayAndDDMMM } from '../utils/utils';

const UpcomingActivitiesCard = ({
  title,
  date,
  time,
  instructor,
  institution,
  activityImageUrl,
}) => {
  return (
    <View style={styles.card}>
      <Image source={require('./mapImage.jpg')} style={styles.mapImage} />
      <View style={styles.details}>
        <View style={styles.outer}>
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>
              {transformDateByReferenceDayAndDDMMM(date)} · {time}
            </Text>
            <Text style={styles.instructor}>
              {instructor} | {institution}
            </Text>
          </View>
          <Image source={{ uri: activityImageUrl }} style={styles.activityImageUrl} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name={styles.directionIcon.name}
              color={styles.directionIcon.color}
              size={styles.directionIcon.size}
            />
            <Text style={styles.buttonText}>Map</Text>
          </View>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name={styles.calendarIcon.name}
              color={styles.calendarIcon.color}
              size={styles.calendarIcon.size}
            />
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </View>
      </View>
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
  mapImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
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
  subtitle: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  instructor: {
    fontSize: 14,
    color: 'black',
  },
  activityImageUrl: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    gap: 4,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  directionIcon: {
    name: 'directions',
    color: '#000000',
    size: 14,
  },
  calendarIcon: {
    name: 'calendar',
    color: '#000000',
    size: 14,
  },
});

export default UpcomingActivitiesCard;
