import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SpellCard extends React.Component {
  parseData = () => {
    const spellData = this.props.spellData.name;
    return <Text>{spellData}</Text>;
  };

  render() {
    return (
      <View style={styles.spell}>
        {this.parseData()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spell: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ddd',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    height: 50,
  },
});
