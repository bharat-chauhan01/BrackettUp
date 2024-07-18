import React from 'react';
   import { View, Text, StyleSheet, ScrollView } from 'react-native';
   import { useNavigation } from '@react-navigation/native';

   const Privacy = () => {
     const navigation = useNavigation();

     React.useLayoutEffect(() => {
       navigation.setOptions({
         headerTitle: 'Privacy Policy',
         headerBackTitleVisible: false,
       });
     }, [navigation]);

     return (
       <ScrollView contentContainerStyle={styles.container}>
         <Text style={styles.header}>ClassPass Privacy Policy</Text>
         <Text style={styles.subHeader}>Last Updated: March 18, 2024</Text>
         <Text style={styles.text}>
           ClassPass respects your right to privacy. This Privacy Policy explains who we are, how we and our Group Companies (defined below) collect, share, and use personal information about you, and how you can exercise your privacy rights.
         </Text>
         <Text style={styles.text}>
           This Privacy Policy applies to our website at classpass.com and our mobile applications (collectively, “Sites”)...
         </Text>
         {/* Add more content as necessary */}
       </ScrollView>
     );
   };

   const styles = StyleSheet.create({
     container: {
       padding: 20,
     },
     header: {
       fontSize: 24,
       fontWeight: 'bold',
       marginBottom: 10,
     },
     subHeader: {
       fontSize: 16,
       marginBottom: 20,
     },
     text: {
       fontSize: 14,
       marginBottom: 15,
     },
     
   });

   export default Privacy ;