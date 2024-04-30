import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView, Modal, Alert } from 'react-native';
import {useOtpVerify} from 'react-native-otp-verify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native';
import { Pressable } from 'react-native';

const Loginscreen = ({ navigation }) => {
  const [loginMethod, setLoginMethod] = useState('password');
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null),useRef(null)];
  const otpInputs = useRef([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [dealerCode, setDealerCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otpEnter,SetOtpEnter] = useState('');
  const [timer, setTimer] = useState(59);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const timerRef = useRef(timer);
  const dealerCodeKey = 'dealerCode';
  const phoneNumberKey = 'phoneNumber';
  const selectedLanguageKey = 'selectedLanguage';
  
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset state variables when component receives focus
      setDealerCode('');
      setPassword('');
    });

    // Cleanup function to unsubscribe from navigation event
    return unsubscribe;
  }, [navigation]);

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    
      setPhoneNumber('');
      setOtp('');
    });

    return unsubscribe;
  }, [navigation]);


  

  // const handleDealerCodeChange = async (text) => {
  //   const numericInput = text.replace(/[^0-9]/g, '');
  //   setDealerCode(numericInput);
  //   try {
  //     await AsyncStorage.setItem(dealerCodeKey, numericInput);
  //   } catch (error) {
  //     console.error('Error saving dealer code to AsyncStorage:', error);
  //   }
  // };
  


  // const handlePhoneNumberChange = async (text) => {
  //   const numericInput = text.replace(/[^0-9]/g, '');
  //   setPhoneNumber(numericInput);
  //   if (numericInput.length === 10) {
  //     setTimer(60); 
  //     try {
  
  //       await AsyncStorage.setItem(phoneNumberKey, numericInput);
  //     } catch (error) {
  //       console.error('Error saving phone number to AsyncStorage:', error);
  //     }
  //   }
  // };


  
  
//   const handlePhoneNumberChange = async (text) => {
//     const numericInput = text.replace(/[^0-9]/g, '');
//     setPhoneNumber(numericInput);
//     setPhoneNumber(text);
    
//     if (numericInput.length === 10) {
//       // Start the timer here
//       startTimer();
//     } else {
//       // Stop the timer if it's already running
// stopListener();
//     }
//       // try {
//       //   await AsyncStorage.setItem(phoneNumberKey, numericInput);
//       // } catch (error) {
//       //   console.error('Error saving phone number to AsyncStorage:', error);
//       // }
    
//   };
  
// const handlePhoneNumberChange = (text) => {

//   setPhoneNumber(text);
//   if (text.length === 10 && !timer) {
//     startTimer();
//   } else if (timer && text.length !== 10) {

//     stopListener();
//   }

//   if (text.length === 8) {
//     callGenerateOTPAPI(); 
//   }
// };





  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1));
    }, 1000);
    return interval;
  };


// 

  

  // useEffect(() => {
  //   if (timer > 0) {
  //     const intervalId = startTimer();
  //     return () => clearInterval(intervalId);
  //   }
  // }, [timer]);
  
  const handleDealerCodeChange = (text) => {
    // const numericInput = text.replace(/[^0-9]/g, '');
    
    setDealerCode(text);
  };
  


  const handlePasswordChange = (text) => {
    setPassword(text);
  };



const callcall = () => {
  console.log(phoneNumber+" Phone nom");
  
  if (phoneNumber.length === 9) {
    
    console.log('New Text:',phoneNumber)
    
    callGenerateOTPAPI(); 
     if (timerStarted) {
      setTimerStarted(true);
      setTimer(59); 
    }
  }
  if (phoneNumber.length === 9 && !timer) {
 timerStarted
  } else if (timer && phoneNumber.length !== 10) {
    stopListener();
  }
}  

useEffect(() => {
  // Log the updated phone number value to the console
  console.log('Updated phone number value:', phoneNumber);
    if (phoneNumber.length === 9) {
    
    console.log('New Text:',phoneNumber)
    
    callGenerateOTPAPI(); 
     if (timerStarted) {
      setTimerStarted(true);
      setTimer(59); 
    }
  }
  if (phoneNumber.length === 9 && !timer) {
 timerStarted
  } else if (timer && phoneNumber.length !== 10) {
    stopListener();
  }

}, [phoneNumber]); // Only re-run the effect if phoneNumber changes


const handlePhoneNumberChange = (text) => {
  // setPhoneNumber(text);
  // callcall();
  // setPhoneNumber(text, () => {
  //   console.log('====================================');
  //   console.log("ksjdbfaksdf", phoneNumber);
  //   console.log('====================================');
  //   // console.log('Updated input value:', inputValue);
  // });
  setPhoneNumber(text);
//   if (text.length === 9) {
    
//     console.log('New Text:',phoneNumber)
    
//     callGenerateOTPAPI(); 
//      if (timerStarted) {
//       setTimerStarted(true);
//       setTimer(59); 
//     }
//   }
//   if (text.length === 9 && !timer) {
//  timerStarted
//   } else if (timer && text.length !== 10) {
//     stopListener();
//   }




};




  const dynamicSubmitBoxStyle = {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
    borderRadius: buttonPressed ? 8 : 8,
    overflow: 'hidden',
  };


  const isLoginButtonEnabled = () => {
    if (loginMethod === 'password') {
      return dealerCode.length === 9 && dealerCode.trim() !== ''; 
    } else if (loginMethod === 'otp') {
      return phoneNumber.length >=1 && otp.length === 5;
    }
    return false;
  };

  // const handlePhoneNumberChange = (text) => {
  //   const numericInput = text.replace(/[^0-9]/g, '');
  //   setPhoneNumber(numericInput);
  // };
  



  const languages = [
    { label: 'Select', value: '' },
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Tamil', value: 'Tamil' },
    { label: 'Telugu', value: 'Telugu' },
    { label: 'Kannada', value: 'Kannada' },
    { label: 'Malayalam', value: 'Malayalam' },
    { label: 'Gujarati', value: 'Gujarati' },
    { label: 'Marathi', value: 'Marathi' },
    { label: 'Bengali', value: 'Bengali' },
  ];

  // const handleLanguageSelect = (language) => {
  //   setSelectedLanguage(language);
  //   setShowOptions(false);
  // };


  const handleLanguageSelect = async (language) => {
    setSelectedLanguage(language);
    setShowOptions(false);
    try {
      console.log('ppppppppppppppppp')
      await AsyncStorage.setItem(selectedLanguageKey, language);
    } catch (error) {
      console.error('Error saving selected language to AsyncStorage:', error);
    }
  };
  


  // const loadInitialData = async () => {
  //   try {
  //     const storedDealerCode = await AsyncStorage.getItem(dealerCodeKey);
  //     const storedPhoneNumber = await AsyncStorage.getItem(phoneNumberKey);
  //     const storedLanguage = await AsyncStorage.getItem(selectedLanguageKey);
  
  //     if (storedDealerCode) setDealerCode(storedDealerCode);
  //     if (storedPhoneNumber) setPhoneNumber(storedPhoneNumber);
  //     if (storedLanguage) setSelectedLanguage(storedLanguage);
  //   } catch (error) {
  //     console.error('Error loading data from AsyncStorage:', error);
  //   }
  // };



  // useEffect(() => {
  //   loadInitialData();
  // }, []);
  

  const {
    hash,
    otp: recievedOtp,
    message,
    timeoutError,
    stopListener,
    startListener,
  } = useOtpVerify({numberOfDigits: 6});

 

  useEffect(() => {
    if (recievedOtp) {
      setOtp(recievedOtp);
    }
  }, [recievedOtp]);



  // useEffect(() => {
  //   let interval;
  //   if (phoneNumber.length === 10 &&  !timerStarted) {
  //     setTimerStarted(true);
  //     interval = setInterval(() => {
  //       setTimer(prevTimer => (prevTimer === 0 ? 59 : prevTimer - 1));
  //     }, 1000);
  //   } else if (phoneNumber.length !== 10 || (timer === 0 && !timerStarted)) {
  //     setTimerStarted(false);
  //     clearInterval(interval);
  //     setTimer(0);
  //   }

  //   return () => clearInterval(interval);
  // }, [phoneNumber, timer,timerStarted]);



  useEffect(() => {
    let interval;
    
    if (phoneNumber.length >=9  && timer > 0 && otp.length!==5  ) {
      interval = setInterval(() => {
        setTimer(prevTimer => (prevTimer === 0 ? 59 : prevTimer - 1));
      }, 1000);
      
      setTimerStarted(true);


    } else if (otp.length>=1 || timer === 0 ) {
      setTimerStarted(false);
 
    }
  
    return () => clearInterval(interval);
  }, [phoneNumber,timer,]);
  





  // const onKeyPress = key => {
  //   switch (key) {
  //     case 'delete': {
  //       if (otp) {
  //         setOtp(otp.slice(0, otp.length - 1));

  //         if (otp.length > 0) {
  //           inputRefs[otp.length - 1]?.current?.focus();
  //         }
  //       }
  //       return;
  //     }

  //     case 'done':
  //       if (otp.length === 5) {
  //         onDone();
  //       }
  //       return;

  //     default:
  //       if (otp.length <= 5) {
  //         if (otp.length < 5) {
  //           inputRefs[otp.length + 1]?.current?.focus();
  //         }
  //         setOtp(`${otp}${key}`);
  //       }
  //   }
  // };









// const onKeyPress = key => {
//   switch (key) {
//     case 'Backspace': {
//       if (otp) {
//         setOtp(prevOtp => prevOtp.slice(0, prevOtp.length - 1));
//         const lastIndex = otp.length - 1;
//         if (lastIndex >= 0) {
//           inputRefs[lastIndex]?.current?.focus();
//         }
//       }
//       return;
//     }

//     case 'done':
//       if (otp.length === 6) {
//         onDone();
//       }
//       return;

//     default:
//       if (otp.length < 6) {
//         const nextIndex = otp.length;
//         setOtp(prevOtp => {
//           const newOtp = prevOtp + key;
//           inputRefs[nextIndex]?.current?.focus();
//           return newOtp;
//         });
//       }
//   }
// };




const callsendOtpAPI = () => {

  const apiUrl = 'https://apim.quickwork.co/UATStaging/dealer_portal/v1/resendOtp';
  
  const apiKey = 'RNP5g9vKT9ffhdS06XTqaqvR5MIB22gO';
  const requestBody = {
    username: phoneNumber,
  };
  console.log('rsendOTP....',requestBody)
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'APIKey': apiKey,
    },
    body: JSON.stringify(requestBody),
  
  })
  .then(response => response.json())
  .then(data => {

    console.log('DATA-----:', data);
    console.log('MEssage     -----:', data.message);

    // console.log('OTP         -----:', data.data.otp);
   
  })
  .catch(error => {
    console.error('Error generating OTP:', error);
  });
};








const callGenerateOTPAPI = () => {

  const apiUrl = 'https://apim.quickwork.co/UATStaging/dealer_portal/v1/generateOTP';
  
  const apiKey = 'RNP5g9vKT9ffhdS06XTqaqvR5MIB22gO';
  const requestBody = {
    username: phoneNumber,
  };
  console.log('uuuuuuuuuu',requestBody)
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'APIKey': apiKey,
    },
    body: JSON.stringify(requestBody),
  
  })
  .then(response => response.json())
  .then(data => {

    console.log('DATA-----:', data);
    console.log('MEssage     -----:', data.message);

    console.log('OTP         -----:', data.data.otp);
   
  })
  .catch(error => {
    console.error('Error generating OTP:', error);
  });
};



const onKeyPress = (key: any, index: number) => {
  switch (key) {
    case 'delete': {
      if (otp) {
        setOtp(otp.slice(0, otp.length - 1));
        // setMasks(
        //   `${otp.slice(0, otp.length - 1)}${key}`.split('').map(() => '*'),
        // );
        if (otp.length > 0) {
          inputRefs[otp.length - 1]?.current?.focus();
        }
      }
      return;
    }

    case 'done':
      if (otp.length === 5) {
        onDone();
      }
      return;

    default:
      if (otp.length <= 5) {
        if (otp.length < 5) {
          inputRefs[otp.length + 1]?.current?.focus();
        }
        //   Keyboard.dismiss();
        setOtp(`${otp}${key}`);
      }
  }
};

  const onResndOtp = () => {
 

    if (timerStarted) {
      startTimer();
    }
    
    startTimer();
  

    setTimer(60);
    callsendOtpAPI()


    let data = {phone: phoneNumber};

  };

  const [otp, setOtp] = useState('');
  
  const renderPasswordScreen = () => {
    return (
      <View style={{ marginTop: 20 }}>


        <Text style={{ marginLeft: 20 }}>{selectedLanguage === 'Hindi' ? 'डीलर कोड' : 'Dealer Code'}</Text>

        <TextInput
          style={styles.dealerInput
          }

          placeholderTextColor="black"
     
          onChangeText={handleDealerCodeChange}
          value={dealerCode}
          maxLength={9}
 
        
  
   


        />
        <Text style={{ marginLeft: 20 }}>{selectedLanguage === 'Hindi' ? 'पासवर्ड' : 'Password'}</Text>
        <TextInput
          style={styles.passwordInput}
          onChangeText={handlePasswordChange}
          value={password}
          placeholderTextColor="black"
          secureTextEntry={true}
          


        />

<Text style={{ marginLeft: 20, fontSize: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Disclaimer:</Text> You can search for customer details of 
      </Text>

        <Text style={{ marginLeft: 20, fontSize: 12 }}>the DMI Loans that you have disbursed </Text>

        <View style={{ marginTop: 20, marginHorizontal: 20 }}>

       <Button
          title={selectedLanguage === 'Hindi' ? 'लॉग इन' : 'Log in'}
          disabled={!isLoginButtonEnabled()}
          onPress={handlePasswordLogin}
         
          
          
          // color="#ff0000" 
/> 

{/* 
<TouchableOpacity style={styles.button} onPress={handlePasswordLogin}>
                  {isLoading ? (
                    <ActivityIndicator size="small" color='#ffffff' />
                  ) : (
                    <Text style={styles.buttonText}>Submit</Text>
                  )}
                </TouchableOpacity> */}



{/* 

                <Pressable
         onPress={handlePasswordLogin}
            style={styles.submitBoxContainer}>
            {({pressed}) => (
              <linearGradient
                colors={
                  loading
                    ? ['#808080', '#808080']
                    : ['#2E7DEA', '#38B5E4', '#00A9EB', '#2596FF']
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[
                  styles.submitBox,
                  dynamicSubmitBoxStyle,
                  loading && styles.overlay,
                  {opacity: pressed ? 0.8 : 1},
                ]}>
                <View style={styles.submitBoxContent}>
                  {loading && (
                    <Loade
                      color="#3A4048"
                      style={{marginRight: 8}}
                      height={15}
                      size="small"
                    />
                  )}
                  <Text testID="buttonSubmit" style={styles.okaytext}>
                    Pay Bills
                  </Text>
                </View>
              </LinearGradient>
            )}
          </Pressable> */}




        </View>
        <Text style={{ alignSelf: 'center', marginLeft:10,marginVertical: 20, fontWeight: 'bold', color: '#000000' }}>
            Help & Support
        </Text>
        <View style={{ flexDirection: 'row' }}>

          <Text style={{ marginLeft: 20, fontSize: 8, fontWeight: '900' }}>
          <FontAwesomeIcon name="phone" size={9} />   02268539500 / 08064807777  |
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 8, fontWeight: '900' }}>
          <FontAwesomeIcon name="envelope" size={9} />  customercare@dmifinance.in
          </Text>

        </View>
      </View>
    );
  };

  const renderOTPScreen = () => {
    return (
      <View style={{ marginTop: 20 }}>


        <Text style={{ marginLeft: 20 }}>{selectedLanguage === 'Hindi' ? 'फ़ोन नंबर' : 'Dealer Code'}</Text>
   
        <TextInput
          style={styles.phoneInput}
          placeholderTextColor="black"
        value={phoneNumber}
      
          onChangeText={((e =>{ handlePhoneNumberChange(e)}))}
          maxLength={9}


        />


        <Text style={{ marginLeft: 20 }}>{selectedLanguage === 'Hindi' ? 'ओटीपी ' : 'OTP'}</Text>
        <View style={[styles.otpInputWrapper]}>
          {[0, 1, 2, 3, 4].map((k, i) => (
            <TextInput
              key={k}

              style={styles.otpInput}
              ref={inputRefs[k]}
              keyboardType="numeric"
 secureTextEntry={true}
 
              value={otp.length > i ? '*' : ''}
              
              onChangeText={text => onKeyPress(text, i)}
              keyboardAppearance="dark"
              onKeyPress={event => {
                let key = event.nativeEvent.key;
                switch (key) {
                  case 'delete': {
                    if (otp) {
                      setOtp(otp.substr(0, otp.length - 1));
                      if (otp.length > 0) {
                        inputRefs[otp.length - 1].current.focus();
                      }
                    }
                    return;
                  }
                  case 'Backspace': {
                    setOtp('');
                    inputRefs[0].current.focus();
                    return;
                  }
                }
              }}
            />
          ))}
        </View>
      
  
        <View style={styles.timerWrapper}>
  {timerStarted && (
    <FontAwesomeIcon name="clock-o" size={9} style={{ marginLeft: 20 }} />
  )}
  {timerStarted &&(
  <Text style={[styles.timer, timer !== 0 ? { display: 'flex', marginLeft: 10 } : { display: 'none' }]}>
    0:{timer < 10 ? '0' + timer : timer}
  </Text>
  )}



{ timer === 0 &&phoneNumber.length ===9 && (
  <TouchableOpacity onPress={onResndOtp}>
    <Text style={styles.resendOtpBtn}>Resend OTP</Text>
  </TouchableOpacity>
)}


  

</View>

{/* 

 {!timerStarted && timer !== 0 && (
    <TouchableOpacity onPress={onResendOtp}>
      <Text style={styles.resendOtpBtn}>Resend OTP</Text>
    </TouchableOpacity>
  )} */}










<View style ={{marginTop:-10}}>

<Text style={{ marginLeft: 20, fontSize: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Disclaimer:</Text> You can search for customer details of 
      </Text>
        <Text style={{ marginLeft: 20, fontSize: 12 }}>the DMI Loans that have disbursed </Text>

        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
          <TouchableOpacity>
          <Button
          onPress={handlePasswordLogin }
          disabled={!isLoginButtonEnabled()}


            title={selectedLanguage === 'Hindi' ? 'लॉग इन' : 'LOG IN'}
          />
          </TouchableOpacity>
        </View>

        <Text style={{ alignSelf: 'center',marginLeft:10, marginVertical: 20, fontWeight: 'bold', color: '#000000' }}>
          Help & Support
        </Text>
        </View>
<View style={{ flexDirection: 'row' }}>

<Text style={{ marginLeft: 15, fontSize: 8, fontWeight: '900' }}>
<FontAwesomeIcon name="phone" size={9} />   022678819919919 / 8998881826   |
</Text>
<Text style={{ marginLeft: 10, fontSize: 8, fontWeight: '900' }}>
<FontAwesomeIcon name="envelope" size={9} />  customercare@dmifinance.in
</Text>

</View>
      </View>
    );
  };



  // const handlePasswordLogin = () => {
  //   console.log("Handling password login"); 
  //   navigation.navigate('WebviewScreen');
  // };
  






  const handlePasswordLogin = async () => {
    const apiUrl = 'https://apim.quickwork.co/UATStaging/dealer_portal/v1/login';
  
    const requestBody = {
      username: dealerCode || phoneNumber ,
      password: password || '',
      otp : '' || otp,

     
    };
    console.log('Request Body:', requestBody);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'APIKey': 'RNP5g9vKT9ffhdS06XTqaqvR5MIB22gO',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

   
      const responseData = await response.json();
      const dataObject = JSON.parse(responseData.data);
console.log('tttttttt',dataObject.status); 
      console.log('Response DATA:', responseData.data); 
      console.log('Response URL:', responseData.data.sso_url); 
      console.log('hhhhqaaaaaaaaaaa',responseData.data.status)

      if (response.url) {
        console.log("Login successful");
        navigation.navigate('WebviewScreen',{ url:responseData.data.sso_url});
      } else {
        if (responseData.data.status === 404) {
          Alert.alert("Please attempt login with a registered Dealer Code.");
        } else {
          console.error("Login failed:", responseData);
        }
      }


      
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };
  




  // const handleOTPVerification = () => {
  //   console.log("OTP login"); 
  //   navigation.navigate('WebviewScreen');
  // };








  return (
    <SafeAreaView>

      <View>
        <View style={{ flexDirection: 'row' }}>
          
          <Image
            source={require('../modules/assets/images.png')}
            style={{ width: 45, height: 45, marginVertical: 20, marginHorizontal: 20 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 30, marginLeft: -10 }}>|</Text>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ marginVertical: 20, marginLeft: 10 }}>DMI Finance</Text>
            <Text style={{ marginTop: -15, marginLeft: 10 }}>Easy Access Portal</Text>
          </View>
        </View>
        <View style={{ height: 550, backgroundColor: 'white', marginTop: 50, marginHorizontal: 20, borderRadius: 8 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 36, fontWeight: '800', marginLeft: 20, marginVertical: 20, color: '#000000' }}>Sign In</Text>
            {/* <View style={{ backgroundColor: '#D3D3D3', width: 56, height: 40, marginLeft: 130, marginVertical: 20 }}>
              <Text style={{ color: '#00008B', marginLeft: 20, marginVertical: 10, fontWeight: 'bold' }}>En ^</Text>
            </View> */}

            <TouchableOpacity
        style={{ backgroundColor: '#D3D3D3', width: 56, height: 40, marginLeft: 130, marginVertical: 20 }}
        onPress={() => setShowOptions(true)}
      >
      <Text style={{ color: '#00008B', marginVertical: 10, fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' }}>
  {' '}<FontAwesomeIcon name="comments-o" size={11}  /> 
{' '}
  {selectedLanguage ? languages.find(lang => lang.value === selectedLanguage)?.label?.slice(0, 2) : 'Select'} 
  {' '}
  <FontAwesomeIcon name="chevron-down" size={9} color="#00008B" />
</Text>





      </TouchableOpacity>

      <Modal visible={showOptions} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' ,}}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8 ,width: '80%' }}>
            {languages.map((language, index) => (
              <TouchableOpacity key={index} onPress={() => handleLanguageSelect(language.value)}>
                <Text style={{ paddingVertical: 10 }}>{language.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setShowOptions(false)} style={{ marginTop: 10 }}>
              <Text style={{ color: 'red' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
            <Text
              style={{ marginRight: 20, color: loginMethod === 'password' ? 'black' : '#808080', borderBottomWidth: 1, borderBottomColor: loginMethod === 'password' ? '#00008B' : '#ffffff' }}

              onPress={() => setLoginMethod('password')}
            >
             {selectedLanguage === 'Hindi' ? 'पासवर्ड का प्रयोग करें' : 'Using Password'}
            </Text>
            <Text
              style={{ color: loginMethod === 'otp' ? 'black' : '#808080', borderBottomWidth: 1,  paddingBottom: 10 ,borderBottomColor: loginMethod === 'password' ? '#ffffff' : '#00008B' }}
              onPress={() => setLoginMethod('otp')}

            >
          {selectedLanguage === 'Hindi' ? 'ओटीपी का प्रयोग करें' : 'Using OTP'}
            </Text>
          </View>

          {loginMethod === 'password' ? renderPasswordScreen() : renderOTPScreen()}
        </View>
        
      </View>
      
      <Text style={{ alignSelf: 'center', fontSize: 9, fontWeight: 'bold',marginTop:20 }}>
 
Copyright © 2023 DMI Finance | All right reserved
  
</Text>


      
    </SafeAreaView>

  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  input: {
    backgroundColor: 'transparent',
    padding: 2,
    marginBottom: 10,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontWeight: '500',
    color: 'white',
  },

  submitBoxContainer: {
    height: 30,
    marginHorizontal: 20,
    marginTop: -180,
    width:100,
    marginBottom: 100,
  },
  submitBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  submitBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otpInput: {
    width: 42,
    height: 42,
    borderRadius: 6.7,
    backgroundColor: '#D3D3D3',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
  timerWrapper: {
    flexDirection: 'row',
   
    marginVertical: 10,
    marginLeft:1,
    
  },
  submitButton: {
    backgroundColor: '#2596FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '700',
  },
phoneInput :{
  borderRadius: 5,
  padding: 10,
  color: '#000000',
  backgroundColor: '#D3D3D3',
  fontWeight: 'bold',
  marginBottom: 10,
  marginTop: 10,
  marginLeft: 20,
  marginRight: 20

},
button: {
  backgroundColor: 'grey',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginBottom: 10,
  marginLeft: 20,
  marginRight: 20,
},
buttonText: {
  color: 'red',
  alignSelf: 'center'
},
  inputContainer: {
    marginTop: 40
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: '#161616',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '50%'
  },
  headerTitle: {
    color: '#878787',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
  },

  otpInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 10,
    marginLeft: 40
  },

  okaytext: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  oktext: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 12,
    paddingLeft: 8,
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: -2,
  },

passwordInput:{
  borderRadius: 5,
  padding: 10,

  color: '#000000',
  backgroundColor: '#D3D3D3',
  fontWeight: 'bold',
  marginBottom: 10,
  marginLeft: 20,
  marginRight: 20,
  marginTop: 10,
  
},
dealerInput:
{
  borderRadius: 5,
  padding: 10,
  color: '#000000',
  backgroundColor: '#D3D3D3',
  fontWeight: 'bold',
  marginBottom: 10,
  marginTop: 10,
  marginLeft: 20,
  marginRight: 20

},
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resendOtpBtn: {
    color: '#2E7DEA',
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 12,
    marginLeft:20
    
    

  },
  timer: {
    color: '#00000',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 15,
    marginLeft:10,
    marginTop:-4
  },
});

export default Loginscreen;
