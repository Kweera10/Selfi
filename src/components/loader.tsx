import React from 'react';
import {View, Dimensions} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';


export default function Loader({
  isAbsolute = false,
  size = 'large',
  height = 100,
  color,
  style = {},
  isLoginScreen = false,
}: {
  isAbsolute?: boolean;
  size?: any;
  height?: any;
  color?: any;
  style?: any;
  isLoginScreen?: boolean;
}) {
  const styles = useStyle();

  let overlayStyle = {...style};

  if (isAbsolute) {
    overlayStyle = {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height,
      zIndex: 1,
      ...style,
    };
  }

  if (isLoginScreen) {
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: 'grey',
      opacity: 0.3,
      height: '100%',
      flex: 1,
    };
  }

  return (
    <View style={[overlayStyle]}>
      <ActivityIndicator
        size={size}
        color={color || '#000008'}
        style={{height}}
      />
    </View>
  );
}
