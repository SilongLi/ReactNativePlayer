import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';

import { createStackNavigator, createBottomTabNavigator, TabNavigator} from 'react-navigation'

import Home from './components/Home';
import DetailView from './components/DetailView';
import Photos from './components/Photos';
import My from './components/My';


/* StatusBar的属性
* 1.animated bool   进行设置当状态栏的状态发生变化的时候是否需要加入动画。当前该动画支持backgroundColor,barStyle和hidden属性

 2.hidden  bool  进行设置状态栏是否隐藏

 3.backgroundColor   color类型，仅支持Android设备，设置状态栏的背景颜色

 4.translucent bool类型，仅支持Android设备, 进行设置状态栏是否为透明。当状态栏的值为true的时候，应用将会在状态栏下面进行绘制显示。这样在Android平台上面就是沉浸式的效果，可以达到Android和iOS应用一致性效果。该值常常配置半透明效果的状态栏颜色一起使用

 5.barStyle  enum('default','light-content')  枚举类型，仅支持iOS设备。进行设置状态栏文字的颜色

 6.networkActivityIndicatorVisible   bool类型，仅支持iOS设备。设置状态栏上面的网络进度加载器是否进行显示

 7.showHideTransition   enum('fade','slide') 枚举类型，仅支持iOS设备。进行设置当隐藏或者显示状态栏的时候的动画效果。默认值为'fade'
* */

export default class HomePageNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //默认选择第一个页面（'消息'默认选择第二个页面）
            //this.setState({selectedTab:'首页'}) 这个用于切换页面
            //selectedTab：'' ->为不同的值，就切换对应的页面
            selectedTab:'首页',
        };
    }

    //配置场景动画,可以返回上面的动画类型
    configureScene(route) {

        //其他页面点击按钮跳转方法传入参数，在这里通过route.type可以接收到，对参数进行动画的判断
        console.log('route.type is ='+route.type);
        console.log('route.name is ='+route.name);

        if (route.type == 'normal'){
            return Navigator.SceneConfigs.PushFromRight
        }
        return Navigator.SceneConfigs.FloatFromRight

        //直接用同一个动画跳转
        //return Navigator.SceneConfigs.FloatFromRight
    }

    //渲染
    renderScene(route, navigator) {
        //导航条跳转传递参数   params 为传递的参数 其他页面传值时的名字要和这里设置的一样
        return <route.component {...route.params} navigator={navigator}/>

        //没有参数
        // return <route.component navigator={navigator} />
    }

    /*
    * 创建Navigator
    * component：Navigator管理的视图
    * return:Navigator
    * */
    creatNavigator (component){
        return (
            <Navigator
                initialRoute={{ name: component, component: component }}//默认加载的页面
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                style={{flex:1}}
                navigationBar={
                    <Navigator.NavigationBar style={HomePageNavStyle.navStyleBase}
                                             routeMapper={NavigationBarRouteMapper}/>}
            />
        )
    }
    /*
     * 创建tabbarItem
     * showtitle：标题
     * index：第几个
     * 子视图：Navigator
     * return：tabbarItem
     * */
    CreatTabNavigatorItem (showtitle  ,index ,normalImage , selectImage){

        let subview = {}

        switch (index){

            case 1:
                subview=this.creatNavigator(Home);
                break;
            case 2:
                subview=this.creatNavigator(DetailView);
                break;
            case 3:
                subview=this.creatNavigator(Photoshotos);
                break;
            case 4:
                subview=this.creatNavigator(My);
                break;
        }


        return(

            /*TabNavigator.Item 属性
            * renderIcon: 必填项，即图标，但为function类型，所以这里需要用到Arrow Function
              renderSelectedIcon: 选中状态的图标，非必填，也是function类型
              badgeText: 即Tab右上角的提示文字，可为String或Number，类似QQ中Tab右上角的消息提示，非必填
              renderBadge: 提示角标渲染方式，function类型，类似render的使用，非必填
              title: 标题，String类型，非必填
              titleStyle: 标题样式，style类型，非必填
              selectedTitleStyle: 选中标题样式，style类型，非必填
              selected: bool型，是否选中状态，可使用setState进行控制，默认false
              onPress: function型，即点击事件的回调函数，这里需要控制的是state，而切换页面已经由控件本身帮我们实现好了
              allowFontScaling: bool型，是否允许字体缩放，默认false
            * */
            <TabNavigator.Item
                title={showtitle}
                onPress={()=>{this.setState({selectedTab:showtitle})}}
                selected={this.state.selectedTab === showtitle}
                titleStyle={HomePageNavStyle.TBarTitleStyle}
                selectedTitleStyle={HomePageNavStyle.TBarTitleSelectStyle}
                renderIcon={() => {return <Image source={normalImage}/> }}
                renderSelectedIcon={() => { return <Image source={selectImage}/> }}

                /*
                * 另一种写法，如果又返回值，可以直接省去{return }
                * renderIcon={() =>  <Image source={normalImage} />}
                * renderSelectedIcon={() =>  <Image source={selectImage} />}
                * */
            >

                {subview}

            </TabNavigator.Item>
        );
    }
    c
    /*
     * 创建tabbar
     * return：返回4个item的tabbar
     * */
    CreatTabBarView () {
        return(
            <TabNavigator>
                {this.CreatTabNavigatorItem('首页', 1, require('./images/star-empty.png'), require('./images/star-full.png'))}
                {this.CreatTabNavigatorItem('消息', 2, require('./images/star-empty.png'), require('./images/star-full.png'))}
                {this.CreatTabNavigatorItem('朋友', 3, require('./images/star-empty.png'), require('./images/star-full.png'))}
                {this.CreatTabNavigatorItem('我的', 4, require('./images/star-empty.png'), require('./images/star-full.png'))}
            </TabNavigator>
        );
    }

    render() {
        return (
            <View style={HomePageNavStyle.viewStyle}>
                {this.CreatTabBarView()}
                <StatusBar barStyle={'light-content' }/>
            </View>
        );
    }
}

//切换tabbar时，修改对应的Navigator的标题
let getNavigatorTitle = (route) => {

    let NavigatorTitle;

    switch (route.component.name){

        case 'Home':
            NavigatorTitle = '首页';
            break;
        case 'DetailView':
            NavigatorTitle = '消息';
            break;
        case 'Photos':
            NavigatorTitle = '朋友';
            break;
        case 'My':
            NavigatorTitle = '我的';
            break;
    }

    return (
        <View>
            <Text style={HomePageNavStyle.navTitleStyle}>
                {NavigatorTitle}
            </Text>
        </View>
    );
}


//创建Navigator的标题、左按钮、右按钮
var NavigationBarRouteMapper = {
    // 标题
    Title(route, navigator, index, navState) {
        return (
            getNavigatorTitle(route)
        );
    },
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop()
                            }
                        }}>
                        <Text style={HomePageNavStyle.navLeftButtonStyle}>
                            返回
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={HomePageNavStyle.navRightButtonStyle}>
                            right
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },

};


var HomePageNavStyle = StyleSheet.create({
    viewStyle:{
        flex:1,
    },
    TBarTitleStyle:{
        color:'black',
    },
    TBarTitleSelectStyle:{
        color:'red',
    },
    textStyleBase:{
        marginTop:40,
        marginHorizontal:20,
        color:'red',
        textAlign:'center',
    },
    navStyleBase:{
        backgroundColor:'blue',
    },
    navTitleStyle:{
        color:'white',
        textAlign:'center',
        flex:1,
        fontSize:18,
        fontWeight:'bold',
        marginVertical:5,
    },
    navLeftButtonStyle:{
        color:'white',
        marginLeft:10,
        fontSize:15,
        marginTop:5,
    },
    navRightButtonStyle:{
        color:'black',
        marginRight:10,
        fontSize:15,

    },
});
