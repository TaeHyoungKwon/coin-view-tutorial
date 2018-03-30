import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CoinView from './components/CoinView';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar></TopBar>
        <StatusBar
          hidden={true}
          backgroundColor="blue"// android only
          barStyle="light-content" 
        />
        <CoinView></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
