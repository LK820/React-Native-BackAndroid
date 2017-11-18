/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var Dimessions = require('Dimensions');
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ToastAndroid,
    Dimensions,
    WebView,
    BackAndroid
} from 'react-native';
class First extends Component {
    constructor(props){
        super(props);
        this.state={
            w:Dimensions.get('window').width,
            h:Dimensions.get('window').height,
        }
        this.count=0;
        var that=this;
        this.isCangoback;
        BackAndroid.addEventListener('hardwareBackPress',function () {
            if(that.isCangoback){
                that.myWebView.goBack();
                return true
            }else {
                if(that.count==0){
                    that.count++;
                    ToastAndroid.show("再按一次退出",ToastAndroid.SHORT)
                    return true;
                }
                return false
            }
        })
    }
    doIt(cangoObj){
        this.isCangoback=cangoObj.canGoBack;
    }
    render(){
        return(
            <View style={xx.container}>
                <WebView
                    ref={(w)=>this.myWebView=w}
                    onNavigationStateChange={(cangoObj)=>this.doIt(cangoObj)}
                    style={{width: this.state.w, height: this.state.h}}
                    source={{uri: 'http://www.baidu.com'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                ></WebView>
            </View>
        )
    }
}
var xx = StyleSheet.create({
    container: {
        flex: 1,
    }
});
AppRegistry.registerComponent('First', () => First);
