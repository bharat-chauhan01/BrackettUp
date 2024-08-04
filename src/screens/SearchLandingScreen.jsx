import React, { useCallback, useState } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  Pressable,
} from 'react-native';
import { getCategories } from '../apis/CommonApi';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const SearchLandingScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const loadCategories = async () => {
    setLoading(true);
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (categories === null || categories.length === 0) {
        loadCategories();
      }
    }, []),
  );

  const handleCategoryPress = category => {
    navigation.navigate(`SearchScreen`, category.name);
  };

  const renderCategory = category => (
    <View style={styles.cardWrapper}>
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
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => navigation.navigate('SearchScreen', { searchText })}
      />
      <Text style={styles.categoryTitle}>Top Categories</Text>
      <ScrollView contentContainerStyle={styles.categoriesList}>
        <View style={styles.cardsContainer}>{categories.map(renderCategory)}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 20,
    marginTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  categoriesList: {
    paddingBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    // Shadow properties
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // To make text stand out
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right', // Align text to the right
  },
});

export default SearchLandingScreen;
