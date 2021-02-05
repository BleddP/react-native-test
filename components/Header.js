import React from 'react';

// React Native Components
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Weather App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    padding: 15,
    backgroundColor: 'gray',
  },
  text: {
    paddingTop: 60,
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
