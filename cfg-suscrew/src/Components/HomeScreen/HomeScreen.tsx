import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

const HomeScreen = () => {

  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{color: "#fff", fontSize: 40, padding: 10, }}>Welcome</Text>
      <Text style={{color: "#96A7AF", fontSize: 20}}>
        Sign in to continue
        {"\n"}
        {"\n"}
        </Text>
      </View>
      
      <TextInput style={styles.inputBox} placeholder="Username"/>
      <TextInput style={styles.inputBox} placeholder="Password"/>
        <TouchableOpacity style={styles.SignInButton} onPress={() => console.log("signed in")}>
          <Text style={{color: "#fff"}}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Button color="#96A7AF" onPress={() => console.log("Forget Password?")} title="Forget Password?" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#30444E",
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(150, 167, 175, 0.3)",
    borderRadius: 8,
    paddingHorizontal: 160,
    paddingVertical: 10,
    fontSize: 20,
    marginVertical: 5,
  },

  SignInButton: {
    marginTop: 40,
    paddingHorizontal: 140,
    paddingVertical: 15,
    backgroundColor: "#7A3789",
    borderRadius: 8,
    marginVertical: 5,
    fontWeight: "bold",
  }
})

export default HomeScreen
