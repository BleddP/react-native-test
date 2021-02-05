import React from 'react';

// React Native
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

// MomentJS
import moment from 'moment';

// Icons
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const ViewData = ({data}) => {
  Icon.loadFont();

  if (!data.name) {
    return (
      <View>
        <Text style={styles.text}>Search for a city to display data</Text>
      </View>
    );
  }

  const sunrise = moment(data.sys.sunrise).format('HH:mm');
  const sunset = moment(data.sys.sunset).format('HH:mm');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather Forecast for {data.name}</Text>
      <Text style={styles.text}>
        <Icon name="temperature-celsius" size={20} color="lightblue" /> Avg
        Temp: {data.main.temp}
        {'\u2103'}
      </Text>
      <Text style={styles.text}>
        Min Temp: {data.main.temp_min}
        {'\u2103'}
      </Text>
      <Text style={styles.text}>
        Max Temp: {data.main.temp_max}
        {'\u2103'}
      </Text>
      <Text style={styles.text}>
        <Icon
          name="weather-sunset-up"
          size={20}
          color="white"
          style={styles.icon}
        />{' '}
        Sunrise: {sunrise}
      </Text>
      <Text style={styles.text}>
        <Icon
          name="weather-sunset-down"
          size={20}
          color="white"
          style={styles.icon}
        />{' '}
        Sunset: {sunset}
      </Text>
      {data.weather.map((item) => {
        return (
          <Text style={styles.description} key={item.id}>
            {item.description}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    paddingRight: 50,
    color: 'orange',
  },
  header: {
    padding: 10,
    fontSize: 25,
    color: 'aquamarine',
    fontWeight: 'bold',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'whitesmoke',
  },
  description: {
    padding: 10,
    fontSize: 20,
    color: 'whitesmoke',
    textTransform: 'capitalize',
  },
});

export default ViewData;
