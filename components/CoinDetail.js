import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinDetail extends React.Component {
    render () {
        let date = new Date();
        let now = date.toLocaleString()

        return (
            <View style={styles.container}>
                <Image
                style={{width: 50, height: 50, marginRight:20}}
                source={{uri: 'data:image/png;base64,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'}}
                />
                <Text style={[styles.text, {flex: 1}]}>{this.props.name || 'Name'}</Text>
                <Text style={[styles.text, {flex: 1}]}>{'Price: ' + (this.props.price || 0)}</Text>
                <Text style={[styles.text, {flex: 1}]}>{'Volume: ' + (this.props.volumn || 0)}</Text>
                <Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (this.props.time || now)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        color: 'white',
    }
});

export default CoinDetail;