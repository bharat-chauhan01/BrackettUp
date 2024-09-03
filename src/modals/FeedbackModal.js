import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FeedbackModal = ({ visible, onClose, onSubmit, activityName, date, instructorName }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const handleStarPress = star => {
    setRating(star);
  };

  const handleFocus = () => {
    setPlaceholderVisible(false);
  };

  const handleBlur = () => {
    if (reviewText === '') {
      setPlaceholderVisible(true);
    }
  };

  const handleTextChange = text => {
    if (text.length <= 1000) {
      setReviewText(text);
    }
  };

  const handleSubmit = () => {
    onSubmit(rating, reviewText);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Rate your experience at {activityName}</Text>
            <Text style={styles.subtitle}>
              {date} • {instructorName}
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialCommunityIcons name="close" size={22} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                <MaterialCommunityIcons
                  name={star <= rating ? 'star' : 'star-outline'}
                  size={55}
                  color="#000000"
                />
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.textInput}
            placeholder={
              placeholderVisible
                ? 'What did you like about the class? How was the instructor? What was the space like?'
                : ''
            }
            multiline={true}
            value={reviewText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            maxLength={1000}
          />
          <Text style={styles.charCount}>{reviewText.length}/1000</Text>
        </ScrollView>

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: rating ? '#000000' : 'grey' }]}
          onPress={handleSubmit}
          disabled={!rating}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    marginRight: 15,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: -2,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
  textInput: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    textAlignVertical: 'top',
    marginTop: 30,
  },
  charCount: {
    textAlign: 'right',
    color: 'gray',
    marginTop: 8,
    marginRight: 4,
  },
  submitButton: {
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default FeedbackModal;
