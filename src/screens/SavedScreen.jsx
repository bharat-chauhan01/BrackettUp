import React, { useState, useCallback } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getItem } from '../store/LocalStorage';
import SavedItem from '../components/SavedItem';
import { renderHeader } from '../modals/HeaderModal';
import { useNavigation } from '@react-navigation/native';

export default function SavedScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const storedData = await getItem('savedData');
      if (storedData != null && storedData.length > 0) {
        setData(storedData);
      } else {
        setData([]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      {renderHeader(navigation, 'Saved')}
      <View style={{ marginTop: 20 }}></View>
      <SavedItem data={data} />
    </View>
  );
}
