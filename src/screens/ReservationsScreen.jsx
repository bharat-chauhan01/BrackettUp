import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { renderHeader } from '../modals/HeaderModal';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import ReservationItem from '../components/ReservationItem';
import { fetchReservation } from '../apis/ReservationApi';

export default function ReservationsScreen() {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);

  const [reservations, setReservation] = useState([]);

  const loadReservation = async () => {
    setLoading(true);
    try {
      const data = await fetchReservation();
      setReservation(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        setReservation([]);
        loadReservation();
      } else {
        setReservation([]);
      }
    }, [isFocused]),
  );

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {renderHeader(navigation, 'Your Reservations')}
      <Text style={{ fontWeight: '500', color: 'black', marginLeft: 15, fontSize: 16 }}>Past</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : reservations.length > 0 ? (
          reservations.map((reservation, index) => (
            <ReservationItem
              key={index}
              activityId={reservation.id}
              imageUrl={reservation.imageUrl}
              activityName={reservation.activityName}
              organisationName={reservation.organisationName}
              instructor={reservation.instructor}
              time={reservation.time}
              credits={reservation.credits}
              status={reservation.status}
              date={reservation.date}
            />
          ))
        ) : (
          <Text>No reservations found</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    // flexGrow: 1,
    justifyContent: 'center',
  },
});
