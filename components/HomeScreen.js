import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Spell Cards</Text>
        <Button
          title="All Spells"
          onPress={() => navigate('allSpells')}
        />
        <Button
          title="Add Spells"
          onPress={() => navigate('addSpells')}
        />
        <Button
          title="Spell Books"
          onPress={() => navigate('spellBooks')}
        />
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
