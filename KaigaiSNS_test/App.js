/*************************************
 ******** KaigaiSNS_login*************
 *************************************
 Creator: Tsugumi Murata *************
 Creator:                *************
 *************************************
 *************************************/


import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';

// component for APP login
export default class app_login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
  render() {
      
    return (
    <View style={{flex:1}}>
            //画像はKaigaiSNS_test内のimageディレクトリにある
            <Image source = {require('./image/background_img.jpg')} style={login_UI.image}/>
            //app_ name
        <View style = {{flex:1, justifyContent: 'flex-end', alignItems:'center'}}>
            <Text style = {login_UI.app_name} >KAIGAI-SNS</Text>
        </View>

        <KeyboardAvoidingView style = {{flex: 2, flexDirection: 'row'}} behavior={"padding"} enabled>
            
            <View style = {{flex:1}} />
            <View style = {{flex: 8, flexDirection:'column'}}>
                    <View style = {{flex: 5}} />
                    <View style = {[login_UI.text_column, {flex: 0.6, justifyContent: 'center'}]}>
                        // email column
                        <TextInput  placeholder = "Email"
                                    onChangeText ={(email) => this.setState({email})}
                                    style = {login_UI.text_input}
                                    autoCorrect = {false} />
                    </View>
                    <View style = {{flex:0.2}} />
                    <View style = {[login_UI.text_column, {flex: 0.6, justifyContent: 'center'}]}>
                        // password column
                        <TextInput  placeholder = "Password"
                                    onChangeText ={(password) => this.setState({password})}
                                    style = {login_UI.text_input}
                                    secureTextEntry = {true}
                                    autoCorrect = {false} />
                    </View>
                    <View style = {{flex:0.2}} />
                    <View style = {{flex: 1, flexDirection: 'row'}}>
                        <View style = {{flex: 1}}>
                            // login button
                            <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_small_1}>
                                <Text style={{fontFamily: 'Cochin' , color: '#E0E0E0',  fontWeight: 'bold' , fontSize: 20}}> Login </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {{flex: 0.2}}/>
                        <View style = {{flex: 1}}>
                            // facebook button
                            <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_small_2}>
                                <Text style={{fontFamily: 'Cochin', color: 'white', fontWeight: 'bold', fontSize: 20}}> Facebook </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{flex: 0.5}}>
                        // sign up link
                        <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_touch}>
                            <Text style={{fontFamily: 'Cochin', color: '#E0E0E0',  fontWeight: 'bold'}}> Sign Up </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flex: 0.5}}>
                        // forgot password link
                        <TouchableOpacity onPress = {this._onPressButton} style = {login_UI.button_touch}>
                            <Text style={{fontFamily: 'Cochin', color: '#E0E0E0',  fontWeight: 'bold'}}> Forgot password?  </Text>
                        </TouchableOpacity>
                    </View>
            </View>
            <View style = {{flex:1}} />
        </KeyboardAvoidingView>
        <View style = {{flex:0.05}}/>
            
    </View>
    );
  }
}


const login_UI = StyleSheet.create({
                            
  image:{
   
   width: '100%',
   height: '100%',
   flex: 1,
   position: 'absolute',
  // resizeMode,
  },
                                   
  app_name:{
    color: '#ffffff',
    fontFamily: 'Cochin',
    fontSize: 50,
    alignItems: 'center',
    fontWeight: 'bold',
  },
                                   
  text_column:{
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
                                   
  button_small_1:{
     backgroundColor: '#fff',
     alignItems: 'center',
     borderRadius: 30,
  },
                                   
  button_small_2:{
     backgroundColor: '#2F80ED',
     alignItems: 'center',
     borderRadius: 30,
  },
                                   
  button_touch:{
      alignItems: 'center',
   },
                                   
   text_input:{
       alignItems: 'center',
       fontFamily: 'Cochin' ,
       color: '#E0E0E0',
       fontSize: 20,
       fontWeight: 'bold',
    },
                                   
                                   
});



