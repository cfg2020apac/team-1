import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import firebaseDb from '../../../firebaseDb';
import { connect } from 'react-redux';

const LoginScreen: React.FunctionComponent<any> = ({setSession}) => {
  const [value, userText] = useState('');
  const [passwordValue, passText] = useState('');

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  const [error, setError] = useState('');

  const userLogin = async (email: string, password: string) => {
    const users = firebaseDb.collection('User');
    const snapshot = await users.where('Email', '==', value).get();
    if (snapshot.empty) {
      setError('No such user!');
    }

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (data.Password !== password) {
        setError('Wrong password!');
      } else {
        setSession({userId: doc.id, role: data.Role})
      }
    });
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
        <View style={styles.header}>
          <Text style={{ color: '#fff', fontSize: 40, paddingLeft: 50 }}>
            Welcome
          </Text>
          <Text style={{ color: '#96A7AF', fontSize: 20, paddingLeft: 50 }}>
            Sign in to continue
          </Text>
        </View>

        <View style={styles.container}>
          <TextInput
            placeholderTextColor="gray"
            style={styles.userInput}
            onChangeText={(text) => userText(text)}
            placeholder="Email"
            value={value}
          />

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              placeholderTextColor="gray"
              placeholder="Password"
              style={styles.passInput}
              secureTextEntry={visible}
              onChangeText={(text) => passText(text)}
              value={passwordValue}
            />
            {error.length > 0 && <Text style={{ color: 'red' }}>{error}</Text>}
            <TouchableOpacity
              style={styles.btnEye}
              onPress={() => {
                setVisible(!visible);
                setShow(!show);
              }}
            >
              <Icon
                name={!show ? 'eye-outline' : 'eye-off-outline'}
                size={26}
                color={'#fff'}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.SignInButton}
            onPress={() => userLogin(value, passwordValue)}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Forget Password?')}>
            <Text style={{ color: '#96A7AF', padding: 15 }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSession: (session) => dispatch({ type: 'SET_SESSION', payload: session })
});

export default connect(null, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#30444E'
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  userInput: {
    backgroundColor: 'rgba(150, 167, 175, 0.4)',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 330,
    color: '#fff'
  },

  passInput: {
    backgroundColor: 'rgba(150, 167, 175, 0.4)',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
    borderColor: '#777',
    padding: 13,
    margin: 10,
    width: 330,
    color: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },

  SignInButton: {
    marginTop: 40,
    paddingHorizontal: 140,
    paddingVertical: 15,
    backgroundColor: '#7A3789',
    borderRadius: 8,
    marginVertical: 5
  },

  btnEye: {
    position: 'absolute',
    right: 25,
    top: 22
  }
});
