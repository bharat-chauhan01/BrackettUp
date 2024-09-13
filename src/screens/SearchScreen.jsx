import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import SearchModal from '../modals/SearchModal';
import SortPickerModal from '../modals/SortPickerModal';
import { searchModalsData } from '../apis/MockData';
import { generateTwoWeeksDates } from '../utils/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getNearByPlaces, searchedResults, searchSuggestions } from '../apis/CommonApi';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const dates = generateTwoWeeksDates();

const SearchScreen = () => {
  const route = useRoute();
  var initialSearchText = '';
  var categoryIds=[];
  if (route.params.searchText) {
    initialSearchText = route.params.searchText;
  }if(route.params.categoryIds){
    categoryIds=route.params.categoryIds;
  } 
  else if (route.params) {
    initialSearchText = route.params;
  }

  const [searchQuery, setSearchQuery] = useState(initialSearchText);
  const [searchSuggestionEnabled, setSearchSuggestionEnabled] = useState(false);
  const [submitSearch, setSubmitSearch] = useState(false);
  const [activitySuggestions, setActivitySuggestions] = useState([]);
  const [searchPlaceholder, setSearchPlaceHodler] = useState(' Search activity...');

  const handleActivityPress = activityId => {
    navigation.navigate('ActivityDetail', activityId);
  };

  const [locationQuery, setLocationQuery] = useState('');
  const [locationSuggestionEnabled, setLocationSuggestionEnabled] = useState(false);
  const [submitLocation, setSubmitLocation] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [locationPlaceholder, setLocationPlaceholder] = useState('Current Location');

  const [sortQuery, setSortQuery] = useState('relevance');
  const [distanceQuery, setDistanceQuery] = useState('auto');
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentPickerType, setCurrentPickerType] = useState(null);
  const [data, setData] = useState(searchModalsData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const locationData = useSelector(state => state.Location);

  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Popularity', value: 'popular' },
    { label: 'Price -- Low to High', value: 'lowToHigh' },
    { label: 'Price -- High to Low', value: 'highToLow' },
  ];

  const distanceOptions = [
    { label: 'Auto', value: 'auto' },
    { label: '1 km', value: '1' },
    { label: '2 km', value: '2' },
    { label: '5 km', value: '5' },
    { label: '10 km', value: '10' },
    { label: '20 km', value: '20' },
  ];

  const handleSelectOption = value => {
    if (currentPickerType === 'sort') {
      setSortQuery(value);
    } else if (currentPickerType === 'distance') {
      setDistanceQuery(value);
    }
  };

  const handleShowPicker = type => {
    setCurrentPickerType(type);
    setPickerVisible(true);
  };

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      var coordinates = null;
      var locationName = null;
      if (locationQuery != null) {
        locationName = locationQuery;
        if (locationQuery.name) {
          locationName = locationQuery.name;
          coordinates = locationQuery.location;
        }
      }
      var searchName = null;
      var searchRefId = null;
      var searchRefType = null;
      if (searchQuery != null) {
        searchName = searchQuery;
        if (searchQuery.name) {
          searchName = searchQuery.name;
          searchRefId = searchQuery.ref_id;
          searchRefType = searchQuery.ref_type;
        }
      }

      const response = await searchedResults({
        search: {
          name: searchName,
          ref_id: searchRefId,
          ref_type: searchRefType,
          categories: categoryIds
        },
        destinationLocation: {
          name: locationName,
          coordinates: coordinates,
        },
        currentLocation: locationData,
        sort: sortQuery,
        date: selectedDate.actualDate,
        distanceQuery: distanceQuery,
      });
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setSearchSuggestionEnabled(false);
    }
    setSubmitSearch(false);
    setSubmitLocation(false);
  };

  useEffect(() => {
    fetchSearchResults();
    setSearchSuggestionEnabled(false);
  }, [sortQuery, distanceQuery, selectedDate]);

  useEffect(() => {
    if (submitSearch) {
      fetchSearchResults();
      setSearchSuggestionEnabled(false);
    }
  }, [submitSearch]);

  useEffect(() => {
    if (submitLocation) {
      fetchSearchResults();
      setLocationSuggestionEnabled(false);
    }
  }, [submitLocation]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchSuggestionEnabled) {
        const response = await searchSuggestions(searchQuery);
        setActivitySuggestions(response);
      } else {
        setActivitySuggestions([]);
      }
    };
    fetchSuggestions();
  }, [searchQuery]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (locationSuggestionEnabled) {
        const response = await getNearByPlaces(locationQuery);
        setLocationSuggestions(response);
      } else {
        setLocationSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [locationQuery]);

  const handleSearchSubmit = () => {
    setSubmitSearch(true);
    setSearchSuggestionEnabled(false);
    setSearchPlaceHodler(searchQuery);
    dismissSuggestions();
  };

  const handleLocationSubmit = () => {
    setSubmitLocation(true);
    setLocationSuggestionEnabled(false);
    dismissSuggestions();
  };

  const handleSearchSuggestionSelect = suggestion => {
    setSearchQuery(suggestion);
    setSubmitSearch(true);
    setSearchPlaceHodler(suggestion.name);
    setSearchSuggestionEnabled(false);
    dismissSuggestions();
  };

  const handleLocationSuggestionSelect = suggestion => {
    setLocationQuery(suggestion);
    setSubmitLocation(true);
    setLocationPlaceholder(suggestion.name);
    setLocationSuggestionEnabled(false);
    dismissSuggestions();
  };

  const dismissSuggestions = () => {
    setActivitySuggestions([]);
    setLocationSuggestions([]);
  };

  const renderSearchSuggestions = () => (
    <View style={styles.suggestionsOverlay}>
      <FlatList
        data={activitySuggestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSearchSuggestionSelect(item)}>
            <Text style={styles.suggestionItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  const renderLocationSuggestions = () => (
    <View style={styles.locationSuggestionsOverlay}>
      <FlatList
        data={locationSuggestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleLocationSuggestionSelect(item)}>
            <Text style={styles.suggestionItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" style={styles.iconStyle} size={24} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            if (text.length > 2) {
              setSearchSuggestionEnabled(true);
            }
          }}
          onSubmitEditing={handleSearchSubmit}
        />
      </View>

      {searchSuggestionEnabled && renderSearchSuggestions()}

      <View style={styles.locationInputContainer}>
        <MaterialCommunityIcons name="map-marker" size={20} color="#000" />
        <TextInput
          style={styles.locationInput}
          placeholder={locationPlaceholder}
          value={locationQuery}
          onChangeText={text => {
            setLocationQuery(text);
            if (text.length > 2) {
              setLocationSuggestionEnabled(true);
            }
          }}
          onSubmitEditing={handleLocationSubmit}
        />
      </View>
      {locationSuggestionEnabled && renderLocationSuggestions()}

      <View style={styles.filterContainer}>
        <View style={styles.sortContainer}>
          <TouchableOpacity style={styles.pickerButton} onPress={() => handleShowPicker('sort')}>
            <View style={styles.iconTextContainer}>
              <MaterialCommunityIcons name={'filter'} color={'black'} size={12} marginRight={6} />
              <Text style={styles.pickerButtonText}>{'Sort'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.sortContainer}>
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={() => handleShowPicker('distance')}
          >
            <View style={styles.iconTextContainer}>
              <MaterialCommunityIcons
                name={'map-outline'}
                color={'black'}
                size={12}
                marginRight={6}
              />
              <Text style={styles.pickerButtonText}>{'Distance'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <SortPickerModal
        map-outline
        visible={isPickerVisible}
        onClose={() => setPickerVisible(false)}
        selectedOption={currentPickerType === 'sort' ? sortQuery : distanceQuery}
        onSelect={handleSelectOption}
        sortOptions={currentPickerType === 'sort' ? sortOptions : distanceOptions}
      />

      <ScrollView horizontal style={styles.horizontalScrollView}>
        <View style={styles.dateContainer}>
          {dates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateBox,
                {
                  backgroundColor:
                    selectedDate.formattedDate === date.formattedDate ? 'black' : 'white',
                },
                {
                  borderColor:
                    selectedDate.formattedDate === date.formattedDate ? 'white' : 'black',
                },
              ]}
              onPress={() => setSelectedDate(date)}
            >
              <Text
                style={[
                  styles.dateText,
                  { color: selectedDate.formattedDate === date.formattedDate ? 'white' : 'black' },
                ]}
              >
                {date.formattedDate}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.horizontalLine} />
      <ScrollView vertical style={styles.scrollViewContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="black" />
        ) : data && Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <View key={index} style={styles.innerContainer}>
              <TouchableOpacity onPress={() => handleActivityPress(item.time[0].activityClassId)}>
                <SearchModal
                  activityName={item.activityName}
                  distance={item.distance}
                  organisation={item.organization}
                  rating={item.rating}
                  categories={item.categories}
                  time={item.time}
                  credits={item.credits}
                  imageSource={item.imageUrl}
                  ratingCount={item.ratingCount}
                  ratingDesc={item.ratingDesc}
                />
                <View style={styles.horizontalLine} />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No data available.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 20,
    height: 40,
    fontSize: 16,
  },
  locationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  locationInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // alignItems: 'center',
    // paddingHorizontal: 20,
    // marginTop: 10,
  },
  pickerButton: {
    justifyContent: 'center',
    alignItems: 'baseline',
    backgroundColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginLeft: 5,
  },
  pickerButtonText: {
    fontSize: 14,
    color: 'black',
  },
  horizontalScrollView: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
  },
  dateContainer: {
    flexDirection: 'row',
    paddingLeft: 5,
    backgroundColor: 'white',
  },
  dateBox: {
    height: 25,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: 'black',
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 10,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: 'black',
  },
  scrollViewContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  innerContainer: {},
  horizontalLine: {
    height: 0.5,
    backgroundColor: 'lightgrey',
  },
  suggestionsOverlay: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    paddingTop: 5,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  locationSuggestionsOverlay: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    paddingTop: 5,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  suggestionItem: {
    padding: 10,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 10,
  },
  submitText: {
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 5,
  },
  iconStyle: {
    color: '#000',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  emptyContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: 'grey',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchScreen;
