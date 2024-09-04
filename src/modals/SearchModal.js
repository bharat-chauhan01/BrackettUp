import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { capitalizeFirstLetter } from '../utils/utils';
import { useNavigation } from '@react-navigation/native';

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
      lines.push(words.slice(i, i + 3).join(' ')); // Join every two words into a line
    }
    return lines;
  };

  const handleTimePress = activityId => {
    navigation.navigate('ActivityDetail', activityId);
  };

  // Split activityName and organisation into lines of two words each
  const activityNameLines = splitTextIntoTwoWordsPerLine(activityName);
  const organisationLines = splitTextIntoThreeWordsPerLine(organisation);

  return (
    <View style={styles.topContainer}>
      <View style={styles.infocontainer}>
        <Image source={{ uri: imageSource }} style={styles.image} />
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
              {rating}{' '}
              <MaterialCommunityIcons
                name={styles.itemIcon.name}
                color={styles.itemIcon.color}
                size={styles.itemIcon.size}
              />
            </Text>
            <Text style={styles.ratingCount}>{' (' + ratingCount + ') '}</Text>
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
        </View>
      </View>

      {time && time.length > 0 && (
        <View style={styles.timeContainer}>
          {time.map((t, index) => (
            <TouchableOpacity onPress={() => handleTimePress(t.activityClassId)}>
              <View key={index} style={styles.timeBox}>
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
  topContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  infocontainer: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
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
  },
  distance: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
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
    color: 'black',
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
    paddingHorizontal: 6,
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
    marginTop: 5,
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
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 2,
  },
  ratingDesc: {
    fontSize: 12,
    color: 'purple',
    fontWeight: '600',
    marginLeft: 2,
  },
});

export default SearchModal;
