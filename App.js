import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Spell Cards</Text>
        <Button
          title="All Spells"
          onPress={() => this.props.navigation.navigate('All')}
        />
      </View>
    );
  }
}

class AllSpells extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>All Spells</Text>
      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    All: AllSpells,
  },
  {
    initialRouteName: 'Home',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}
