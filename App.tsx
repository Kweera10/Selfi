import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppNavigator from './src/screens/AppNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set background color to black
  },
});

export default App;



















// import React, { useState } from "react";
// import { View, Text, Image, StatusBar, TouchableOpacity, Modal, StyleSheet, TextInput } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AppIntroSlider from "react-native-app-intro-slider";
// import { COLORS, SIZES } from "./src/constants/theme";
// import passwordscreen from "./src/screens/passwordscreen";
// import loginscreen from "./src/screens/loginscreen";
// import otpscreen from "./src/screens/otpscreen";

// const Stack = createStackNavigator();

// const slides = [
//   {
//     id: 1,
//     title: "DMI Business Hub",
//     image: require('./src/modules/assets/images1.png')
//   },
//   {
//     id: 2,
//     title: 'Gateway to new Business',
//     image: require('./src/modules/assets/images1.png')
//   },
//   {
//     id: 3,
//     title: 'Pick Up The Service',
//     image: require('./src/modules/assets/images1.png')
//   }
// ];

// const IntroScreen = ({ navigation }) => {
//   const [showHomePage, setShowHomePage] = useState(false);
//   const [showBottomSheet, setShowBottomSheet] = useState(false);
//   const [bottomSheetContent, setBottomSheetContent] = useState("");
//   const [dealerCode, setDealerCode] = useState("");
//   const [password, setPassword] = useState("");

//   StatusBar.setBarStyle('light-content', true);
//   StatusBar.setBackgroundColor(COLORS.primary);

//   const buttonLabel = (label) => {
//     return (
//       <View style={{
//         padding: 12
//       }}>
//         <Text style={{
//           color: COLORS.title,
//           fontWeight: '600',
//           fontSize: SIZES.h4,
//         }}>
//           {label}
//         </Text>
//       </View>
//     );
//   };

//   const openBottomSheet = (content) => {
//     setShowBottomSheet(true);
//     setBottomSheetContent(content);
//   };

//   if (!showHomePage) {
//     return (
//       <AppIntroSlider
//         data={slides}
//         renderItem={({ item }) => {
//           return (
//             <View style={{
//               flex: 1,
//               alignItems: 'center',
//               padding: 15,
//               paddingTop: 100,
//             }}>
//               <Image
//                 source={item.image}
//                 style={{
//                   width: SIZES.width - 80,
//                   height: 400,
//                 }}
//                 resizeMode="contain"
//               />
//               <Text style={{
//                 fontWeight: 'bold',
//                 color: COLORS.title,
//                 fontSize: SIZES.h1,
//               }}>
//                 {item.title}
//               </Text>
//             </View>
//           );
//         }}
//         activeDotStyle={{
//           backgroundColor: COLORS.primary,
//           width: 30,
//         }}
//         showSkipButton
//         renderNextButton={() => buttonLabel("Next")}
//         renderSkipButton={() => buttonLabel("Skip")}
//         renderDoneButton={() => buttonLabel("Done")}
//         onDone={() => {
//           setShowHomePage(true);
//         }}
//       />
//     );
//   } else {
//     return (
//       <View style={{ marginTop: 60 }}>
//         <TouchableOpacity onPress={() => openBottomSheet("Enter Dealer Code")}>
//           <Text style={{
//             fontWeight: 'bold', color: COLORS.title,
//             fontSize: SIZES.h1, alignSelf: 'center'
//           }}>Welcome to DMI Finance Easy Access Portal</Text>
//           <View style={{ marginTop: 40, marginBottom: 20 }}>
//             <Text style={{
//               fontWeight: 'bold', color: COLORS.title,
//               fontSize: SIZES.h1, alignSelf: 'center'
//             }}>
//               Sign in
//             </Text>
//           </View>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => navigation.navigate('otpscreen')}
//           >


            
//             <Text style={styles.buttonText}>Login with OTP</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => openBottomSheet("Enter Dealer Code and Password")}
//           >
//             <Text style={styles.buttonText}>Login with Password</Text>
//           </TouchableOpacity>
//         </TouchableOpacity>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={showBottomSheet}
//           onRequestClose={() => setShowBottomSheet(false)}
//         >
//           <View style={styles.bottomSheet}>
//             {bottomSheetContent === "Enter Dealer Code" && (
//               <View>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter Dealer Code"
//                   placeholderTextColor="black" 
//                   onChangeText={text => setDealerCode(text)}
//                   value={dealerCode}
//                 />
//                 <TouchableOpacity style={styles.button} onPress={() => console.log("Send OTP button pressed")}>
//                   <Text style={styles.buttonText}>Send OTP</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//             {bottomSheetContent === "Enter Dealer Code and Password" && (
//               <View>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter Dealer Code"
//                   placeholderTextColor="black" 
//                   onChangeText={text => setDealerCode(text)}
//                   value={dealerCode}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter Password"
//                   placeholderTextColor="black" 
//                   onChangeText={text => setPassword(text)}
//                   value={password}
//                   secureTextEntry={true}
//                 />
//                 <TouchableOpacity style={styles.button} onPress={() => console.log("Login button pressed")}>
//                   <Text style={styles.buttonText }>Login</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//             {/* <TouchableOpacity onPress={() => setShowBottomSheet(false)} style={styles.closeButton}>
//               <Text style={{ color: 'white' ,fontSize:15}}>Close</Text>
//             </TouchableOpacity> */}
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: COLORS.primary,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   buttonText: {
//     color: COLORS.white,
//     alignSelf:'center'
//   },
//   bottomSheet: {
//     backgroundColor: COLORS.white,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: '50%',
//   },
//   closeButton: {
//     backgroundColor: COLORS.primary,
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     width:60,
//     alignSelf:'center',
//     height:20
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: COLORS.primary,
//     borderRadius: 5,
//     padding: 10,
//     color:'	#964B00',
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Intro">
//         <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="loginScreen" component={loginscreen} />
//         <Stack.Screen name="passwordscreen" component={passwordscreen} />
//         <Stack.Screen name="otpscreen" component={otpscreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
