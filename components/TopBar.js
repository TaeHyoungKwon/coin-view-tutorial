import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Left</Text>
                <Text>TopBar</Text>
                <Text>Right</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:50
    },
});

export default TopBar;