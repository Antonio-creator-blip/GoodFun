import React from "react";
import {StyleSheet, Button, Image } from "react-native";
import * as Speech from 'expo-speech';

import { Text, View } from "../components/Themed";

import data from "../components/battute.json";

let random = new Array ()
class TabOneScreen extends React.Component <{}>  {
  
  state = {
      joke : "Inizia a ridere"
    }

  
  makeJoke = () => {
    Speech.stop()
    if(random.length >= (data.length) ){
      this.setState({
        random:[]
      })
    }

    else{
      let casual = NaN
      do{
        casual = Math.floor(Math.random() * (data.length-1) + 0)
      }while(random.includes(casual))
      this.setState({
        joke: data[casual],
      });
      random.push(casual)
    }
  };


  render(){
    Speech.speak(this.state.joke)
    return (<View style={styles.container}>
        <Text style={styles.title}>{this.state.joke}</Text> 
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button title="Premi" onPress={this.makeJoke}  />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 25,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image:{
    width: 100
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default TabOneScreen;
