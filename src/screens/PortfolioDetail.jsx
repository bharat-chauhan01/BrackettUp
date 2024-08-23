import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { renderHeader } from '../modals/HeaderModal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchPortfolioDetail } from '../apis/CommonApi';
import RenderTextWithToggle from '../components/RenderTextWithToggle';
import Video from 'react-native-video';

const { width: screenWidth } = Dimensions.get('window');

export default function PortfolioDetail() {
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState([]);
  const route = useRoute();

  const activityId = route.params;

  useEffect(() => {
    const loadPortfolioDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchPortfolioDetail(activityId);
        setPortfolioData(data);
      } catch (error) {
        console.error('Failed to fetch portfolio details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioDetail();
  }, [activityId]);

  return (
    <View style={styles.container}>
      {renderHeader(navigation, portfolioData.organizationName)}
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
                {portfolioData.images &&
                  portfolioData.images.map((image, index) => (
                    <View key={image.id} style={styles.imageWrapper}>
                      <Image source={{ uri: image.uri }} style={styles.image} />
                      <View style={styles.imageNumberContainer}>
                        <Text style={styles.imageNumber}>
                          {index + 1}/{portfolioData.images.length}
                        </Text>
                      </View>
                    </View>
                  ))}
              </ScrollView>
            </View>

            <View>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{portfolioData.organizationName}</Text>

                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>{portfolioData.location?.name}</Text>
                </View>

                <View style={styles.bookingContainer}>
                  {portfolioData.bookingCount ? (
                    <>
                      <MaterialCommunityIcons
                        name={styles.fireIcon.name}
                        color={styles.fireIcon.color}
                        size={styles.fireIcon.size}
                      />
                      <Text style={styles.bookingText}>{portfolioData.bookingCount}</Text>
                    </>
                  ) : null}
                </View>
                {portfolioData.advantageText ? (
                  <>
                    <TouchableOpacity style={styles.saveButton}>
                      <Text style={styles.saveButtonText}>{portfolioData.advantageText}</Text>
                    </TouchableOpacity>
                  </>
                ) : null}

                <Text style={styles.description}>{portfolioData.description}</Text>
              </View>
              <View style={styles.horizontalLine} />

              <View style={styles.details}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.subTitle}>Reviews</Text>
                  <Text style={styles.ratingFull}>
                    {portfolioData.rating?.value}{' '}
                    <MaterialCommunityIcons
                      name={styles.starIcon.name}
                      color={styles.starIcon.color}
                      size={styles.starIcon.size}
                    />{' '}
                    {portfolioData.rating?.count}
                  </Text>

                  <View style={styles.ratingContent}>
                    <Text style={styles.ratingTitle}>{portfolioData.rating?.content?.title}</Text>

                    <RenderTextWithToggle text={portfolioData.rating?.content?.description} />
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.moreLink}>See all reviews</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.horizontalLine} />

                <View style={styles.detailsContainer}>
                  <Text style={styles.subTitle}>About</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                      <Text style={styles.infoText}>{portfolioData.instagramAccount}</Text>
                      <MaterialCommunityIcons
                        name={styles.instagramIcon.name}
                        color={styles.instagramIcon.color}
                        size={styles.instagramIcon.size}
                      />
                    </View>
                    <View style={styles.infoRow}>
                      <Text style={styles.infoText}>{portfolioData.websiteUrl}</Text>
                      <MaterialCommunityIcons
                        name={styles.webIcon.name}
                        color={styles.webIcon.color}
                        size={styles.webIcon.size}
                      />
                    </View>
                  </View>
                  <RenderTextWithToggle text={portfolioData.about} />
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.detailsContainer}>
                  <View style={styles.highlightsContainer}>
                    <Text style={styles.subTitle}>Highlights</Text>
                    <View style={styles.highlightsRow}>
                      {portfolioData.highlights &&
                        portfolioData.highlights.map((item, index) => (
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
                  <Text style={styles.subTitle}>Videos</Text>
                  <View style={styles.videoContainer}>
                    <Video
                      source={{ uri: portfolioData.mapVideo }}
                      style={styles.mapVideo}
                      resizeMode="cover"
                      repeat={true}
                      paused={true}
                      controls={true}
                    />

                    <Text style={styles.videoText}>{portfolioData.videoText}</Text>
                  </View>
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.howToGet}>How to get there</Text>

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

                  <RenderTextWithToggle text={portfolioData.location?.locationReference} />
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.subTitle}>Safety & Cleanliness</Text>
                  <Text style={styles.description}>{portfolioData.updatedDate}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <View style={styles.precautionContainer}>
                    <Text style={styles.precautionTitle}>Safety & Health Measures</Text>
                    <View style={styles.safetyContainer}>
                      {portfolioData.safety &&
                        portfolioData.safety.map((item, index) => (
                          <Text key={index} style={styles.safetyItem}>
                            <MaterialCommunityIcons
                              name={styles.checkIcon.name}
                              color={styles.checkIcon.color}
                              size={styles.checkIcon.size}
                            />{' '}
                            {item}
                          </Text>
                        ))}
                    </View>

                    <Text style={styles.moreLink}>See details</Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      <View style={styles.viewScheduleButtonContainer}>
        <TouchableOpacity
          style={styles.viewScheduleButton}
          onPress={() => navigation.navigate('ScheduleScreen')}
        >
          <Text style={styles.viewScheduleButtonText}>View Schedule</Text>
        </TouchableOpacity>
      </View>
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
  mapVideo: {
    width: '100%',
    height: '80%',
    borderRadius: 12,
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
    // paddingBottom:250,
  },
  title: {
    fontSize: 22,
    marginBottom: 2,
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
  locationContainer: {
    flex: 1,
    marginLeft: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
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

  fireIcon: {
    name: 'fire',
    color: 'red',
    size: 16,
  },

  ratingDesc: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  locationText: {
    fontSize: 14,
    color: 'black',
  },
  category: {
    fontSize: 14,
    marginBottom: 3,
    color: 'black',
  },
  time: {
    fontSize: 14,
    marginTop: 8,
    color: 'black',
  },
  horizontalLine: {
    marginTop: 10,
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

  description: {
    marginTop: 12,
    fontSize: 14,
    marginVertical: 10,
    lineHeight: 22,
  },
  viewScheduleButtonContainer: {
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

  viewScheduleButton: {
    backgroundColor: '#1B7CDD',
    padding: 15,
    width: '100%',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewScheduleButtonText: {
    color: 'white',
    fontSize: 14,
  },
  details: {
    paddingBottom: 20,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  infoContainer: {
    flex: 1,
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
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
    // marginBottom: 10,
    color: 'black',
  },
  howToGet: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
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
  bookingText: {
    fontSize: 14,
    color: 'black',
    marginTop: 6,
    marginBottom: 6,
    lineHeight: 20,
  },
  videoText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 30,
    marginTop: 10,
  },
  moreLink: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 10,
  },
  highlightsContainer: {
    padding: 16,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  videoContainer: {
    height: 250,
    marginTop: 20,
    marginBottom: 20,
  },
  precautionContainer: {
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingBottom: 30,
  },
  reportContainer: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  locationTextContainer: {
    padding: 20,
  },
  highlightsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 10,
  },
  checkIcon: {
    name: 'check',
    color: 'green',
    size: 24,
  },
  reportIcon: {
    name: 'flag-outline',
    color: '#000000',
    size: 24,
  },
  highlightsText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  safetyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 6,
  },
  safetyItem: {
    fontSize: 12,
    color: 'black',
    flex: 1,
  },
  bookingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#E6F4E7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: '500',
  },
  ratingContent: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  ratingDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  directionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
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
  precautionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
});
