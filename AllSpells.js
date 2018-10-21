import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AllSpells extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>All Spells</Text>
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
