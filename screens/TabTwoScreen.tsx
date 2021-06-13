import React from 'react';
import {StyleSheet,ScrollView, TouchableOpacity, VirtualizedList, SafeAreaView,} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Text, View, } from "../components/Themed";
import * as Speech from 'expo-speech';

import data from '../components/battute.json';
class TabTwoScreen extends React.Component  {
  
  constructor(props:{}){
    super(props);
  }

  state = {
    search : "",
    list: [],
    char: ""
  }

  

  updateSearch = (evento) => {
    this.setState({ search: evento});
    console.log(evento);
    let lista = new Array
    data.forEach(function (item, index) {
      if(item.includes(evento)){
        lista.push(item)
      }
    });
    if(evento===""){
      this.setState({list:[]})
    }
    else{
      this.setState({
        list : lista
      })
    }
  };
  

  searchKey = () => {
    let word = this.state.search
    console.log(word)
    let lista = new Array
    data.forEach(function (item, index) {
      if(item.includes(word)){
        lista.push(item)
      }
    });
    this.setState({
      list : lista
    })
    
  }

  onClickJoke = (joke) => {
    Speech.stop()
    Speech.speak(joke)
  }


  render() {
    
    return (
      <View>
        <SearchBar
        platform= "default"
        placeholder= "Parola chiave..."
        onChangeText={this.updateSearch}
        value={this.state.search}
        />
        
        <SafeAreaView style={styles.Scroll}>  
        <ScrollView style={styles.Scroll}>
          {this.state.list.map((item) => {
            return(
                <View key={item} style={styles.ViewofScroll} >
                  <TouchableOpacity  onPress={()=>{this.onClickJoke(item)}}>
                    <Text style={styles.TextofScroll}>{item}</Text>
                  </TouchableOpacity>
              </View>
            )
          })}
          </ScrollView>
        </SafeAreaView>
      </View>


      

      
      
    );
  }
  
}

const styles = StyleSheet.create({
  Scroll:{
    backgroundColor: '#BDC3C7'
  },
  ViewofScroll: {
    marginBottom: 10
  },
  TextofScroll: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image:{
    display:'flex'
  },
  buttonAdd: {
      alignItems: "center",
      backgroundColor: "#ADDD0D",
      padding: 10
  }
});

export default TabTwoScreen;



