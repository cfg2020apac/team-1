import React from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text style={{color: "#000", fontSize: 80}}>Welcome</Text>
      <Text style={{color: "#96A7AF", fontSize: 30}}>Sign in to continue</Text>
      <TextInput style={styles.inputBox} placeholder="Username"/>
      <TextInput style={styles.inputBox} placeholder="Password"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 60, 
    paddingRight: 6,
  },

  inputBox: {
    width: 300,
    underlineColorAndroid: "rgba(0,0,0,0)",
    backgroundColor: "rgba(150, 167, 175, 0.3)",
    borderRadius: 25,
    paddingHorizontal: 50,
    placeholderTextColor: "#fff",
    fontSize: 16,
    marginVertical: 5,
  }
})

export default HomeScreen
