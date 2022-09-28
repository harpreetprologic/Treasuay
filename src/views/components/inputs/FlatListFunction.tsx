import {
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  FlatList,
  Text,
} from 'react-native';
import React, {memo, useMemo} from 'react';

type Props = {
  label: string;
  onPress: Function;
  variant: 'primary' | 'outlined';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
};
const FlatListFunction = ({
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
          // boxStyle: [styles.primaryBox, disabled && styles.primaryBoxDisabled],
          boxStyle:[styles.primaryBox]
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
    <FlatList
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{alignItems: 'center'}}
    data={[
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
      {
        imageUrl:
          'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
      },
    ]}
   
      style={[boxStyle, style]}
      onPress={() => {
        if (onPress && !disabled) {
          onPress();
        }
      }}>
      <Text style={[textStyle, fontStyle]}>{label}</Text>
    </FlatList>
  );
};

export default memo(FlatListFunction);

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
