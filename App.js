import React from 'react';
import { Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <>
    <View>
        <View style={{width: '100%', height: 420, overflow: 'hidden', marginBottom: 20, top: 0}}>
            <Foto />
        </View>
      <TextInput style={{margin: 20, borderWidth: 1.5}} />
    </View>
    </>
  );
};

const Medi = () => {
  return <Text>Medi Rudiantoni</Text>;
};

const Foto = () => {
    return(
        <Image source={{uri: 'https://source.unsplash.com/500x500?mountain'}} style={{width: '100%', height: '100%'}} />
    )
}

export default App;
