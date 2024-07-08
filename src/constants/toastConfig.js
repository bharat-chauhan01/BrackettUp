import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#1DB954',
        borderLeftWidth: 10,
        zIndex: 4,
        top: 50,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: 'white',
      }}
      text1Style={{
        fontSize: 17,
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 13,
        fontWeight: '400',
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};
