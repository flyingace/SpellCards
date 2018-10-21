import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AddSpells from './AddSpells';
import AllSpells from './AllSpells';
import HomeScreen from './HomeScreen';
import SpellBooks from './SpellBooks';


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
