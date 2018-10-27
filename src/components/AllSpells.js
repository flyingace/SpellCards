import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import allSpells from '../../data/5e-SRD-Spells.json';
// import allSpells from '../../data/smaller.json';
import SpellCard from './SpellCard';

class AllSpells extends React.Component {
  generateSpells = () => allSpells.map((spell, idx) => {
    const spellKey = `spell${idx}`;
    return <SpellCard spellData={spell} key={spellKey} />;
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>All Spells</Text>
        <ScrollView style={styles.spellsWrapper}>
          {this.generateSpells()}
        </ScrollView>
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
  spellsWrapper: {
    flex: 2,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

module.exports = AllSpells;
