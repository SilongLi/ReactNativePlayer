import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";

import Home from './components/Home';
import Photos from './components/Photos';
import My from './components/My';
import DetailView from './components/DetailView';

/*忽略警告*/
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// Home Navigator
const homeStackNav = createStackNavigator({
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

// Photos Navigator
const photosNavigator = createStackNavigator({
    Photos: {
        screen: Photos,
        path: 'component/Photos',
        navigationOptions: {
            headerTitle: '照片',
        },
    },
}, {
    initialRouteName: 'Photos',
    navigationOptions: {
        headerTitle: '照片',
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

// My Navigator
const myNavigator = createStackNavigator({
    My: {
        screen: My,
        path: 'component/My',
        navigationOptions: {
            headerTitle: '我的'
        },
    },
}, {
    initialRouteName: 'My',
    navigationOptions: {
        headerTitle: '我的',
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

// TabBarNavigator
const tabNav = createBottomTabNavigator({
    StackNav: {
        screen: homeStackNav,
        navigationOptions:{
            tabBarLabel: '热映',
            tabBarIcon: ({focused, tintColor}) => (
                createTabBarIcon(focused)
            ),
        },
    },
    Photos: {
        screen: photosNavigator,
        navigationOptions:{
            tabBarLabel: '照片',
            tabBarIcon: ({focused, tintColor}) => (
                createTabBarIcon(focused)
            ),
        },
    },
    My: {
        screen: myNavigator,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                createTabBarIcon(focused)
            ),
        },
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#494949',
        inactiveTintColor: '#999999',
        labelStyle: {
            fontSize: 12,
            marginBottom: 5,
        },
        style: {
            borderTopWidth: 1,
            borderTopColor: '#c3c3c3',
            height: 50,
            backgroundColor:'#fff'
        },
    }
});


function createTabBarIcon(focused: boolean) {
    if (focused === true) {
        return <Image source={require('./images/star-full.png')} />
    } else {
        return <Image source={require('./images/star-empty.png')} />
    }
}

export default tabNav;




