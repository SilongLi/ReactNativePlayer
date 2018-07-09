import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'


export default class Photos extends Component {
    render() {
        return (
            <View style={styles.constent}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key: '1'},
                        {key: '2'},
                        {key: '3'},
                        {key: '1'},
                        {key: '2'},
                        {key: '3'},
                        {key: '1'},
                        {key: '2'},
                        {key: '3'},
                    ]}
                    renderItem={ ({item}) => <Text style={styles.item}>{item.key}</Text> }    
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    constent:{
        flex: 1,
        paddingTop: 22,
    },
    item:{
        padding: 10,
        fontSize: 18,
        height: 100,
    },
})

