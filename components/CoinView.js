import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class CoinView extends React.Component {
    render () {
        return (
        <View style={styles.container}>
            <Text>New View </Text>
            <View style={this.props.style}>
                <Text> CoinView GoGo </Text>
            </View>
        </View>
        )
    }
}

export default CoinView;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  