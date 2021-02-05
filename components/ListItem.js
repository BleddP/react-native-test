import React from 'react';

// React Native Components
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// Icons
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  Icon.loadFont();

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    color: 'darkslateblue',
    textTransform: 'capitalize',
  },
});

export default ListItem;
