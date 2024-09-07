import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ActivityContainer from '../components/ActivityContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchHomePageActivities } from '../apis/CommonApi';
import { useIsFocused, useFocusEffect, useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const [activities, setActivities] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigation = useNavigation();

  const loadActivities = async () => {
    try {
      const data = await fetchHomePageActivities();
      setActivities(data);
    } catch (error) {
      setActivities(error);
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
        setScrollPosition(0);
        loadActivities();
      } else {
        setActivities([]);
      }
    }, [isFocused]),
  );

  return (
    <View style={styles.screenContainer}>
      <ScrollView
        onScroll={event => setScrollPosition(event.nativeEvent.contentOffset.y)}
        scrollPosition={scrollPosition}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>Hi, Nice to See You!</Text>
        </View>
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
                    subtitle={activity.locationTag}
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
    marginLeft: 10,
    alignItems: 'flex-start',
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
});
