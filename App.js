import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox.js'
const colours = [
  { name: 'Cyan', hex: '#2aa198' },
  { name: 'Blue', hex: '#268bd2' },
  { name: 'Magenta', hex: '#d33682' },
  { name: 'Orange', hex: '#cb4b16' },
];



const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={styles.heading}>Color boxes</Text>
      <ColorBox styles={styles} colours={colours}/>
    </SafeAreaView>
  );
};

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

export default App;
