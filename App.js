import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AddSpells from './src/components/AddSpells';
import AllSpells from './src/components/AllSpells';
import HomeScreen from './src/components/HomeScreen';
import SpellBooks from './src/components/SpellBooks';


const RootStack = createStackNavigator(
  {
    home: HomeScreen,
    allSpells: AllSpells,
    spellBooks: SpellBooks,
    addSpells: AddSpells,
  },
  {
    initialRouteName: 'home',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
