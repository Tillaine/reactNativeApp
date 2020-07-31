import React from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox.js'

const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];
  

const ColorPalette = () => {
    return (
                <FlatList
                data={COLORS}
                keyExtractor={item => item.hexCode}
                ListHeaderComponent={<Text style={[styles.heading, styles.SafeAreaView]}>Solarized Colors</Text>}
                renderItem={( { item } ) => (
                    <ColorBox hexCode={item.hexCode} colorName={item.colorName}/>
                )}
                />
    )
}

const styles = StyleSheet.create({
    container: {
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      margin: 5,
    },
    SafeAreaView: {
      flex: 1,
      padding: 30,
    },
    boxText: {
      color: 'white',
      fontSize: 16,
    },
    heading: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });

export default ColorPalette;