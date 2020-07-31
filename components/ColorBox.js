import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
let colorText = 'white';

const ColorBox = ({ colorName, hexCode }) => {
    colorText = 
          parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
            ? 'black'
            : 'white'
   return (
        <View
          style={[styles.container,
            { backgroundColor: hexCode},]}
        >
          <Text style={[styles.boxText, {color: colorText}]}>
            {colorName}, {hexCode}
          </Text>
        </View>
      )};

      const styles = StyleSheet.create({
        container: {
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          margin: 5,
        },
        boxText: {
          fontSize: 16,
        },
      });

export default ColorBox;