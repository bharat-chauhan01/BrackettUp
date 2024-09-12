import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getItem } from '../store/LocalStorage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { fetchCreditPackages, fetchAccountBalance } from '../apis/CommonApi';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component

const AddCreditsScreen = () => {
  const [user, setUser] = useState(false);
  const [creditOptions, setCreditOptions] = useState([]);
  const [accountBalance, setAccountBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const initializeData = async () => {
    try {
      setLoading(true);

      const auth = await getItem('auth');
      setUser(!!auth);
      if (auth) {
        const balance = await fetchAccountBalance();
        setAccountBalance(balance);
      }
      const creditPackages = await fetchCreditPackages();
      setCreditOptions(creditPackages);
    } catch (error) {
      console.error('Error during initialization:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      initializeData();
    }
  }, [isFocused]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Top Up Your Account</Text>

        {/* Use LinearGradient for the account container */}
        <LinearGradient colors={['#333333', '#888888']} style={styles.accountContainer}>
          <Text style={styles.balanceText}>Account Balance</Text>
          <Text style={styles.balanceBoxText}>
            {user ? `${accountBalance} credits` : '0 credits'}
          </Text>
        </LinearGradient>

        {!user ? (
          <View style={styles.loginPromptContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.inlineDescription}> to see your exclusive offers!</Text>
          </View>
        ) : (
          <Text style={styles.description}>
            Pick the plan that suits your needs, with no worries—your credits are yours for life!
          </Text>
        )}

        <CreditOptions creditOptions={creditOptions} />
      </View>
    </ScrollView>
  );
};

const CreditOptions = ({ creditOptions }) => {
  return (
    <View>
      {creditOptions.map(option => (
        <View key={option.packageId} style={styles.creditPackageContainer}>
          <View>
            <Text style={styles.creditText}>{`${option.credits} credit`}</Text>
            <Text style={styles.priceText}>{`₹${option.pricePerCredit}/credit`}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 1 }}>
              <Text
                style={styles.discountText}
              >{`₹${option.discountedPrice} (${option.percentageDiscount})`}</Text>
              <Text style={styles.originalPriceText}>{`₹${option.originalPrice}`}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => Alert.alert(`Buying ${option.credits} credits`)}
          >
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    color: 'black',
  },
  accountContainer: {
    paddingTop: 10,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  balanceText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  balanceBoxText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 2,
  },
  loginPromptContainer: {
    flexDirection: 'row', // Keep items in a row
    alignItems: 'center', // Align items vertically center
    marginVertical: 10,
  },
  inlineDescription: {
    fontSize: 16,
    color: 'black',
    marginLeft: 2, // Add some space between the button and the text
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  creditPackageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  creditText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText: {
    marginLeft: 2,
    fontSize: 10,
    color: '#777',
  },
  originalPriceText: {
    fontSize: 12,
    marginLeft: 4,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  discountText: {
    fontSize: 12,
    color: 'green',
    fontWeight: '500',
  },
  buyButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: '#000',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default AddCreditsScreen;
