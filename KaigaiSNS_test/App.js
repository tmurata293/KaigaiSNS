import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Image } from 'react-native';

// component for APP login
export default class app_login extends React.Component {
  render() {
      
    return (
      <View style={login_UI.container}>
            //画像はKaigaiSNS_test内のimageディレクトリにある
            <Image source = {require('./image/background_img.jpg')} style={login_UI.image}/>
            //app_ name
            <Text style = {login_UI.app_name} > KAIGAI-SNS </Text>
                 // email column
            <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.text_column}>
                      <Text> EMAIL </Text>
                 </TouchableOpacity>
                 // password column
            <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.text_column}>
                      <Text> PASSWORD </Text>
                 </TouchableOpacity>
                 /// login button
                 <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_small}>
                      <Text> Login </Text>
                 </TouchableOpacity>
                 // facebook button
                 <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_small}>
                      <Text> Facebook </Text>
                 </TouchableOpacity>
                 // sign up link
                 <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_touch}>
                      <Text> Sign Up </Text>
                 </TouchableOpacity>
                 // forgot password link
                 <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_touch}>
                      <Text> Forgot password?  </Text>
                 </TouchableOpacity>
            </View>
            
    );
  }
}

const login_UI = StyleSheet.create({
  container: {
    //backgroundColor: '#ffffff',
    //alignItems: 'center',
    //justifyContent: 'center',
                                
  },
                                   
  image:{
   
   width: '100%',
   height: '100%',
   flex: 1,
   position: 'absolute',
  // resizeMode,
  },
                                   
  app_name:{
    color: '#aaaaaa',
    fontFamily: 'Cochin',
    fontSize: 50,
    alignItems: 'center',
  },
                                   
  text_column:{
     alignItems: 'center',
     position: 'absolute',
     width: 329,
     height: 33,
     left: 23,
     top: 400,
     backgroundColor: '#aaaaaa',
     borderRadius: 30,
  },
                                   
  button_small:{
     backgroundColor: '#fff',
  },
                                   
  button_touch:{
      backgroundColor: '#fff',
   },
                                   
});



