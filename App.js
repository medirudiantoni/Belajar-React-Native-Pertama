import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import macbook from './macbook.jpg';
import SampleComponent from './components/SampleComponents';

class App extends React.Component{
  render(){
    return(
      <ScrollView>
        {/* <SampleComponent /> */}
        <StylingReactNativeComponent />
      </ScrollView>
    )
  }
}

const StylingReactNativeComponent = () => {
  return(
    <View style={{padding: 20, marginTop: 40}}>
      <Card />
    </View>
  )
}

class Card extends React.Component{
  render(){
    return(
      <View style={styles.card}>
        <Image source={macbook} style={styles.img}></Image>
        <Text style={styles.title}>New Macbook Pro 2020</Text>
        <Text style={styles.price}>Rp. 25 jetong</Text>
        <Text style={styles.loc}>Lampung</Text>
        <Text style={styles.tombol}>Beli</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  card: {
    width: 212,
    minHeight: 300,
    borderRadius: 10,
    backgroundColor: '#FAF0D7',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: 10,
    shadowOpacity: 50,
    shadowRadius: 50
  },
  img: {
    height: 107,
    width: '100%',
    borderRadius: 5,
    marginBottom: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20
  },
  price: {
    color: '#FD8D14',
    fontSize: 14,
    fontWeight: '600'
  },
  loc: {
    fontSize: 14
  },
  tombol: {
    width: '100%',
    padding: 8,
    color: '#fff',
    backgroundColor: '#6528F7',
    borderRadius: 100,
    fontSize: 18,
    textAlign: 'center',
    position: 'absolute',
    bottom: 12,
    left: 12
  }
})




export default App;
