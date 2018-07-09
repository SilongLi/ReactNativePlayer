import React, { Component } from 'react'
import { View, SectionList, Text, StyleSheet } from 'react-native'


export default class My extends Component {
    render() {
        return (
            <View style={styles.constent}>
                <SectionList 
                    sections={[
                        {title: 'A', data: ['1', '2', '3', '4']},
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'Z', data: ['!', '@', '#', '$']},
                    ]}
                    renderItem={ ({item}) => <Text style={styles.item}>{item}</Text> }
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
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
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
})