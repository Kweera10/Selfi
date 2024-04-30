import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from 'react-native-paper';
import { COLOR_BLACK, COLOR_BLUE_LIGHT, COLOR_FULL_WHITE, COLOR_WHITE, LANGUAGES } from '../constants/Strings';

const Languagescreenx = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

  const onPress = () => {
    navigation.navigate('Withotp', { language: selectedLanguage }); // Pass selected language as a parameter
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Choose your language</Text>
      <View style={styles.cardContainer}>
        {LANGUAGES.map((language) => (
          <TouchableOpacity onPress={() => setSelectedLanguage(language)} key={language.key}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{language.text}</Text>
                  <Text style={styles.subTtitle}>{language.subText}</Text>
                </View>
                <View
                  style={[
                    selectedLanguage.key === language.key ? [styles.outerCircle, { backgroundColor: '#38B5E4' }] : styles.outerCircle,
                    { marginRight: 10 },
                  ]}>
                  <View style={selectedLanguage.key === language.key ? styles.innerCircle : null} />
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: COLOR_BLUE_LIGHT,
          borderRadius: 4,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            color: 'white',
          }}>
          Proceed
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 30,
  },
  card: {
    backgroundColor: '#252525',
    borderRadius: 8,
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  titleContainer: {
    // width: '50%'
  },
  title: {
    color: COLOR_FULL_WHITE,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
    marginBottom: 8,
  },
  subTtitle: {
    color: COLOR_FULL_WHITE,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
  },
  headerTitle: {
    color: COLOR_WHITE,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 20,
  },
  container: {
    backgroundColor: 'black'
  },
  outerCircle: {
    borderRadius: 10,
    height: 20,
    width: 20,
    borderColor: '#38B5E4',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 5,
  },
  innerCircle: {
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 5,
    height: 10,
    width: 10,
    backgroundColor: '#FFF',
  },
});

export default Languagescreenx;
