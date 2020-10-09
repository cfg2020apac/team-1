import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import firebaseDb from '../../../../firebaseDb';

export default class ProfileScreen extends React.Component<any, any> {
  componentDidMount() {
    const { route } = this.props;
    const { userData } = route.params;

    console.log(userData);
  }

  renderAssessment = (item, status) => {
    const icon = {
      'Counselor Assessment': '🏫',
      'SSA Assessment': '💪',
      'Job Coach Assessment': '👔',
      'HDB Assessment': '🏠'
    };
    return (
      <View
        style={[
          styles.itemContainer,
          status === 'Approved' && { borderColor: '#3DD598' }
        ]}
        key={item}
      >
        <View style={styles.box}>
          <Text style={{ fontSize: 30 }}>{icon[item]}</Text>
        </View>
        <Text style={styles.text}>{item}</Text>
        <Text style={styles.text}>{item.status || 'Pending'}</Text>
      </View>
    );
  };

  render() {
    const { navigation, route } = this.props;
    const { userData } = route.params;
    const assessment = ['SSA', 'Counselor', 'Career Coach', 'HDB Assessment'];

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.circle}>
            <Text>👩</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'white' }}>{userData.Name}</Text>
            <Button
              color="white"
              onPress={() => navigation.navigate('UserDetails', { userData })}
              title="Details"
            />
          </View>
        </View>
        {!!userData.HDBStatus && userData.HDBStatus === 'Approved' && (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Match')}
          >
            <View style={styles.box}>
              <Text style={{ fontSize: 30 }}>💪</Text>
            </View>
            <Text style={styles.text}>Matching</Text>
          </TouchableOpacity>
        )}
        {userData.Counselor &&
          this.renderAssessment(
            'Counselor Assessment',
            userData.CounselorStatus
          )}
        {userData.Operations &&
          this.renderAssessment('SSA Assessment', userData.OperationsStatus)}
        {userData.JobCoach &&
          this.renderAssessment(
            'Job Coach Assessment',
            userData.JobCoachStatus
          )}
        {this.renderAssessment('HDB Assessment', userData.HDBStatus)}
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
