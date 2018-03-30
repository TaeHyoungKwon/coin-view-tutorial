import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CoinView from './components/CoinView';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
        <StatusBar
          hidden={true}
          backgroundColor="blue"// android only
          barStyle="light-content" 
        />

        <TopBar title="코인 시세"/>
        <CoinView style={styles.coinView}/>

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
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'space-around',
  }
});
