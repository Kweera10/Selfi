import React from 'react';
import {View, Image} from 'react-native';

const LogoSection = ({
  width = 300,
  height = 300,
  theme,
}: {
  height: number;
  width: number;
  theme: string;
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Image
source={require('../../modules/assets/downloaq.png')}
        width={width}
        height={height}
        style={{width: width, height: height}}
        resizeMode="contain"
      />
    </View>
  );
};

export default LogoSection;
