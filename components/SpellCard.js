import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SpellCard extends React.Component {

  parseData = () => {
    return "HELLO"; //JSON.parse(this.props.spellData);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.parseData}
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
