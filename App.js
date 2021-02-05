import React, {useState} from 'react';

// React Native Components
// View is based on Flexbox
import {View, FlatList, StyleSheet} from 'react-native';

// Components
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.random(),
      text: 'milk',
    },
    {
      id: Math.random(),
      text: 'eggs',
    },
    {
      id: Math.random(),
      text: 'bread',
    },
    {
      id: Math.random(),
      text: 'juice',
    },
  ]);

  const deleteItem = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (itemText) => {
    setItems((previousItems) => {
      return [{id: Math.random(), text: itemText}, ...previousItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
