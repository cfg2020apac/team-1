import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import firebaseDb from '../../../../firebaseDb';

export default class ProfileScreen extends React.Component<any, any> {
  componentDidMount() {
    const { route } = this.props;
    const { userData } = route
  }

  renderAssessment = (item: any) => (
    <View style={styles.itemContainer} key={item}>
      <View style={styles.box}>
        <Text style={{ fontSize: 30 }}>💪</Text>
      </View>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  render() {
    const { navigation, route } = this.props;
    const { userData } = route;
    const assessment = ['SSA', 'Counselor', 'Career Coach', 'HDB Assessment'];

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.circle}>
            <Text>👩</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'white' }}>{userData.Name}</Text>
            <Text style={{ color: 'white' }}>Details</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Match')}
        >
          <View style={styles.box}>
            <Text style={{ fontSize: 30 }}>💪</Text>
          </View>
          <Text style={styles.text}>Matching</Text>
        </TouchableOpacity>
        {assessment.map((item) => this.renderAssessment(item))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30444E',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15
  },
  box: {
    width: 80,
    height: 80,
    borderColor: '#3DD598',
    borderWidth: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    marginLeft: 10
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#FFC542',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
