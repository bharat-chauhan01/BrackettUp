import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { capitalizeFirstLetter } from '../utils/utils';

const windowWidth = Dimensions.get('window').width;
const fontSize = 15;

const ActivityContainer = ({
  imageUrl,
  title,
  subtitle,
  distance,
  rating,
  ratingCount,
  ratingDesc,
  date,
  time,
  credits,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
        <View style={styles.act}>
          <Text style={styles.subtitle}>{capitalizeFirstLetter(subtitle)}</Text>
          <Text style={styles.distance}>{distance}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            {rating}{' '}
            <MaterialCommunityIcons
              name={styles.itemIcon.name}
              color={styles.itemIcon.color}
              size={styles.itemIcon.size}
            />
          </Text>
          <Text style={styles.ratingCount}>{ratingCount}</Text>
          <Text style={styles.ratingDesc}>{capitalizeFirstLetter(ratingDesc)}</Text>
        </View>
        {date && (
          <View style={styles.dateTimeContainer}>
            <Text style={styles.details}>{date}</Text>
            <View style={styles.circle} />
            {time && <Text style={styles.details}>{time}</Text>}
          </View>
        )}
        {credits && (
          <View style={styles.textBox}>
            <Text style={styles.creditsText}>{credits} credits</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 5,
    width: windowWidth * 0.45,
  },
  image: {
    width: '100%',
    height: windowWidth * 0.29,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 5,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1.25,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: windowWidth * 0.035,
    color: '#666',
    marginBottom: 2,
  },
  act: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  ratingText: {
    fontSize: windowWidth * 0.035,
    color: 'black',
    fontWeight: 'bold',
  },
  ratingDesc: {
    fontSize: windowWidth * 0.033,
    color: 'purple',
    fontWeight: '600',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
    marginTop: 2,
  },
  details: {
    fontSize: windowWidth * 0.035,
    marginRight: 4,
  },
  textBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditsText: {
    fontSize: windowWidth * 0.035,
    color: 'black',
  },
  itemIcon: {
    name: 'star',
    color: '#000000',
    size: fontSize,
  },
  circle: {
    width: 4, // Adjusted size for better visibility
    height: 4,
    borderRadius: 2, // Radius to make it a perfect circle
    backgroundColor: 'black',
    marginHorizontal: 6, // Adjusted margin for better spacing
  },
});

export default ActivityContainer;
