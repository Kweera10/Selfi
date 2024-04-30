import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';

const Languagescreenx = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Loginscreen');
    }, 6000); 
    return () => clearTimeout(timer);
  }, []); 

  const handleImagePress = () => {
    navigation.navigate('Loginscreen');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: '200', fontSize: 50, color: 'white', marginTop: 20, marginLeft: 20 }}>
        DMI FINANCE EASY ACCESS PORTAL -  DEALER
      </Text>

      <Text style={{ marginTop: 80, color: 'white', fontWeight: '200', marginLeft: 20 }}>
        Onboarding
      </Text>

      <TouchableOpacity onPress={handleImagePress} style={{ position: 'absolute', bottom: 90, right: 20 }}>
        <Image
          source={require('../modules/assets/images.png')}
          style={{ width: 45, height: 45 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default Languagescreenx;
