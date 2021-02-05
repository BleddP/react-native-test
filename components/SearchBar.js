import React, {useState} from 'react';

// React Native Components
import {StyleSheet} from 'react-native';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({submitWeatherReq}) => {
  Icon.loadFont();

  const [value, setValue] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Which city would you like to see?"
        onChangeText={(value) => setValue(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => submitWeatherReq(value)}>
        <Text style={styles.buttonText}>
          <Icon name="search" size={20} color="white" style={styles.icon} />{' '}
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'whitesmoke',
    height: 50,
    padding: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    margin: 10,
  },
  icon: {
    margin: 100,
  },
  buttonText: {
    color: 'whitesmoke',
    fontSize: 18,
  },
});

export default SearchBar;
