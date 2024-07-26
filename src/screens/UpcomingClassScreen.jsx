import React, { useCallback, useState, useEffect } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UpcomingActivitiesCard from '../components/UpcomingActivitiesCard';
import { fetchUpcomingPageActivities } from '../apis/CommonApi';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { getItem } from '../store/LocalStorage';

const windowWidth = Dimensions.get('window').width;

const UpcomingClassScreen = () => {
  const isFocused = useIsFocused();
  const [activities, setActivities] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const loadActivities = async () => {
    setLoading(true);
    try {
      const data = await fetchUpcomingPageActivities();
      setActivities(data);
    } catch (error) {
      console.error(error);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const loadUser = async () => {
    setLoading(true);
    try {
      const auth = await getItem('auth');
      setUser(auth);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        loadUser();
      }
    }, [isFocused]),
  );

  useEffect(() => {
    if (user) {
      setActivities([]);
      setScrollPosition(0);
      loadActivities();
    } else {
      setActivities([]);
    }
  }, [user]);

  return (
    <ScrollView
      onScroll={event => setScrollPosition(event.nativeEvent.contentOffset.x)}
      scrollPosition={scrollPosition}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Upcoming</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : user ? (
          activities.length > 0 ? (
            activities.map((activity, index) => (
              <UpcomingActivitiesCard
                key={index}
                title={activity.title}
                date={activity.date}
                time={activity.time}
                instructor={activity.instructor}
                institution={activity.institution}
                imageUrl={activity.imageUrl}
                activityImageUrl={activity.activityImageUrl}
              />
            ))
          ) : (
            <Text style={styles.noActivities}>No upcoming activities.</Text>
          )
        ) : (
          <View style={styles.notLoggedInContainer}>
            <Text style={styles.noActivities}>Please log in to see your upcoming activities.</Text>
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.homeButtonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '5%',
    paddingTop: '5%',
    gap: 10,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  noActivities: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  notLoggedInContainer: {
    alignItems: 'center',
  },
  homeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UpcomingClassScreen;
