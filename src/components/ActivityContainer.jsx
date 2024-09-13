import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
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
  duration,
  credits,
  discountCredits,
  percentageDiscount,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{capitalizeFirstLetter(ratingDesc)}</Text>
        </View>
        {duration && (
          <View style={styles.labelTimeContainer}>
            <MaterialCommunityIcons
              name='timer-outline'
              color='black'
              size={styles.labelText.fontSize}
            />
            <Text style={styles.labelText}>{duration} min</Text>
          </View>
        )}
      </ImageBackground>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
        <View style={styles.act}>
          <Text style={styles.subtitle}>{capitalizeFirstLetter(subtitle)} · </Text>
          <Text style={styles.subtitle}>{distance}</Text>
        </View>
      </View>
      <View>
        {date && (
          <View style={styles.dateTimeContainer}>
            <Text style={styles.details}>{date}</Text>
            {percentageDiscount && (
              <View style={styles.discountPercentage}>
                <Text style={styles.discountPercentageText}>{percentageDiscount}</Text>
              </View>
            )}
          </View>
        )}
      </View>

      <View style={styles.ratingContainer}>
        <View style={styles.ratingDetails}>
          <Text style={styles.ratingText}>
            {rating}{' '}
            <MaterialCommunityIcons
              name={styles.itemIcon.name}
              color={styles.itemIcon.color}
              size={styles.itemIcon.size}
            />
          </Text>
        </View>

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
    position: 'relative',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 0.1,
    right: 0.1,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  labelTimeContainer: {
    flexDirection: 'row',
    alignItems:'center',
    position: 'absolute',
    top: 0.1,
    right: 0.1,
    backgroundColor: '#FFF5EE',
    borderTopRightRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  labelText: {
    marginLeft: 2,
    fontSize: windowWidth * 0.03,
    color: '#8a288f',
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: windowWidth * 0.29,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 5,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },

  ratingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: windowWidth * 0.035,
    color: 'black',
    fontWeight: 'bold',
  },
  ratingCount: {
    color: 'gray',
    marginLeft: 4,
  },
  ratingDesc: {
    marginLeft: 2,
    fontSize: windowWidth * 0.033,
    color: 'purple',
    fontWeight: '600',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: windowWidth * 0.035,
    marginRight: 4,
  },
  discountPercentage: {
    backgroundColor: '#009E60',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountPercentageText: {
    fontSize: windowWidth * 0.036,
    color: 'white',
  },
  creditsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 3,
    paddingBottom: 1,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.19,
    backgroundColor: '#515656',
  },
  greyBackground: {
    backgroundColor: '#515656',
    marginHorizontal: 3,
  },
  creditsText: {
    fontSize: windowWidth * 0.03,
    color: 'white',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  discountedContainer: {
    borderColor: '#007FFF',
    backgroundColor: '#007FFF',
  },
  itemIcon: {
    name: 'star',
    color: '#000000',
    size: fontSize,
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'black',
    marginHorizontal: 6,
  },
  creditBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  imageStyle: {
    borderRadius: 10,
  },
});

export default ActivityContainer;
