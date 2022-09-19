// CustomInput.js
import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TextField = (props: any) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    leftIcon,
    rightIcon,
    isPassword,
    ...inputProps
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const hasError = errors[name] && touched[name];

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
        }}>
        {!!leftIcon && (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              top: 10,
              left: 5,
              zIndex: 1,
            }}>
            {leftIcon()}
          </View>
        )}

        <TextInput
          style={[styles.textInput, hasError && styles.errorInput]}
          value={value}
          onChangeText={(text: string) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
          secureTextEntry={isPassword && !passwordVisible}
        />
        {!!rightIcon && (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              top: 10,
              right: 10,
            }}>
            {rightIcon()}
          </View>
        )}

        {isPassword ? (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              top: 10,
              right: 10,
            }}>
            <MaterialCommunityIcons
              name={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          </View>
        ) : (
          !hasError &&
          !!value && (
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
                top: 10,
                right: 10,
              }}>
              <MaterialCommunityIcons name="check" />
            </View>
          )
        )}
      </View>
      <View>
        {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 20,
    width: '95%',
    backgroundColor: 'white',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderBottomWidth: 1,
    paddingStart: 12,
    paddingEnd: 12,

    marginTop: 19,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default TextField;
