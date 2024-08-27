import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { fetchSearchLandingSuggestions, getCategories, searchSuggestions } from '../apis/CommonApi';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchModal from '../modals/SearchModal';

const SearchLandingScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchSuggestionEnabled, setSearchSuggestionEnabled] = useState(false);
  const [activitySuggestions, setActivitySuggestions] = useState([]);
  const [submitSearch, setSubmitSearch] = useState(false);
  const [homeSearchData, setHomeSearchData] = useState({
    craftedForYou: [],
    fillingOutFast: [],
    categories: [],
  });
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchSearchLandingSuggestions();
      setHomeSearchData(data);
    } catch (error) {
      console.error(error);
      setHomeSearchData({ craftedForYou: [], fillingOutFast: [], categories: [] });
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        loadData();
      }
    }, [isFocused, loadData]),
  );

  useEffect(() => {
    if (submitSearch) {
      setSearchSuggestionEnabled(false);
      navigation.navigate('SearchScreen', { searchText });
      setSubmitSearch(false);
    }
  }, [submitSearch, searchText, navigation]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchSuggestionEnabled && searchText.length > 2) {
        try {
          const response = await searchSuggestions(searchText);
          setActivitySuggestions(response);
        } catch (error) {
          console.error(error);
          setActivitySuggestions([]);
        }
      } else {
        setActivitySuggestions([]);
      }
    };
    fetchSuggestions();
  }, [searchText, searchSuggestionEnabled]);

  const renderSearchSuggestions = () => (
    <FlatList
      data={activitySuggestions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleSearchSuggestionSelect(item.name)}>
          <Text style={styles.suggestionItem}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );

  const handleSearchSuggestionSelect = suggestion => {
    setSearchText(suggestion);
    setSubmitSearch(true);
  };

  const handleCategoryPress = category => {
    navigation.navigate('SearchScreen', { searchText: category.name });
  };

  const handleActivityPress = activityId => {
    navigation.navigate('ActivityDetail',  activityId );
  };

  const renderCategory = category => (
    <View style={styles.cardWrapper} key={category.name}>
      <Pressable onPress={() => handleCategoryPress(category)}>
        <ImageBackground
          source={{ uri: category.imageUrl }}
          style={styles.card}
          imageStyle={styles.cardImage}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{category.name}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <View style={{ paddingHorizontal: 10 }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
                setSearchSuggestionEnabled(text.length > 2);
              }}
              onSubmitEditing={() => {
                setSearchSuggestionEnabled(false);
                navigation.navigate('SearchScreen', { searchText });
              }}
            />
            {searchSuggestionEnabled && renderSearchSuggestions()}
          </View>

          <ScrollView contentContainerStyle={styles.categoriesList}>
            <View style={styles.bestDealsContainer}>
              <Text style={styles.bestDealTitle}>Crafted For You</Text>
              <MaterialCommunityIcons name="star-face" color="black" size={20} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {homeSearchData.craftedForYou.map((data, index) => (
                <View key={index} style={{ marginLeft: 10 }}>
                  <TouchableOpacity onPress={() => handleActivityPress(data.activityId)}>
                    <SearchModal
                      activityName={data.activityName}
                      distance={data.distance}
                      organisation={data.organisation}
                      rating={data.rating}
                      categories={data.categories}
                      time={null}
                      credits={data.credits}
                      imageSource={data.imageSource}
                      ratingCount={data.ratingCount}
                      ratingDesc={data.ratingDesc}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <View style={styles.bestDealsContainer}>
              <Text style={styles.bestDealTitle}>Filling Out Fast</Text>
              <MaterialCommunityIcons name="alarm" color="black" size={20} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {homeSearchData.fillingOutFast.map((data, index) => (
                <View key={index} style={{ marginLeft: 10 }}>
                  <TouchableOpacity onPress={() => handleActivityPress(data.activityId)}>
                    <SearchModal
                      activityName={data.activityName}
                      distance={data.distance}
                      organisation={data.organisation}
                      rating={data.rating}
                      categories={data.categories}
                      time={null}
                      credits={data.credits}
                      imageSource={data.imageSource}
                      ratingCount={data.ratingCount}
                      ratingDesc={data.ratingDesc}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <Text style={styles.categoryTitle}>Top Categories</Text>
            <View style={styles.cardsContainer}>
              {homeSearchData.categories.map(renderCategory)}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    zIndex: 2, // Ensure it stays above suggestions
  },
  suggestionItem: {
    padding: 10,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bestDealsContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bestDealTitle: {
    fontSize: 20,
    marginRight: 5,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  categoryTitle: {
    paddingHorizontal: 10,
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  categoriesList: {
    paddingVertical: 10,
  },
  cardsContainer: {
    paddingHorizontal: 10,
    paddingRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default SearchLandingScreen;
