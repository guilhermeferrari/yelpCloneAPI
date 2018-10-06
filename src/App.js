import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Main } from './components/screens'
import { Map } from './components/containers'
import { createBottomTabNavigator } from 'react-navigation'

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
  render() {
    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
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
