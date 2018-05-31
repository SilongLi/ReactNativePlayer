import React, { Component } from 'react'
import { Text } from 'react-native'



export default class DetailView extends Component {

    static navigationOptions = {
        headerTitle: 'Detail',
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={{backgroundColor: '#999999', padding: 100, height: 100}} onPress={() =>
                this.props.navigation.goBack()
            }>返回首页</Text>
        )
    };
}