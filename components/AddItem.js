import React, {useState} from 'react';

// React Native
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const submit = () => {
    if (text === '')
      return Alert.alert('Error', 'Please enter an item', {text: 'Ok!'});
    addItem(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add new item"
        style={styles.input}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity style={styles.addButton} onPress={submit}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} color="white" /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    backgroundColor: '#f7f7f7',
  },
  addButton: {
    padding: 9,
    margin: 5,
    backgroundColor: 'green',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default AddItem;
