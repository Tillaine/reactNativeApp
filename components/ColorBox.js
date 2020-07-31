import React from 'react';
import { View, Text } from 'react-native';

const ColorBox = (props) => {
    const { colours, styles } = props;
    return colours.map((color) => {
      return (
        <View
          key={color.hex}
          style={[styles.container, { backgroundColor: color.hex }]}
        >
          <Text style={styles.boxText}>
            {color.name}, {color.hex}
          </Text>
        </View>
      );
    });
  };

export default ColorBox;