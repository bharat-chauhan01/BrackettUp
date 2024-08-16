import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { renderHeader } from '../modals/HeaderModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { faqs } from '../apis/MockData';

export default function SupportScreen() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSendEmail = () => {
    const email = 'care@brackettup.com';
    const subject = 'Customer Support';
    const mailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    Linking.openURL(mailUrl).catch(err => console.error('Error opening mail app', err));
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {renderHeader(navigation, 'Help & Support')}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>
          We're here to help you with anything and everything on Kussbus
        </Text>
        <Text style={styles.about}>
          At Kussbus, everything we expect at a day's start is you, better and happier than
          yesterday. We have got you covered. Share your concern or check our frequently asked
          questions listed below.
        </Text>

        <Text style={styles.faqTitle}>FAQ</Text>
        {faqs.map((faq, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.faqItem}
              onPress={() => toggleExpand(index)}
              activeOpacity={0.7}
            >
              <Text style={styles.faqText}>{faq.question}</Text>
              <Ionicons
                name={expandedIndex === index ? 'remove-outline' : 'add-outline'}
                size={24}
                color="#666666"
              />
            </TouchableOpacity>
            {expandedIndex === index && <Text style={styles.faqAnswer}>{faq.answer}</Text>}
          </View>
        ))}
      </ScrollView>

      <View style={styles.fixedBottom}>
        <Text style={styles.assistanceText}>Still stuck? Help is a mail away</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSendEmail}>
          <Text style={styles.buttonText}>Send a message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 120,
  },
  heading: {
    fontSize: 24,
    color: '#333333',
    fontWeight: '700',
    letterSpacing: -0.6,
    marginLeft: 4,
  },
  about: {
    fontSize: 17,
    marginTop: 20,
    lineHeight: 24,
    marginLeft: 4,
    color: '#777777',
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#444444',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 4,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  faqText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 4,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666666',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  fixedBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  assistanceText: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
