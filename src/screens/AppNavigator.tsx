import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Languagescreenx from './Languagescreenx';
import Loginscreen from './Loginscreen';
import Webview from './WebviewScreen';
import WebviewScreen from './WebviewScreen';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Languagescreenx" component={Languagescreenx} options={{ headerShown: false }} />

                <Stack.Screen name="Loginscreen" component={Loginscreen} options={{ headerShown: false }} />
                <Stack.Screen name="WebviewScreen" component={WebviewScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
});

export default AppNavigator;
