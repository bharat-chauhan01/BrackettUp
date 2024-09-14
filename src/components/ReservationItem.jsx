import React, { useState } from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';
import FeedbackModal from '../modals/FeedbackModal';
import { submitFeedback } from '../apis/ReviewApi';
import { useNavigation } from '@react-navigation/native';

const ReservationItem = ({
  activityId,
  imageUrl,
  activityName,
  organisationName,
  instructor,
  date,
  time,
  credits,
  status,
}) => {
  const navigation = useNavigation();
  const [isFeedbackModalVisible, setFeedbackModalVisible] = useState(false);

  const handleLeaveFeedback = () => {
    setFeedbackModalVisible(true);
  };

  const handleFeedbackSubmit = async (rating, reviewText) => {
    setFeedbackModalVisible(false);
    try {
      await submitFeedback(activityId, rating, reviewText);
      Alert.alert('Thanks for your feedback!');
    } catch (error) {
      Alert.alert('Error', 'There was an issue submitting your feedback!');
    }
  };

  return (
    <View>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.activityName}>{activityName}</Text>
          <Text style={styles.organisationName}>{organisationName}</Text>
          <Text style={styles.instructorName}>{instructor}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.details]}>{date}</Text>
            <View style={styles.circle} />
            <Text style={styles.details}>{time}</Text>
          </View>
          <View style={styles.statusAndCreditsContainer}>
            <View style={styles.textBox}>
              <Text style={styles.status}>{status}</Text>
            </View>

            <View style={styles.circle} />
            <View style={styles.textBox}>
              <Text style={styles.creditsText}>{credits} credits</Text>
            </View>
          </View>

          {status === 'Cancelled' ? null : (
            <View style={styles.reviewAndSupportContainer}>
              <MaterialCommunityIcons
                name={styles.reviewIcon.name}
                size={styles.reviewIcon.size}
                color="black"
              />
              <TouchableOpacity onPress={handleLeaveFeedback}>
                <Text style={{ textDecorationLine: 'underline', marginLeft: 5 }}>
                  Leave Feedback
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.reviewAndSupportContainer}>
            <MaterialCommunityIcons
              name={styles.supportIcon.name}
              size={styles.supportIcon.size}
              color="black"
            />
            <TouchableOpacity onPress={() => navigation.navigate('SupportScreen')}>
              <Text style={{ textDecorationLine: 'underline', marginLeft: 5 }}>Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <FeedbackModal
        visible={isFeedbackModalVisible}
        onClose={() => setFeedbackModalVisible(false)}
        onSubmit={handleFeedbackSubmit}
        activityName={activityName}
        date={date}
        instructorName={instructor}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  organisationName: {
    fontSize: 12,
    color: 'gray',
  },
  instructorName: {
    fontSize: 12,
    color: 'gray',
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
  review: {
    fontSize: 14,
    marginVertical: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 2,
  },
  textBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginLeft: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditsText: {
    fontSize: 14,
    color: 'black',
  },
  statusAndCreditsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  circle: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  status: {
    color: 'black',
  },
  reviewAndSupportext: {
    color: 'black',
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  reviewAndSupportContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  reviewIcon: {
    name: 'book-edit',
    color: 'black',
    size: 14,
  },
  supportIcon: {
    name: 'help-circle',
    color: 'black',
    size: 14,
  },
  horizontalLine: {
    height: 0.5,
    backgroundColor: 'lightgrey',
  },
});

export default ReservationItem;
