import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WebviewScreen = () => {
  const route = useRoute();
  const { url } = route.params;
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [textInputValue, setTextInputValue] = useState('');

  useEffect(() => {
    console.log('URL:', url);

    // Cleanup function to reset state when component unmounts
    return () => {
      AsyncStorage.clear()
        .then(() => console.log('AsyncStorage cleared'))
        .catch((error) => console.error('Error clearing AsyncStorage:', error));
    };
  }, [url]);

  useEffect(() => {
    // Reset text input value when component mounts
    setTextInputValue('');
  }, []);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const handleNavigationStateChange = (navState) => {
    if (navState.url.includes('/?UserStatus=Logout')) {
      AsyncStorage.clear()
        .then(() => {
          // Reset text input value after clearing AsyncStorage
          setTextInputValue('');
          navigation.navigate('Loginscreen');
        })
        .catch((error) => console.error('Error clearing AsyncStorage:', error));
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      )}
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  webview: {
    flex: 1,
  },
});

export default WebviewScreen;
