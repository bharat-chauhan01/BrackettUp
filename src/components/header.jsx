import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './iconButtons';
import ProfileIcon from './profileIcon';
import { imageURL } from '../constants/imageURLs';
import { useSelector } from 'react-redux';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [credit, setCredit] = useState(42);
  const user = useSelector(state => state.Login.user);

  return (
    <View style={styles.container}>
      <Icon name="chevron-left" size={23} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignContent: 'space-between',
        }}
      >
        <View style={styles.HeaderIcon}>
          <Icon name="arrow-up" size={23} />
        </View>

        <TouchableOpacity
          style={styles.HeaderIcon}
          onPress={() => {
            setSolid(!solid);
          }}
        >
          <Icon name="heart" size={23} solid={solid} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.HeaderIcon, { alignItems: 'center' }]}
          onPress={() => setCredit(credit + 1)}
        >
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{credit}</Text>
          <Text style={{ color: 'grey', fontSize: 10 }}>credits</Text>
        </TouchableOpacity>

        <View style={styles.HeaderIcon}>
          <ProfileIcon imageUri={imageURL[0]} size={23} username={user} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
  HeaderIcon: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
