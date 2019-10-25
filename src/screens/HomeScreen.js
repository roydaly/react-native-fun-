import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Roy Daly</Text>
    <Button 
     onPress={() => navigation.navigate('Components')}
     title="Go To Components Screen" 
    />
    <Button
     onPress={() => navigation.navigate('List')}
     title="Go To List Screen"
    />
    <Button
     onPress={() => navigation.navigate('Image')}
     title="Go To Image Screen"
    />
    {/* <TouchableOpacity 
      onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Screen</Text>
    </TouchableOpacity> */}
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
