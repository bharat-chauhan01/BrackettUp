import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { capitalizeFirstLetter } from '../utils/utils';
import { useNavigation } from '@react-navigation/native';

const HomeScreenExtraComponent = ({
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
  discountCredits,
  discountPercentage,
}) => {
  const navigation = useNavigation();

  // Helper function to split text into multiple lines with 2 words each
  const splitTextIntoTwoWordsPerLine = text => {
    if (!text) return [];
    const words = text.split(' '); // Split the text into words
    const lines = [];
    for (let i = 0; i < words.length; i += 2) {
      lines.push(words.slice(i, i + 2).join(' ')); // Join every two words into a line
    }
    return lines;
  };

  const splitTextIntoThreeWordsPerLine = text => {
    if (!text) return [];
    const words = text.split(' '); // Split the text into words
    const lines = [];
    for (let i = 0; i < words.length; i += 3) {
      lines.push(words.slice(i, i + 3).join(' ')); // Join every three words into a line
    }
    return lines;
  };

  const handleTimePress = activityId => {
    navigation.navigate('ActivityDetail', activityId);
  };

  // Split activityName and organisation into lines of two or three words each
  const activityNameLines = splitTextIntoTwoWordsPerLine(activityName);
  const organisationLines = splitTextIntoThreeWordsPerLine(organisation);

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageSource }} style={styles.image} />
          {discountPercentage && (
            <View style={styles.discountBox}>
              <Text style={styles.discountText}>{discountPercentage}% OFF</Text>
            </View>
          )}
        </View>
        <View style={styles.textContainer}>
          {activityNameLines.map((line, index) => (
            <Text key={`activity-${index}`} style={styles.activityName}>
              {line}
            </Text>
          ))}
          {organisationLines.map((line, index) => (
            <Text key={`organisation-${index}`} style={styles.property}>
              {line}
            </Text>
          ))}
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {rating}
              {''}
              <MaterialCommunityIcons
                name={styles.itemIcon.name}
                color={styles.itemIcon.color}
                size={styles.itemIcon.size}
              />
            </Text>
            <Text style={styles.ratingCount}>{'(' + ratingCount + ') '}</Text>
            <View style={styles.labelContainer}>
              <Text style={styles.ratingDesc}>{capitalizeFirstLetter(ratingDesc)}</Text>
            </View>
          </View>
          <View style={styles.distanceAndCreditsContainer}>
            <MaterialCommunityIcons
              name={'google-maps'}
              color={'black'}
              size={styles.distance.fontSize}
            />
            <Text style={styles.distance}>{distance}</Text>
            {discountCredits && credits ? (
              <View style={[styles.creditsContainer, styles.discountedContainer]}>
                <Text style={[styles.creditsText, { marginRight: 2, color: 'white' }]}>
                  {discountCredits}
                </Text>
                <Text style={[styles.creditsText, { textDecorationLine: 'line-through' }]}>
                  ({credits})
                </Text>
              </View>
            ) : credits ? (
              <View style={[styles.creditsContainer, styles.discountedContainer]}>
                <Text style={styles.creditsText}>{credits}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>

      {time && time.length > 0 && (
        <View style={styles.timeContainer}>
          {time.map((t, index) => (
            <TouchableOpacity key={index} onPress={() => handleTimePress(t.activityClassId)}>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>{t.value}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    overflow: 'hidden', // Ensures children are clipped to the card's border radius
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 140,
    height: 110,
    borderRadius: 10,
    marginRight: 15,
  },
  discountBox: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50', // Green background
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  activityName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  distanceAndCreditsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  distance: {
    fontSize: 14,
    color: 'black',
    marginRight: 10,
  },
  creditsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#515656',
    alignItems: 'center',
  },
  discountedContainer: {
    borderColor: '#007FFF',
    backgroundColor: '#007FFF',
  },
  creditsText: {
    fontSize: 12,
    color: 'white',
  },
  property: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  timeBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 10,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 14,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  ratingDesc: {
    fontSize: 12,
    color: '#8a288f',
    fontWeight: '500',
    marginLeft: 5,
  },
  itemIcon: {
    name: 'star',
    color: '#FFBF00',
    size: 12,
  },
});

export default HomeScreenExtraComponent;
