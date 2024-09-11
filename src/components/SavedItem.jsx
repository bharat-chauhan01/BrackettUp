import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { setItem } from '../store/LocalStorage';

const SavedItem = ({ data }) => {
  const [savedData, setSavedData] = useState(data);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setSavedData(data);
    }, [data]),
  );

  const removeItem = async id => {
    const afterremove = savedData.filter(item => item.id !== id);
    setSavedData(afterremove);
    setItem('savedData', afterremove);
  };

  const renderItem = item => (
    <View key={item.id}>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.distance}>{item.distance}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.rating.value}</Text>
            <MaterialCommunityIcons
              name={styles.starIcon.name}
              size={styles.starIcon.size}
              style={styles.starIcon}
            />
            <Text>{item.rating.count}</Text>
            <Text style={styles.status}>{item.rating.description}</Text>
          </View>
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => {
              navigation.navigate('ScheduleScreen',['organization',item.id]);
            }}
          >
            <Text style={styles.scheduleText}>Schedule</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image}></Image>
          <TouchableOpacity
            style={styles.hearIconContainer}
            onPress={() => {
              removeItem(item.id);
            }}
          >
            <MaterialCommunityIcons
              name={styles.heartIcon.name}
              size={styles.heartIcon.size}
              color={styles.heartIcon.color}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );

  return <ScrollView>{savedData.map(item => renderItem(item))}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'col',
    marginRight: 8,
  },
  imageContainer: {
    position: 'relative',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  distance: {
    fontSize: 14,
    color: '#006',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  heartIcon: {
    name: 'heart',
    size: 20,
    color: '#FF0000',
  },
  starIcon: {
    marginLeft: 4,
    marginRight: 4,
  },
  status: {
    color: '#000000',
    marginLeft: 4,
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  hearIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  scheduleButton: {
    marginTop: 30,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  scheduleText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  separator: {
    marginVertical: 10,
    height: 0.4,
    width: '100%',
    backgroundColor: '#909090',
  },
});

export default SavedItem;
