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
  discountCredits,
  percentageDiscount,
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
        {date && (
          <View style={styles.dateTimeContainer}>
            <Text style={styles.details}>{date}</Text>
            <View style={styles.circle} />
            {time && <Text style={styles.details}>{time}</Text>}
          </View>
        )}
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
        {credits && (
          <View style={{ flexDirection: 'row' }}>
            {percentageDiscount && (
              <View style={styles.discountPercentage}>
                <Text style={styles.discountPercentageText}>{percentageDiscount}</Text>
              </View>
            )}
            <View style={styles.creditBox}>
              <View style={[styles.creditsContainer, discountCredits && styles.greyBackground]}>
                <Text style={[styles.creditsText, discountCredits && styles.strikethrough]}>
                  {credits}
                </Text>
              </View>
              {discountCredits && (
                <View style={[styles.creditsContainer, styles.discountedContainer]}>
                  <Text style={[styles.creditsText, { color: 'white' }]}>{discountCredits}</Text>
                </View>
              )}
            </View>
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
    marginLeft: 2,
    fontSize: windowWidth * 0.033,
    color: 'purple',
    fontWeight: '600',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
  },
  details: {
    fontSize: windowWidth * 0.035,
    marginRight: 4,
  },
  discountPercentage: {
    backgroundColor: '#009E60',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditsText: {
    textDecorationStyle: 'line-through',
    fontSize: windowWidth * 0.035,
    color: 'black',
  },
  discountPercentageText: {
    fontSize: windowWidth * 0.035,
    color: 'white',
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
  creditBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  creditsContainer: {
    paddingHorizontal: 3, // Add some padding inside the box
    paddingVertical: 1,
    borderRadius: 5, // Radius to make it a perfect circle
    borderColor: 'black',
    borderWidth: 0.19,
    backgroundColor: '#515656', // Add grey background color
    position: 'relative', // Needed for the diagonal line
  },
  greyBackground: {
    backgroundColor: '#515656', // Add grey background color
    marginHorizontal: 3, // Add space between the boxes
  },
  creditsText: {
    fontSize: 14,
    color: 'white', // Set the text color to black for contrast
  },
  strikethrough: {
    textDecorationLine: 'line-through', // Apply strikethrough style
  },
  discountedContainer: {
    borderColor: '#007FFF',
    backgroundColor: '#007FFF',
  },
});

export default ActivityContainer;
