import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { renderHeader } from '../modals/HeaderModal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchActivityDetail } from '../apis/CommonApi';
import RenderTextWithToggle from '../components/RenderTextWithToggle';
import { getItem } from '../store/LocalStorage';
import LoggedInModal from '../modals/ActivityDetailLoggedInModal';
import LoggedOutModal from '../modals/ActivityDetailLoggedOutModal';
import { confirmResevation } from '../apis/ReservationApi';

const { width: screenWidth } = Dimensions.get('window');
const screenHeight = Dimensions.get('window').height;

export default function ActivityDetail() {
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const [loggedInModalVisible, setLoggedInModalVisible] = useState(false);
  const [loggedOutModalVisible, setLoggedOutModalVisible] = useState(false);

  const route = useRoute();

  const activityId = route.params;

  const handleSeeReviews = referenceId => {
    navigation.navigate('ShowReviewsScreen', ['activity', referenceId]);
  };

  useEffect(() => {
    const loadActivityDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchActivityDetail(activityId);
        setActivityData(data);
      } catch (error) {
        console.error('Failed to fetch activity details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadActivityDetail();
  }, [activityId]);

  const handleReserve = async () => {
    try {
      const auth = await getItem('auth');

      if (auth) {
        setLoggedInModalVisible(true);
      } else {
        setLoggedOutModalVisible(true);
      }
    } catch (error) {
      console.error('Error fetching auth status:', error);
    }
  };

  const handleLogin = () => {
    setLoggedOutModalVisible(false);
    navigation.navigate('Login');
  };

  const formatCategories = categories => {
    if (!Array.isArray(categories) || categories.length === 0) {
      return '';
    }
    return categories.join(', ');
  };

  const handleConfirmReservation = async () => {
    setLoggedInModalVisible(false);
    try {
      const credits = activityData.credits;
      await confirmResevation(activityId, credits);
      Alert.alert('Reservation confirmed!');
    } catch (error) {
      Alert.alert('', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {renderHeader(navigation, activityData.activityName)}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <View style={styles.imageContainer}>
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
                onScroll={event => {
                  const scrollPosition = event.nativeEvent.contentOffset.x;
                }}
              >
                {activityData.images &&
                  activityData.images.map((image, index) => (
                    <View key={image.id} style={styles.imageWrapper}>
                      <Image source={{ uri: image.uri }} style={styles.image} />
                      <View style={styles.imageNumberContainer}>
                        <Text style={styles.imageNumber}>
                          {index + 1}/{activityData.images.length}
                        </Text>
                      </View>
                    </View>
                  ))}
              </ScrollView>
            </View>

            <View>
              <View style={styles.detailsContainer}>
                <View style={styles.titleRatingContainer}>
                  <Text style={styles.title}>{activityData.activityName}</Text>
                  <Text style={styles.ratingDesc}>{activityData.rating?.description}</Text>
                </View>

                <Text style={styles.rating}>
                  {activityData.rating?.value}{' '}
                  <MaterialCommunityIcons
                    name={styles.starIcon.name}
                    color={styles.starIcon.color}
                    size={styles.starIcon.size}
                  />
                  ({activityData.rating?.count}){' '}
                </Text>

                <View style={styles.instructorContainer}>
                  <MaterialCommunityIcons
                    name="school"
                    color={styles.starIcon.color}
                    size={styles.starIcon.size}
                  />
                  <Text style={styles.instructorOrganiser}>
                    {activityData.organizationName} · {activityData.locationTag}
                  </Text>
                </View>
                <View style={styles.instructorContainer}>
                  <MaterialCommunityIcons
                    name="clock"
                    color={styles.starIcon.color}
                    size={styles.starIcon.size}
                  />
                  <Text style={styles.time}>{activityData.time}</Text>
                </View>
                <View style={styles.instructorContainer}>
                  <MaterialCommunityIcons
                    name="account"
                    color={styles.starIcon.color}
                    size={styles.starIcon.size}
                  />
                  <Text style={styles.classTakenBy}>{activityData.instructorName}</Text>
                </View>

                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.fullWidthButton}>
                    <Text style={styles.buttonText}>
                      <MaterialCommunityIcons
                        name={styles.accountIcon.name}
                        color={styles.accountIcon.color}
                        size={styles.accountIcon.size}
                      />{' '}
                      Invite
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.fullWidthButton}>
                    <Text style={styles.buttonText}>
                      <MaterialCommunityIcons
                        name={styles.calendarIcon.name}
                        color={styles.calendarIcon.color}
                        size={styles.calendarIcon.size}
                      />{' '}
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.classDescription}>{activityData.classDescription}</Text>
              </View>
              <View style={styles.horizontalLine} />

              <View style={styles.details}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.subTitle}>Reviews</Text>
                  <Text style={styles.ratingFull}>
                    {activityData.rating?.value}{' '}
                    <MaterialCommunityIcons
                      name={styles.starIcon.name}
                      color={styles.starIcon.color}
                      size={styles.starIcon.size}
                    />{' '}
                    ({activityData.rating?.count})
                  </Text>

                  <TouchableOpacity onPress={() => handleSeeReviews(activityId)}>
                    <Text style={styles.moreLink}>See all reviews</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.subTitle}>Cancellation policy</Text>
                  <Text style={styles.text}>{activityData.cancellationPolicy}</Text>
                  <Text style={styles.moreLink}>Learn more</Text>
                </View>
                <View style={styles.horizontalLine} />
                <View style={[styles.detailsContainer, { marginBottom: -30 }]}>
                  <Text style={[styles.subTitle, { paddingBottom: 10 }]}>About</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                      <Text style={styles.infoText}>{activityData.instagramAccount}</Text>
                      <MaterialCommunityIcons
                        name={styles.instagramIcon.name}
                        color={styles.instagramIcon.color}
                        size={styles.instagramIcon.size}
                      />
                    </View>
                    <View style={styles.infoRow}>
                      {activityData.websiteUrl ? (
                        <>
                          <TouchableOpacity
                            onPress={() => Linking.openURL(activityData.websiteUrl)}
                          >
                            <Text style={styles.linkText}>Checkout Website</Text>
                          </TouchableOpacity>

                          <MaterialCommunityIcons
                            name={styles.webIcon.name}
                            color={styles.webIcon.color}
                            size={styles.webIcon.size}
                          />
                        </>
                      ) : null}
                    </View>
                  </View>
                  <RenderTextWithToggle text={activityData.about} />
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.detailsContainer}>
                  <View style={styles.highlightsContainer}>
                    <Text style={styles.subTitle}>Highlights</Text>
                    <View style={styles.highlightsRow}>
                      {activityData.highlights &&
                        activityData.highlights.map((item, index) => (
                          <Text key={index} style={styles.highlightsText}>
                            <MaterialCommunityIcons
                              name={styles.checkIcon.name}
                              color={styles.checkIcon.color}
                              size={styles.checkIcon.size}
                            />{' '}
                            {item}
                          </Text>
                        ))}
                    </View>

                    <Text style={styles.subTitle}>Amenities</Text>
                    <View>
                      {activityData.amenities &&
                        activityData.amenities.map((item, index) => (
                          <Text key={index} style={styles.highlightsText}>
                            <MaterialCommunityIcons
                              name={styles.checkIcon.name}
                              color={styles.checkIcon.color}
                              size={styles.checkIcon.size}
                            />{' '}
                            {item}
                          </Text>
                        ))}
                    </View>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <View style={[styles.locationContainer, { paddingRight: 10 }]}>
                    <View style={styles.locationTextContainer}>
                      <Text style={styles.subTitle}>Address</Text>
                      <Text style={styles.locationText}>{activityData.address}</Text>
                      <Text style={styles.locationText}>{activityData.city}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                      <View style={styles.directionButton}>
                        <MaterialCommunityIcons
                          name={styles.directionIcon.name}
                          color={styles.directionIcon.color}
                          size={styles.directionIcon.size}
                        />
                        <TouchableOpacity onPress={() => Alert.alert('Directions button clicked!')}>
                          <Text style={styles.directionButtonText}>Directions</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.subTitle}>How to get there</Text>
                  <RenderTextWithToggle text={activityData.howToGetThere} />
                  {/* {renderTextWithToggle(activityData.howToGetThere)} */}
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.subTitle}>Safety & Cleanliness</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <View style={styles.precautionContainer}>
                    <Text style={styles.precautionTitle}>Safety & Health Measures</Text>

                    <View style={[styles.safetyContainer, { flexWrap: 'wrap' }]}>
                      {activityData.safety &&
                        activityData.safety.map((item, index) => (
                          <View
                            key={index}
                            style={{
                              width: '50%',
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 6,
                            }}
                          >
                            <MaterialCommunityIcons
                              name={styles.checkIcon.name}
                              color={styles.checkIcon.color}
                              size={styles.checkIcon.size}
                            />
                            <Text style={styles.safetyItem}>{item}</Text>
                          </View>
                        ))}
                    </View>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.subTitle}>How to prepare</Text>
                  <RenderTextWithToggle text={activityData.preparation} />

                  <View style={styles.reportContainer}>
                    <MaterialCommunityIcons
                      name={styles.reportIcon.name}
                      color={styles.reportIcon.color}
                      size={styles.reportIcon.size}
                    />
                    <Text style={[styles.moreLink, { paddingBottom: 20 }]}>
                      Report inaccurate information
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      <View style={styles.reserveButtonContainer}>
        <Text style={styles.credits}>{activityData.credits} credits</Text>
        <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
      </View>
      <LoggedInModal
        isVisible={loggedInModalVisible}
        onClose={() => setLoggedInModalVisible(false)}
        activity={activityData}
        onConfirm={handleConfirmReservation}
      />
      <LoggedOutModal
        isVisible={loggedOutModalVisible}
        onLogin={handleLogin}
        onClose={() => setLoggedOutModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
  },
  scrollContainer: {
    paddingBottom: 60,
  },
  imageContainer: {
    height: 250,
  },
  imageWrapper: {
    width: screenWidth,
    height: 250,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingBottom: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  mapImage: {
    width: '100%',
    height: '60%',
  },
  imageNumberContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 199,
    right: 20,
    width: '12%',
    backgroundColor: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  imageNumber: {
    color: 'white',
    fontWeight: 'bold',
    opacity: 1,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 2,
    paddingRight: 10,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1.25,
  },
  rating: {
    fontSize: 14,
    marginBottom: 10,
    // marginTop:10,
    color: 'black',
  },
  ratingFull: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  instructorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    name: 'star',
    color: '#000000',
    size: 14,
  },
  rightIcon: {
    name: 'chevron-right',
    color: '#000000',
    size: 14,
  },
  instagramIcon: {
    name: 'instagram',
    color: '#000000',
    size: 22,
  },
  webIcon: {
    name: 'archive-outline',
    color: '#000000',
    size: 22,
  },
  directionsIcon: {
    name: 'directions',
    color: '#000000',
    size: 16,
  },
  trending: {
    name: 'trending-up',
    color: '#000000',
    size: 14,
  },
  accountIcon: {
    name: 'account-plus-outline',
    color: '#000000',
    size: 14,
  },
  calendarIcon: {
    name: 'calendar',
    color: '#000000',
    size: 12,
  },
  ratingDesc: {
    fontSize: 16,
    color: '#3e8ae2',
    fontWeight: '400',
  },
  instructorOrganiser: {
    marginLeft: 5,
    fontSize: 14,
    color: 'black',
  },
  category: {
    fontSize: 14,
    marginBottom: 3,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    marginLeft: 5,
    color: 'black',
  },
  classTakenBy: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  attending: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black',
  },
  horizontalLine: {
    marginTop: 20,
    height: 1,
    width: '100%',
    backgroundColor: '#D3D3D3',
  },
  buttonRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10,
    color: 'white',
  },
  reviewsButton: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
  },
  fullWidthButton: {
    flex: 1,
    width: '80%',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
  },

  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
  },
  getDirectionsButton: {
    // flex: 1,
    width: '50%',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 20,
  },
  classDescription: {
    marginTop: 12,
    fontSize: 14,
    marginVertical: 10,
    lineHeight: 22,
  },
  reserveButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  credits: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  reserveButton: {
    backgroundColor: '#1B7CDD',
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 14,
  },
  details: {
    // paddingHorizontal: 20,
    paddingBottom: 20,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: 'black',
    marginRight: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  precautionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },

  text: {
    fontSize: 14,
    color: 'black',
    marginTop: 12,
    marginBottom: 12,
    lineHeight: 25,
  },
  locationText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 30,
  },
  moreLink: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textDecorationLine: 'underline',
  },
  linkText: {
    color: '#3e8ae2',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: '500',
  },
  highlightsContainer: {
    padding: 16,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  locationContainer: {
    // height: screenHeight * 0.30,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 15,
  },
  directionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 20,
    gap: 4,
  },
  directionIcon: {
    name: 'directions',
    color: '#000000',
    size: 14,
  },
  directionButtonText: {
    fontSize: 15,
    color: 'black',
  },
  precautionContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingBottom: 30,
  },
  reportContainer: {
    // paddingTop: 25,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
  },
  locationTextContainer: {
    paddingLeft: 20,
  },
  highlightsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 10,
    flexWrap: 'wrap',
  },
  checkIcon: {
    name: 'check',
    color: 'green',
    size: 12,
  },
  reportIcon: {
    name: 'flag-outline',
    color: '#000000',
    size: 12,
  },
  highlightsText: {
    fontSize: 12,
    marginTop: 6,
    fontWeight: '400',
    color: 'black',
  },
  safetyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  safetyItem: {
    fontSize: 12,
    color: 'black',
    flex: 1,
  },
  titleRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
});
