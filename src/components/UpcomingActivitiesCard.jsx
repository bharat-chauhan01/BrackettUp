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
      <View style={styles.details}>
        <View style={styles.outer}>
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>
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
            <Text style={styles.buttonText}>Directions</Text>
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
    height: 100,
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
  date: {
    fontSize: 12,
    color: 'black',
    marginVertical: 5,
  },
  instructor: {
    fontSize: 12,
    color: 'black',
    marginBottom: 20,
  },
  activityImageUrl: {
    width: 60,
    height: 60,
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
