import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-ratings';
import { renderHeader } from '../modals/HeaderModal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchReviewDetail } from '../apis/CommonApi';
import RatingBreakdownItem from '../components/RatingBreakdownItem';

const ShowReviewPage = () => {
  const [reviewData, setReviewData] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});
  const navigation = useNavigation();
  const route = useRoute();

  const activityId = route.params;

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviewDetail(activityId);
        setReviewData(data);
      } catch (error) {
        console.error('Failed to fetch activity details:', error);
      }
    };

    loadReviews();
  }, [activityId]);

  const handleSeeMore = (id) => {
    setExpandedReviews(prevState => ({
      ...prevState,
      [id]: !prevState[id],  
    }));
  };


  const renderItem = ({ item }) => {
    const isExpanded = expandedReviews[item.id];
    const shouldShowSeeMore = item.description.length > 30;

    return (
      <View style={styles.reviewContainer}>
        <View style={styles.ratingTimeContainer}>
          <Rating
            type="star"
            ratingColor="black"
            imageSize={20}
            readonly
            startingValue={item.currentRating}
            style={styles.starRating}
          />
          <Text style={styles.reviewTime}>{item.time}</Text>
        </View>
        <Text style={styles.reviewTitle}>{item.activityName}</Text>
        <Text style={styles.reviewText}>
          {isExpanded || !shouldShowSeeMore
            ? item.description
            : `${item.description.slice(0, 50)}...`}
        </Text>
        {shouldShowSeeMore && (
          <TouchableOpacity onPress={() => handleSeeMore(item.id)}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              color="black"
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <>
      {renderHeader(navigation, reviewData?.title)}
      <ScrollView style={styles.container}>
        {reviewData && reviewData.reviews.length > 0? (
          <>
            <View style={styles.summaryContainer}>
              <View style={styles.breakdownContainer}>
              <RatingBreakdownItem starLabel="5 stars" ratingCount={reviewData.reviewMeta.ratingsBreakdown.fiveStarCount} />
      <RatingBreakdownItem starLabel="4 stars" ratingCount={reviewData.reviewMeta.ratingsBreakdown.fourStarCount} />
      <RatingBreakdownItem starLabel="3 stars" ratingCount={reviewData.reviewMeta.ratingsBreakdown.threeStarCount} />
      <RatingBreakdownItem starLabel="2 stars" ratingCount={reviewData.reviewMeta.ratingsBreakdown.twoStarCount} />
      <RatingBreakdownItem starLabel="1 star" ratingCount={reviewData.reviewMeta.ratingsBreakdown.oneStarCount} />
              </View>

              <View style={styles.ratingContainer}>
                <Rating
                  type="star"
                  ratingColor="black"
                  imageSize={25}
                  readonly
                  startingValue={reviewData.reviewMeta.reviewAverage}
                />
                <Text style={styles.overallRating}>
                  {reviewData.reviewMeta.reviewAverage}/{reviewData.reviewMeta.maxRating}
                </Text>
                <Text style={styles.totalRatings}>
                  based on {reviewData.reviewMeta.reviewCountDesc}+ ratings
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine} />
            <Text style={styles.subTitle}>Member Reviews</Text>
            <FlatList
              data={reviewData.reviews}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.list}
            />
          </>
        ):
        (
  <Text style={styles.noReviewsText}>No reviews found</Text>
)
        }
      </ScrollView>
    </>
  );
};

export default ShowReviewPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ratingContainer: {
    alignItems: 'center',
    marginLeft: 20,
  },
  overallRating: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  totalRatings: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  breakdownContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  list: {
    paddingBottom: 20,
  },
  reviewContainer: {
    marginTop: 20,
  },
  ratingTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  starRating: {
    marginRight: 10,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color:'black'
  },
  reviewText: {
    fontSize: 14,
    marginVertical: 5,
    color:'black'
  },
  reviewTime: {
    fontSize: 12,
    color: '#888',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#D3D3D3',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginRight: 5,
  },
  subTitle: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
  },
  noReviewsText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  horizontalDotsIcon: {
    name: 'dots-horizontal',
    size: 20,
  },
});
