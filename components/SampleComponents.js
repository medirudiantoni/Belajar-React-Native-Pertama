import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import medi from '../medi.png';


const SampleComponent = () => {
    return (
      <View>
          <View style={{width: '100%', height: 420, overflow: 'hidden', marginBottom: 20, top: 0}}>
              <Foto />
          </View>
          <Maname />
        <TextInput style={{margin: 20, borderWidth: 1.5}} />
        <Foto2 />
      </View>
    );
  };
  
  class Maname extends React.Component{
    render(){
      return(
        <Text style={{fontWeight: 'bold', margin: 20, fontSize: 24, color: '#0abde3'}}>Medi Rudiantoni apk</Text>
      )
    }
  }
  
  const Foto = () => {
      return(
          <Image source={{uri: 'https://source.unsplash.com/1080x1080?robot'}} />
      )
  }
  
  class Foto2 extends React.Component{
    render(){
      return(
        <Image source={medi} style={{width: 100, height: 100, marginHorizontal: 20}}></Image>
      )
    }
  }

export default SampleComponent;