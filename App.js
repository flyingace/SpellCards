import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AddSpells from './components/AddSpells';
import AllSpells from './components/AllSpells';
import HomeScreen from './components/HomeScreen';
import SpellBooks from './components/SpellBooks';


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
