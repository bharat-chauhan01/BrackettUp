import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DATA = [
  {
    icon: '',
    title: 'Account',
    button: '>',
  },
  {
    imagePath: '',
    title: 'Reservations',
    button: '>',
  },
  {
    imagePath: '',
    title: 'Saved',
    button: '>',
  },
  {
    imagePath: '',
    title: 'Support',
    button: '>',
  },
  {
    imagePath: '',
    title: 'Terms And Conditions',
    button: '>',
  },
  {
    imagePath: '',
    title: 'Logout',
    button: '>',
  },
];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export class ProfileScreen extends React.Component {
  state = {
    user: {
      name: 'Hi Guest',
    },
  };

  unsubscribe = null;

  componentWillUnmount() {}

  render() {
    return (
      <View>
        <View style={styles.metaContainer}>
          <View style={{ marginTop: 64, alignItems: 'center' }}>
            <Image round style={styles.avatar} source={require('../../assets/user.png')} />
            <Text style={styles.name}>{this.state.user.name}</Text>
          </View>
          <View style={styles.statscontainer}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statDescription}>Credits</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statDescription}>Reservations</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => alert(item.title)}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginEnd: '5%',
                    marginStart: '5%',
                  }}
                >
                  <View style={styles.item}>
                    <Image round style={styles.itemIcon} source={require('../../assets/user.png')} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.arrow}>{item.button}</Text>
                  </View>
                  <View style={styles.horizontalLine} />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  metaContainer: {
    marginTop: 0.03 * height,
    width: width,
    height: 0.3 * height,
  },
  buttonContainer: {
    marginTop: 0.07 * height,
    width: width,
  },
  avatar: {
    width: 0.2 * width,
    height: 0.3 * 0.3 * height,
    borderRadius: 68,
    paddingLeft: 10,
  },
  name: {
    marginTop: 0.02 * height,
    fontSize: 20,
    fontWeight: 'bold',
  },
  statscontainer: {
    marginTop: 0.02 * height,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    color: '#4F566D',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
  statDescription: {
    color: '#4F566D',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  verticalLine: {
    height: '100%',
    width: 2,
    backgroundColor: '#909090',
  },
  item: {
    flexDirection: 'row',
    marginTop: 10,
    height: 0.05 * height,
  },
  title: {
    fontSize: 15,
    marginStart: 20,
    height: 0.05 * height,
    fontWeight: 'bold',
  },
  itemIcon: {
    width: 0.02 * width,
    height: 0.05 * height,
  },
  horizontalLine: {
    height: '1%',
    width: '100%',
    backgroundColor: '#909090',
  },
  arrow: {
    fontSize: 15,
    marginEnd: '20',
    height: 0.05 * height,
    fontWeight: 'bold',
  },
});
