import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../store/slices/ProfileSlice';
import { setLogout } from '../store/slices/loginSlice';
import { fetchProfile, logout } from '../apis/CommonApi';
import { useFocusEffect } from '@react-navigation/native';
import LogoutModal from '../modals/LogoutModal';
import { getItem } from '../store/LocalStorage';
import SupportScreen from '../screens/SupportScreen';

const PROFILE_ITEMS_META = [
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
  { key: '6', icon: 'logout', title: 'Logout', button: 'arrow-right-bold', color: '#000000' },
];

const LOGIN_ITEM = {
  key: '9',
  icon: 'login',
  title: 'Login',
  button: 'arrow-right-bold',
  color: '#000000',
};

const { width, height } = Dimensions.get('window');
const fontSize = 15;

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.Profile);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileItems, setProfileItems] = useState(PROFILE_ITEMS_META);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchProfileData = async () => {
    setLoading(true);
    setError(null);
    try {
      const authData = await getItem('auth');
      if (!authData || !authData.authToken) {
        setProfileItems(PROFILE_ITEMS_META.filter(item => item.key !== '6').concat(LOGIN_ITEM));
        dispatch(setProfile({ name: 'Hi Guest', credits: 0, reservations: 0 }));
      } else {
        const response = await fetchProfile();
        dispatch(
          setProfile({
            name: response.name,
            credits: response.credits,
            reservations: response.reservations,
          }),
        );
        setProfileItems(PROFILE_ITEMS_META);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProfileData();
    }, []),
  );

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = async () => {
    setModalVisible(false);
    await logout();
    dispatch(setLogout());
    setProfileItems(PROFILE_ITEMS_META.filter(item => item.key !== '6').concat(LOGIN_ITEM));
    navigation.navigate('Home');
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (item.title === 'Logout') {
          handleLogout();
        } else if (item.title === 'Login') {
          navigation.navigate('Login');
        } else if (item.title === 'Terms And Conditions') {
          navigation.navigate('TermAndCondition');
        } else if (item.title === 'Saved') {
          navigation.navigate('SavedScreen');
        } else if (item.title === 'Reservations') {
          navigation.navigate('ReservationsScreen');
        } else if (item.title === 'Support') {
          navigation.navigate('SupportScreen');
        } else {
          navigation.navigate('ScheduleScreen');
        }
      }}
    >
      <View style={styles.itemRow}>
        <View style={styles.item}>
          <MaterialCommunityIcons name={item.icon} color={item.color} size={styles.itemIcon.size} />
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
  );

  if (loading) {
    return <ActivityIndicator size={styles.loadingIcon.size} color={styles.loadingIcon.color} />;
  }

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.errorText}>{error.message}</Text>
        <TouchableHighlight style={styles.submit} onPress={fetchProfileData} underlayColor="#fff">
          <Text style={styles.submitText}>Retry</Text>
        </TouchableHighlight>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <View style={styles.userProfileInfo}>
          <Image round style={styles.avatar} source={require('../../assets/user.png')} />
          <Text style={styles.name}>{profileData ? profileData.name : 'No Data'}</Text>
        </View>
        <View style={styles.statscontainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{profileData ? profileData.credits : 0}</Text>
            <Text style={styles.statDescription}>Credits</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.stat}>
            <Text style={styles.statValue}>{profileData ? profileData.reservations : 0}</Text>
            <Text style={styles.statDescription}>Reservations</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <FlatList data={profileItems} renderItem={renderItem} keyExtractor={item => item.key} />
      </View>
      <LogoutModal visible={modalVisible} onConfirm={confirmLogout} onCancel={cancelLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  metaContainer: {
    marginTop: 0.03 * height,
    width,
    height: 0.3 * height,
  },
  buttonContainer: {
    marginTop: 0.07 * height,
    width,
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
    width: 0.5,
    backgroundColor: '#AAAAAA',
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
  errorText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    marginTop: fontSize,
    backgroundColor: '#68a0cf',
    borderRadius: 50,
    width: 80,
    height: fontSize + fontSize,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    marginTop: 0.1 * (fontSize + fontSize),
    marginBottom: 0.1 * (fontSize + fontSize),
    color: '#fff',
    textAlign: 'center',
    fontSize: fontSize,
  },
  loadingIcon: {
    size: 'large',
    color: '#0000ff',
  },
});

export default ProfileScreen;
