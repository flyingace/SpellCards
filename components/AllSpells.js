import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import allSpells from '../data/5e-SRD-Spells.json';
import SpellCard from './SpellCard';

export default class AllSpells extends React.Component {
  generateSpells = () => {
    return allSpells.map(spell => <SpellCard spellData={spell} />);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>All Spells</Text>
        {this.generateSpells()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
