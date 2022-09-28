import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Button as NBButton, Text} from 'native-base';
import React, {memo, useMemo} from 'react';
import {scale} from 'react-native-size-matters';

type Props = {
  label: string;
  onPress: Function;
  variant: 'primary' | 'outlined';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
};

const Button = ({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  fontStyle,
}: Props) => {
  const {boxStyle, textStyle} = useMemo(() => {
    switch (variant) {
      case 'primary':
      default:
        return {
          boxStyle: [styles.primaryBox, disabled && styles.primaryBoxDisabled],
          textStyle: styles.primaryText,
        };
      case 'outlined':
        return {
          boxStyle: [
            styles.outlinedBox,
            disabled && styles.outlinedBoxDisabled,
          ],
          textStyle: styles.outlinedText,
        };
    }
  }, [variant, disabled]);

  return (
    <NBButton
      style={[boxStyle, style]}
      onPress={() => {
        if (onPress && !disabled) {
          onPress();
        }
      }}>
      <Text style={[textStyle, fontStyle]}>{label}</Text>
    </NBButton>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  // Primary
  primaryBox: {
    backgroundColor: '#000',
    paddingTop: scale(12),
    paddingBottom: scale(12),
    marginVertical: scale(5),
  },
  primaryBoxDisabled: {
    backgroundColor: '#aaad',
  },
  primaryText: {
    color: '#fff',
    fontSize: scale(16),
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  // Outlined
  outlinedBox: {
    backgroundColor: '#fff',
    paddingTop: scale(10),
    paddingBottom: scale(10),
    marginVertical: scale(5),
    borderWidth: 1,
    borderColor: '#000',
  },
  outlinedBoxDisabled: {
    backgroundColor: '#aaad',
  },
  outlinedText: {
    color: '#000',
    fontSize: scale(16),
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
});
