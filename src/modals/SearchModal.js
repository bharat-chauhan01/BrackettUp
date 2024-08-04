import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { capitalizeFirstLetter } from '../utils/utils';

const SearchModal = ({
  activityName,
  distance,
  organisation,
  rating,
  categories,
  time,
  credits,
  imageSource,
  ratingCount,
  ratingDesc,
}) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.infocontainer}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.activityName}>{activityName}</Text>
          <Text style={styles.property}>{organisation}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {rating}{' '}
              <MaterialCommunityIcons
                name={styles.itemIcon.name}
                color={styles.itemIcon.color}
                size={styles.itemIcon.size}
              />
            </Text>
            <Text style={styles.ratingCount}>{' (' + ratingCount + ')  '}</Text>
            <Text style={styles.ratingDesc}>{capitalizeFirstLetter(ratingDesc)}</Text>
          </View>
          <View style={styles.distanceAndCreditsContainer}>
            <MaterialCommunityIcons
              name={'google-maps'}
              color={'black'}
              size={styles.distance.fontSize}
            />
            <Text style={styles.distance}>{distance}</Text>
            <View style={styles.creditsBox}>
              <Text style={styles.creditsText}>{credits}</Text>
            </View>
          </View>
          <Text style={styles.property}>{categories.join(', ')}</Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        {time.map((t, index) => (
          <View key={index} style={styles.timeBox}>
            <Text style={styles.timeText}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column', // Align children vertically
    backgroundColor: 'white',
  },
  infocontainer: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    flex: 1, // Take up available space
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
    alignSelf: 'flex-start',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between', // Ensure space between elements
  },
  activityName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  distanceAndCreditsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  distance: {
    fontSize: 14,
    color: 'black',
  },
  creditsBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditsText: {
    fontSize: 14,
    color: 'black',
  },
  property: {
    fontSize: 14,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  timeBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginRight: 10,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 14,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
  itemIcon: {
    name: 'star',
    color: '#FFBF00',
    size: 12,
  },
  ratingText: {
    fontSize: 12,
    color: 'black',
    marginTop: '1%',
    fontWeight: 'bold',
  },
  ratingDesc: {
    fontSize: 12,
    color: 'purple',
    fontWeight: '600',
  },
});

export default SearchModal;
