import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Fetch } from 'react-native'


class ContentView extends Component {
    constructor(props) {
        super(props)
        this.state = { showText: true }

        setInterval(()=> {
            this.setState(previousState => {
                return { showText: !previousState.showText};
            });
        }, 3000);
    }
    render () {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        )
    };
}

export default class Home extends Component {

    // 注意这个方法前面有async关键字
    async getMoviesFromApi() {
        this.setState({text: '开始加载数据'})
        try {
          // 注意这里的await语句，其所在的函数必须有async关键字声明
          let response = await fetch('http://wthrcdn.etouch.cn/weather_mini?citykey=101010100');
          let responseJson = await response.json();
          return responseJson.movies;

        } catch(error) {
          console.error(error);
        }
    }


    // 即将加载组件的时候调用
    // 作用:在render之前做事情
    componentWillMount() {
        console.log('componentWillMount');
    }

    // 加载组件完成的时候调用
    // 作用:在render之后做事情，发送请求
    componentDidMount() {
        console.log('componentDidMount');

        let data = this.getMoviesFromApi()
        this.setState({text: '加载中…'})
        this.setState({text: data[0]})
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

    constructor(props) {
        super(props)
        this.state = {text: ''}
    }

    render() {
        return (
            <View>
                <Text style={styles.textStyle} onPress={() => {
                    this.props.navigation.navigate('DetailView')
                }}>进入详情页</Text>
                <ContentView text='I love to blink' />
                <TextInput style={{height: 40}} 
                    placeholder="请输入……"
                    onChangeText={(text) => this.setState({text})}
                />
                
                <Text style={{padding: 10, fontSize: 42}}>
                {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
                -{this.state.text}-
                </Text>
            </View>
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