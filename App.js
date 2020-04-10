import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync (
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay:true}
     )
  }

  render() {
    return (
     <TouchableOpacity style = {{
       backgroundColor:'red',
       marginLeft:160,
       borderWidth:5,
       borderColor:'black',
       alignItems:'center',
       width:100,
       height:100,
       borderRadius:600,
       justifyContent:'center',
       alignItems: 'center'
       
     }}
     onPress = {this.playSound}>
     <Text style = {{
       color:'white',
       fontSize:40,
       fontWeight:'bold',
       fontFamily:'algerian'
       }}> Sound 1 </Text>
     </TouchableOpacity>
    
    );
  }
}
class Touch extends React.Component {
   playSound1 = async () => {
     await Audio.Sound.createAsync (
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay:true}
     )
  }
  render() {
    return (
     <TouchableOpacity style = {{
       backgroundColor:'pink',
       marginLeft:40,
       borderWidth:5,
       borderColor:'black',
       alignItems:'center',
       width:120,
       height:120,
       borderRadius:600,
       justifyContent:'center'
       
     }}
     onPress = {this.playSound1}>
     <Text style = {{
       color:'black',
       fontSize:20,
       fontWeight:'bold',
       fontFamily:'algerian'
       }}> Sound 2 </Text>
     </TouchableOpacity>
    
    );
  }
}
class TouchBu extends React.Component {
  playSound2 = async () => {
     await Audio.Sound.createAsync (
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay:true}
     )
  }
  render() {
    return (
     <TouchableOpacity style = {{
       backgroundColor:'purple',
       marginLeft:200,
       borderWidth:5,
       borderColor:'black',
       alignItems:'center',
       width:120,
       height:120,
       borderRadius:600,
       justifyContent:'center'
       
     }}
     onPress = {this.playSound2}>
     <Text style = {{
       color:'white',
       fontSize:20,
       fontWeight:'bold',
       fontFamily:'algerian'
       }}> Sound 3 </Text>
     </TouchableOpacity>
    
    );
  }
}
class TouchButt extends React.Component {
   playSound3 = async () => {
     await Audio.Sound.createAsync (
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay:true}
     )
  }
  render() {
    return (
     <TouchableOpacity style = {{
       backgroundColor:'orange',
       marginLeft:20,
       borderWidth:5,
       borderColor:'black',
       alignItems:'center',
       width:100,
       height:100,
       borderRadius:600,
       justifyContent:'center'
       
     }}
     onPress = {this.playSound3}>
     <Text style = {{
       color:'black',
       fontSize:20,
       fontWeight:'bold',
       fontFamily:'algerian'
       }}> Sound 4 </Text>
     </TouchableOpacity>
    
    );
  }
}
class SoundDj extends React.Component {
  render() {
    return (
     <TouchableOpacity style = {{
       backgroundColor:'green',
       marginLeft:100,
       borderWidth:5,
       borderColor:'black',
       alignItems:'center',
       width:150,
       height:70,
       borderRadius:600,
       justifyContent:'center'
       
     }}
     >
     <Text style = {{
       color:'white',
       fontSize:20,
       fontWeight:'bold',
       fontFamily:'algerian'
       }}> S.G DJ Music </Text>
     </TouchableOpacity>
    )
  }
}
export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:50}}>
        <SoundButton />
        <View style={{marginTop:50}}>
        <Touch/>
      </View>
      <View style={{marginTop:20}}>
        <TouchBu/>
      </View>
       <View style={{marginTop:20}}>
        <TouchButt/>
      </View>
   <View style={{marginTop:20}}>
        <SoundDj/>
      </View>
      </View>
      
    );
  }
}


