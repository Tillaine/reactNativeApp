import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')
            }>
                <Text>Hello, World</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;