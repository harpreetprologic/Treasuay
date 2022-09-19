import {View, StyleSheet} from 'react-native';
import React from 'react';

const {RadialGradient} = require('react-native-gradients');

const colorList = [
  {offset: '0%', color: '#080808', opacity: '1'},
  {offset: '0%', color: '#3D3D3D', opacity: '1'},
  {offset: '100%', color: '#080808', opacity: '1'},
  {offset: '100%', color: '#080808', opacity: '1'},
];

type Props = {
  x: string;
  y: string;
  rx: string;
  ry: string;
};

const RGradient = ({x, y, rx, ry}: Props) => {
  return (
    <View style={styles.gradientBg}>
      <RadialGradient x={x} y={y} rx={rx} ry={ry} colorList={colorList} />
    </View>
  );
};

export default RGradient;

const styles = StyleSheet.create({
  gradientBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
