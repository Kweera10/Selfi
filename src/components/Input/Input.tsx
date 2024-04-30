import React from 'react';
import {TextInput} from 'react-native-paper';


// name key for submit to api and uniqueness between each fields even if the type is same

const Input = React.forwardRef(({onChange, ...rest}, ref) => {
  const color = useColor();
  const style = useStyle();
  const {
    label,
    outlineColor,
    textColor,
    onBlur,
    value,
    keyboardType,
    mode,
    placeholder,
    customStyle = {},
    showPlaceholder = true,
    autoCapitalize = 'none',
    placeholderTextColor
  } = rest || {};

  return (
    <>
      <TextInput
        {...rest}
        // ref={ref}
        style={[{marginBottom: 20, paddingHorizontal: 0}, customStyle]}
        mode="flat"
        label={label ? label : null}
        onBlur={onBlur}
        onChangeText={onChange}
        // defaultValue={existValue}
        value={value}
        placeholder={showPlaceholder ? (placeholder ? placeholder : label) : ''}
        placeholderTextColor={'#ffffff'}
        selectionColor={'#ffffff'}
        activeOutlineColor={'#ffffff'}
        outlineColor={color.textColor}
        underlineColor={'#ffffff'|| '#454545'}
        activeUnderlineColor={outlineColor || color.textColor}
        keyboardType={keyboardType && keyboardType}
        // error={errors[nameField]}
        autoComplete={'off'}
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        theme={{
          colors: {
            placeholder: '#ffffff',
            text: textColor || '#ffffff' ,
            primary: '#454545',
            selectionColor: '#ffffff'
            // underlineColor: color.placeholder,
            // background: color.backgroundOverlay,
          },
        }}
        ref={ref}
      />
    </>
  );
});

export default Input;
