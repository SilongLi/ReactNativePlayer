import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import DetailView from './components/DetailView';
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";

const stackNav = createStackNavigator({
    Home: {
        screen: Home,
        path: 'component/Home',
        navigationOptions: {
            headerTitle: '首页',
        },
    },
    DetailView: {
        screen: DetailView,
        path: 'component/DetailView',
        navigationOptions: {
            headerTitle: '详情页',
        },
    },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerTitle: '首页',
        headerBackTitle: null,
        headerTintColor: '#333',
            cardStack: {
                gesturesEnabled: true,
            },
    },
    mode: 'card',
    headerMode: 'screen',
    onTransitionStart: () => { console.load('导航栏开始切换界面');},
    onTransitionEnd: () => { console.log('导航栏完成切换界面');},
    transitionConfig: () => ({
        //因为ios 的导航动画默认是从左到右，所以，这里配置一下动画，使用react-navigation已经实现的从左到右的动画，
        //适配Android，不过，需要导入动画
        //import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
});

export default stackNav