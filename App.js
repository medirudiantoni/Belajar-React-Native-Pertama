import React from 'react';
import { Image, Text, TextInput, View} from 'react-native';

const App = () => {
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
      <Text style={{fontWeight: 'bold', margin: 20, fontSize: 24, color: '#0abde3'}}>Medi Rudiantoni</Text>
    )
  }
}

const Foto = () => {
    return(
        <Image source={{uri: 'https://source.unsplash.com/500x500?mountain'}} style={{width: '100%', height: '100%'}} />
    )
}

class Foto2 extends React.Component{
  render(){
    return(
      <Image source={{uri: 'https://source.unsplash.com/500x500?asian'}} style={{width: 100, height: 100, marginHorizontal: 20}}></Image>
    )
  }
}

export default App;
