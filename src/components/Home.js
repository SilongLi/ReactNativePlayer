import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'


export default class Home extends Component {
    // 即将加载组件的时候调用
    // 作用:在render之前做事情
    componentWillMount() {
        console.log('componentWillMount');
    }

    // 加载组件完成的时候调用
    // 作用:在render之后做事情，发送请求
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 每次传入Props，就会调用
    // 作用:拦截props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');

    }

    // 每次props,或者state改变，就会调用
    // 作用:控制是否刷新界面
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    // 组件即将更新调用
    // 作用:在render更新前做事情
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // 组件更新完成调用
    // 作用:在render更新后做事情
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // 组件即将销毁的时候调用
    // 作用:移除观察者，清空数据
    componentWillUnmount() {
        console.log('componentWillUpdate');
    }

    render() {
        return (
            <Text style={styles.textStyle} onPress={() => {
                this.props.navigation.navigate('DetailView')
            }}>进入详情页</Text>
        )
    };
}

const styles = StyleSheet.create({
    textStyle:{
        padding: 100,
        height: 10,
        backgroundColor: 'red',
    },
})