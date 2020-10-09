import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebaseDb from '../../../../firebaseDb';
import { connect } from 'react-redux';

const NewProfileForm = ({ session }) => {
  const [name, setName] = useState('');
  const [nric, setNric] = useState('');
  const [address, setAddress] = useState('');
  const [nationality, setNationality] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [language, setLanguage] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [religion, setReligion] = useState('');
  const [gender, setGender] = useState('');
  const [counselor, setCounselor] = useState(false);
  const [operation, setOperation] = useState(false);
  const [jobcoach, setJobCoach] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const submitForm = () => {
    firebaseDb
      .collection('Profile')
      .add({
        Name: name,
        DateOfBirth: dateOfBirth,
        LanguageSpoken: language,
        Race: ethnicity,
        MobileNumber: contactNumber,
        Gender: gender,
        Citizenship: nationality,
        CaseManager: session.userId,
        Counselor: counselor,
        Operation: operation,
        JobCoach: jobcoach
      })
      .then(() => {
        setName('');
        setNric('');
        setAddress('');
        setNationality('');
        setContactNumber('');
        setDateOfBirth(new Date());
        setLanguage('');
        setEthnicity('');
        setReligion('');
        setGender('');
        setCounselor(false)
        setOperation(false)
        setJobCoach(false)
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text>👩</Text>
      </View>
      <KeyboardAwareScrollView style={styles.questionContainer}>
        <Text style={styles.nameText}>Client Name:</Text>
        <TextInput
          style={styles.inputBox}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Client Name"
        />
        <Text style={styles.nameText}>NRIC:</Text>
        <TextInput
          style={styles.inputBox}
          value={nric}
          onChangeText={(text) => setNric(text)}
          placeholder="NRIC"
        />
        <Text style={styles.nameText}>Address:</Text>
        <TextInput
          style={styles.inputBox}
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Address"
        />
        <Text style={styles.nameText}>Gender:</Text>
        <TextInput
          style={styles.inputBox}
          value={gender}
          onChangeText={(text) => setGender(text)}
          placeholder="Gender"
        />
        <Text style={styles.nameText}>Nationality:</Text>
        <TextInput
          style={styles.inputBox}
          value={nationality}
          onChangeText={(text) => setNationality(text)}
          placeholder="Nationality"
        />
        <Text style={styles.nameText}>Contact Number:</Text>
        <TextInput
          style={styles.inputBox}
          value={contactNumber}
          onChangeText={(text) => setContactNumber(text)}
          keyboardType="number-pad"
          placeholder="Contact Number"
        />
        <Text style={styles.nameText}>DOB:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)}>
          <Text style={{ color: 'white', paddingBottom: 10 }}>
            {dateOfBirth.toDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            textColor="white"
            value={dateOfBirth}
            onChange={(_, date) => setDateOfBirth(date)}
          />
        )}
        <Text style={styles.nameText}>Religion:</Text>
        <TextInput
          style={styles.inputBox}
          value={religion}
          onChangeText={(text) => setReligion(text)}
          placeholder="Religion"
        />
        <Text style={styles.nameText}>Language Spoken:</Text>
        <TextInput
          style={styles.inputBox}
          value={language}
          onChangeText={(text) => setLanguage(text)}
          placeholder="Language Spoken"
        />
        <Text style={styles.nameText}>Ethnicity:</Text>
        <TextInput
          style={styles.inputBox}
          value={ethnicity}
          onChangeText={(text) => setEthnicity(text)}
          placeholder="Ethnicity"
        />
        <CheckBox
          title="Requires Counselor"
          checked={counselor}
          onPress={() => setCounselor(!counselor)}
          containerStyle={{ backgroundColor: 'transparent' }}
          textStyle={{ color: '#fff' }}
        />
        <CheckBox
          title="Requires Operation"
          checked={operation}
          onPress={() => setOperation(!operation)}
          containerStyle={{ backgroundColor: 'transparent' }}
          textStyle={{ color: '#fff' }}
        />
        <CheckBox
          title="Requires JobCoach"
          checked={jobcoach}
          onPress={() => setJobCoach(!jobcoach)}
          containerStyle={{ backgroundColor: 'transparent' }}
          textStyle={{ color: '#fff' }}
        />
        <TouchableOpacity
          style={styles.SignInButton}
          onPress={() => submitForm()}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps)(NewProfileForm);

const styles = StyleSheet.create({
  register: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 5
  },

  SignInButton: {
    marginTop: 40,
    paddingVertical: 15,
    backgroundColor: '#7A3789',
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center'
  },

  label: {
    margin: 8
  },

  inputBox: {
    width: 240,
    backgroundColor: 'rgba(150, 167, 175, 0.3)',
    borderRadius: 15,
    paddingRight: 60,
    fontSize: 12,
    height: 30
  },

  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#30444E',
    flexDirection: 'row'
  },

  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 5
  },

  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#FFC542',
    justifyContent: 'center',
    alignItems: 'center'
  },

  questionContainer: {
    paddingLeft: 30
  }
});
