import React, { useState, useCallback } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import ActivityContainer from '../components/ActivityContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchHomePageActivities } from '../apis/CommonApi';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const [activities, setActivities] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const loadActivities = async () => {
    try {
      const data = await fetchHomePageActivities();
      setActivities(data);
    } catch (error) {
      setActivities(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        setActivities([]); // Reset activities state
        setScrollPosition(0); // Reset scroll position
        loadActivities(); // Load fresh data
      } else {
        setActivities([]); // Reset activities state when leaving the screen
      }
    }, [isFocused]),
  );

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        backgroundColor: '#FFFFFF',
        paddingLeft: 12,
      }}
    >
      <Text>Welcome to Home Screen</Text>

      <ScrollView
        onScroll={event => setScrollPosition(event.nativeEvent.contentOffset.y)}
        scrollPosition={scrollPosition}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {activities.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.key}</Text>
              <MaterialCommunityIcons
                name={styles.itemIcon.name}
                color={styles.itemIcon.color}
                size={styles.itemIcon.size}
              />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {section.content.map((activity, activityIndex) => (
                <ActivityContainer
                  key={activityIndex}
                  imageUrl={activity.imageUrl}
                  title={activity.title}
                  subtitle={activity.subtitle}
                  distance={activity.distance}
                  activity={activity.activity}
                  rating={activity.rating}
                  ratingCount={activity.ratingCount}
                  ratingDesc={activity.ratingDesc}
                />
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 12,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  section: {
    // gap: 12
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    marginTop: 12,
    marginBottom: 12,
  },

  itemIcon: {
    name: 'dots-horizontal',
    color: '#681',
    size: 20,
  },
});
