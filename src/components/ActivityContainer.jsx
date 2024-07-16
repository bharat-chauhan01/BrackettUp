import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { capitalizeFirstLetter } from '../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const fontSize = 15;

const ActivityContainer = ({
  imageUrl,
  title,
  subtitle,
  activity,
  distance,
  rating,
  ratingCount,
  ratingDesc,
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
        <Text style={styles.activity}>{capitalizeFirstLetter(activity)}</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.44,
    height: windowHeight * 0.24,
    borderRadius: 5,
    borderWidth:0.1,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginHorizontal: '0.5%',
    padding: '1.5%',
  },
  image: {
    width: '100%',
    height: '53%',
    borderRadius: 10,
  },
  textContainer: {
    marginTop: '2%',
  },
  title: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1.25,
  },
  subtitle: {
    fontSize: windowWidth * 0.035,
    color: '#666',
  },
  act: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: windowWidth * 0.005,
  },
  rating: {
    fontSize: windowWidth * 0.033,
    color: '#666',
  },
  itemIcon: {
    name: 'star',
    color: '#000000',
    size: fontSize,
  },
  activity: {
    fontSize: windowWidth * 0.035,
    color: '#666',
  },
  ratingText: {
    fontSize: windowWidth * 0.035,
    color: 'black',
    marginTop: '1%',
    fontWeight: 'bold',
  },
  ratingDesc: {
    fontSize: windowWidth * 0.033,
    color: 'purple',
    fontWeight: '600',
  },
});

export default ActivityContainer;
