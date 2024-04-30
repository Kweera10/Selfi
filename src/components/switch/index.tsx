import React, { useState } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';

const CustomSwitch = ({
  title,
  onChange,
  containerStyle = {},
  labelStyle = {},
  disabled = false
}) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (value) => {
    setSwitchValue(value);
    onChange(value);
  };

  return (
    <View style={[styles.notificationContainer, containerStyle]}>
      <Text style={[styles.notification, labelStyle]}>{title}</Text>
      <Switch
        trackColor={{ false: '#0C8AFF', true: switchValue ? '#0C8AFF' : '#ffff' }}
        thumbColor={switchValue ? '#2596FF' : '#fffff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleSwitchChange}
        value={switchValue}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notification: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    opacity: 0.75,
  },
});

export default CustomSwitch;
