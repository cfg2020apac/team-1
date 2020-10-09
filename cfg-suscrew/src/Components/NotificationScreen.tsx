import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";


const NotificationScreen = () => {
  const [people, setPeople] = useState([
    {name: "shaun", key: "1"},
    {name: "yoshi", key: "2"},
    {name: "mario", key: "3"},
    {name: "luigi", key: "4"},
    {name: "peach", key: "5"},
    {name: "shaun", key: "6"},
    {name: "yoshi", key: "7"},
    {name: "mario", key: "8"},
    {name: "luigi", key: "9"},
    {name: "peach", key: "10"},
  ]);

  return (
    <>
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <FlatList 
          data={people}
          renderItem={({item}) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        />
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

  item: {
    backgroundColor: "rgba(0, 0, 0, 0.27)",
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 24,
    padding: 30,
    marginTop: 24,
    width: 350,
    color: "#fff",
  }
})

export default NotificationScreen;
