import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Main } from './components/screens'
import { Map } from './components/containers'
import { createBottomTabNavigator } from 'react-navigation'
import axios from 'axios'
//pausado em pt6
const Tabs = createBottomTabNavigator({
  Nearby: Main,
  Search: Map,
  Me: Main,
  Delivery: Main,
  More: Main,
  },{

  }
)



const db_name = "guilherme"
const db_pass = "yelproot1"
const url_db = "mongodb://" + db_name + ":" + db_pass + "@ds125073.mlab.com:25073/yelp_clone_db"

export default class App extends Component {

  
  componentWillMount(){
    /* axios.get('https://raw.githubusercontent.com/mongodb/docs-assets/geospatial/restaurants.json')
      .then( (response) => {
        console.log(response.data.split("\n"));
      }) */
  }

  render() {
    return (
      <Tabs />
    );
  }
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
