import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ActivityContainer from '../components/ActivityContainer';
import SearchModal from '../modals/SearchModal'; // Import your SearchModal
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchExtraHomeScreenActivities, fetchHomePageActivities } from '../apis/CommonApi'; // Modify this API to accept offset and limit
import { useIsFocused, useFocusEffect, useNavigation } from '@react-navigation/native';
import HomeScreenExtraComponent from '../components/HomeScreenExtraComponent';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false); // For loading more data
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offset, setOffset] = useState(0); // Pagination offset
  const [limit] = useState(10); // Pagination limit
  const [hasMore, setHasMore] = useState(true); // Check if there are more activities
  const [extraActivities, setExtraActivities] = useState([]);
  const navigation = useNavigation();

  const loadActivities = async () => {
    try {
      setLoading(true);
      const data = await fetchHomePageActivities();
      setActivities(data);
    } catch (error) {
      setActivities([]);
      Alert.alert('Error', 'Failed to load activities. Please try again.');
    } finally {
      setLoading(false);
      setLoadingMore(false); // Stop loading more data
    }
  };

  // Fetch search results and display them in the SearchModal
  const loadSearchResults = async () => {
    try {
      setLoadingMore(true); // Show loading spinner while fetching

      const searchResults = await fetchExtraHomeScreenActivities(offset, limit); // Fetch search results with pagination

      if (searchResults.nextOffset > 0) {
        setExtraActivities(prevData => [...prevData, ...searchResults.suggestions]); // Append new data
        setOffset(searchResults.nextOffset); // Increase the offset for the next batch
      } else {
        setHasMore(false); // No more results to load
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load search results. Please try again.');
    } finally {
      setLoadingMore(false); // Hide loading spinner
    }
  };

  const handleActivityPress = (referenceId, referenceType) => {
    if (referenceType === 'activity') {
      navigation.navigate('ActivityDetail', referenceId);
    } else if (referenceType === 'portfolio') {
      navigation.navigate('PortfolioDetail', referenceId);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        setActivities([]);
        setExtraActivities([]);
        setScrollPosition(0);
        setOffset(0); // Reset offset when the screen is focused
        setHasMore(true); // Reset hasMore when screen reloads
        loadActivities();
      }
    }, [isFocused]),
  );

  const handleScrollEnd = nativeEvent => {
    if (
      !nativeEvent ||
      !nativeEvent.layoutMeasurement ||
      !nativeEvent.contentOffset ||
      !nativeEvent.contentSize
    ) {
      return; // Exit if nativeEvent or its properties are not defined
    }

    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

    if (isCloseToBottom && !loadingMore && hasMore) {
      console.log('Reached the bottom! Loading more...');
      loadSearchResults(); // Load more data when bottom is reached
    }
  };

  if (loading && activities.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView
        onScroll={({ nativeEvent }) => handleScrollEnd(nativeEvent)}
        scrollEventThrottle={16} // Update throttle value to a lower number for better performance
        onMomentumScrollEnd={({ nativeEvent }) => handleScrollEnd(nativeEvent)} // Detects scroll ending
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>Hi, Nice to See You!</Text>
          <MaterialCommunityIcons
            name="bell-outline"
            color="black"
            size={26}
            style={styles.notificationIcon}
            onPress={() => Alert.alert('Notifications')}
          />
        </View>

        {/* Render all sections and activities */}
        {activities.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
              <MaterialCommunityIcons
                name={styles.itemIcon.name}
                color={styles.itemIcon.color}
                size={styles.itemIcon.size}
              />
            </View>
            <ScrollView marginLeft={10} horizontal showsHorizontalScrollIndicator={false}>
              {section.content.map((activity, activityIndex) => (
                <TouchableOpacity
                  key={activityIndex}
                  style={styles.activityTouchable}
                  onPress={() => handleActivityPress(activity.referenceId, activity.referenceType)}
                >
                  <ActivityContainer
                    imageUrl={activity.imageUrl}
                    title={activity.title}
                    locationTag={activity.locationTag}
                    distance={activity.distance}
                    activity={activity.activity}
                    rating={activity.rating}
                    ratingCount={activity.ratingCount}
                    ratingDesc={activity.ratingDesc}
                    date={activity.date}
                    duration={activity.duration}
                    credits={activity.credits}
                    discountCredits={activity.discountCredits}
                    percentageDiscount={activity.percentageDiscount}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}

        <View style={[styles.sectionHeader, { marginBottom: 10 }]}>
          <Text style={styles.sectionTitle}>And More Things To Do Down Below!</Text>
        </View>

        {/* Show SearchModal once data is fetched */}
        {extraActivities && (
          <View style={styles.searchModalContainer}>
            {extraActivities.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={styles.activityTouchable}
                onPress={() => handleActivityPress(data.activityId, 'activity')}
              >
                <HomeScreenExtraComponent
                  id={data.activityId}
                  activityName={data.activityName}
                  distance={data.distance}
                  organisation={data.organisation}
                  rating={data.rating}
                  locationTag={data.locationTag}
                  time={data.time}
                  credits={data.credits}
                  imageSource={data.imageSource}
                  ratingCount={data.ratingCount}
                  ratingDesc={data.ratingDesc}
                  discountCredits={data.discountCredits}
                  discountPercentage={data.discountPercentage}
                  duration={data.duration}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {loadingMore && (
          <View style={styles.loadingMoreContainer}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  container: {
    marginTop: 20,
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingBottom: 0,
    gap: 12,
  },
  section: {
    marginBottom: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  itemIcon: {
    name: 'dots-horizontal',
    color: 'black',
    size: 23,
  },
  activityTouchable: {
    marginHorizontal: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMoreContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  searchModalContainer: {},
  notificationIcon: {
    marginRight: 10,
  },
});
