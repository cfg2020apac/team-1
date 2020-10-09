import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default class MatchScreen extends React.Component<any, any> {
  renderTraits = (key: string, value: boolean) => (
      <Text key={key} style={{color: 'white', paddingVertical: 10}}>
        {value ? '✅' : '❌'} {key}
      </Text>
  );

  render() {
    const data = [
      {
        id: 1,
        name: 'Tan Ah Lian',
        number: '91234567',
        traits: [
          { key: 'Smoking Habit', value: true },
          { key: 'Language', value: true }
        ]
      },
      {
        id: 2,
        name: 'Tan Ah Kee',
        number: '91234567',
        traits: [
          { key: 'Smoking Habit', value: true },
          { key: 'Language', value: false }
        ]
      }
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          contentContainerStyle={styles.tableContainer}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <View style={styles.circle}>
                <Text>👩</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>
                  #{index + 1} {item.name}`
                </Text>
                <Text style={{ color: 'white', paddingBottom: 20 }}>📱 {item.number}</Text>
                {item.traits.map(trait => this.renderTraits(trait.key, trait.value))}
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30444E'
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#FFC542',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableContainer: {
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10
  },
  itemContainer: {
    paddingVertical: 5,
    flexDirection: 'row'
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
});
