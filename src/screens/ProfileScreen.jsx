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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PROFILE_ITEMS = [
  {
    key: '1',
    icon: 'card-account-details-outline',
    title: 'Account',
    button: 'arrow-right-bold',
    color: '#000000',
  },
  {
    key: '2',
    icon: 'calendar-account',
    title: 'Reservations',
    button: 'arrow-right-bold',
    color: '#000000',
  },
  {
    key: '3',
    icon: 'cards-heart-outline',
    title: 'Saved',
    button: 'arrow-right-bold',
    color: '#000000',
  },
  {
    key: '4',
    icon: 'help-circle-outline',
    title: 'Support',
    button: 'arrow-right-bold',
    color: '#000000',
  },
  {
    key: '5',
    icon: 'file-document-outline',
    title: 'Terms And Conditions',
    button: 'arrow-right-bold',
    color: '#000000',
  },
  {
    key: '6',
    icon: 'logout',
    title: 'Logout',
    button: 'arrow-right-bold',
    color: '#000000',
  },
];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const fontSize = 15;

export class ProfileScreen extends React.Component {
  state = {
    user: {
      name: 'Hi Guest',
    },
  };

  componentWillUnmount() {}

  render() {
    return (
      <View>
        <View style={styles.metaContainer}>
          <View style={styles.userProfileInfo}>
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
            data={PROFILE_ITEMS}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => alert(item.title)}>
                <View style={styles.itemRow}>
                  <View style={styles.item}>
                    <MaterialCommunityIcons
                      name={item.icon}
                      color={item.color}
                      size={styles.itemIcon.size}
                    />
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.arrow}>
                      <MaterialCommunityIcons
                        name={item.button}
                        color={item.color}
                        size={styles.itemIcon.size}
                      />
                    </View>
                  </View>
                  <View style={styles.horizontalLine} />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.key}
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
    color: '#000000',
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
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
  statDescription: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 4,
  },
  verticalLine: {
    marginTop: '2.5%',
    height: '70%',
    width: 2,
    backgroundColor: '#000000',
  },
  item: {
    flexDirection: 'row',
    marginTop: 10,
    height: 0.05 * height,
  },
  title: {
    flex: 1,
    fontSize: 15,
    marginStart: 10,
    fontWeight: '400',
    color: '#000000',
  },
  horizontalLine: {
    height: '1%',
    width: '100%',
    backgroundColor: '#909090',
  },
  arrow: {
    fontSize: fontSize + 4,
    marginEnd: 10,
  },
  itemIcon: {
    flex: 1,
    size: fontSize + 5,
  },
  itemRow: {
    flexDirection: 'column',
    marginEnd: '5%',
    marginStart: '5%',
  },
  userProfileInfo: {
    marginTop: '10%',
    alignItems: 'center',
  },
});
