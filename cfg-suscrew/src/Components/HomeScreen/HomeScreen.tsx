import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const HomeScreen = () => {
  const [value, userText] = React.useState('Username');
  const [passwordValue, passText] = React.useState('Password');

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  return (
    <>
    <View style={styles.mainContainer}>
    <View style={styles.header}>
      <Text style={{color: "#fff", fontSize: 40, paddingLeft: 50, }}>Welcome</Text>
      <Text style={{color: "#96A7AF", fontSize: 20, paddingLeft: 50,}}>
        Sign in to continue
        </Text>
      </View>
      
      <View style={styles.container}>
        <TextInput style={styles.userInput} onChangeText={text => userText(text)}
      value={value}/>

      <View>
        <TextInput 
          style={styles.passInput}
          secureTextEntry={visible}
          onChangeText={text => passText(text)}
          value={passwordValue}/>
        <TouchableOpacity style={styles.btnEye} onPress={
          ()=>{
            setVisible(!visible)
            setShow(!show)
          }
        }>
          <Icon name={show === false ? "eye-outline" : "eye-off-outline"} size={26} color={"#fff"}></Icon>
        </TouchableOpacity>      
        
      </View> 

        <TouchableOpacity style={styles.SignInButton} onPress={() => console.log("signed in")}>
          <Text style={{color: "#fff", fontWeight:"bold"}}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Forget Password?")}> 
          <Text style={{color: "#96A7AF", padding: 15}}>
            Forget Password?
          </Text>
        </ TouchableOpacity>
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#30444E",
  },


  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },


  userInput: {
    backgroundColor: "rgba(150, 167, 175, 0.4)",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
    borderColor: "#777",
    padding: 10,
    margin: 10,
    width: 330,
    color: "#fff",
  },

  passInput: {
    backgroundColor: "rgba(150, 167, 175, 0.4)",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
    borderColor: "#777",
    padding: 13,
    margin: 10,
    width: 330,
    color: "#fff",
    borderBottomWidth: 1, 
    flexDirection: "row"
  },

  SignInButton: {
    marginTop: 40,
    paddingHorizontal: 140,
    paddingVertical: 15,
    backgroundColor: "#7A3789",
    borderRadius: 8,
    marginVertical: 5,
  },

  btnEye: {
    position: "absolute",
    right: 25,
    top:22,
  }
})

export default HomeScreen;
