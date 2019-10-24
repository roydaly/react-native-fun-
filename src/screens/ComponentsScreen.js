import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Roy';
 return <View>
     <Text style={styles.textStyle}>Getting Started With React Native!</Text>
     <Text style={{fontSize: 20}}>My name is {greeting}</Text>
     </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;