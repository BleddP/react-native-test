import React, {useState} from 'react';
import axios from 'axios';

// React Native Components
// View is based on Flexbox
import {View, StyleSheet} from 'react-native';

// Components
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ViewData from './components/ViewData';

const App = () => {
  const [data, setData] = useState({});

  const submitWeatherReq = (value) => {
    console.log({value});
    const sendBody = {};

    const body = JSON.stringify(sendBody);

    const config = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: value,
        lat: '0',
        lon: '0',
        lang: 'en',
        units: 'metric',
        mode: 'xml, html',
      },
      headers: {
        'x-rapidapi-key': '6ddb8b22a1mshb9dd74689e0cba6p16e3eejsne28b13250694',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    };

    axios
      .request(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error.response);
      });
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar submitWeatherReq={submitWeatherReq} />
      <ViewData data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default App;
