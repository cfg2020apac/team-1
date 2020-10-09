import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/Reducer';
import Components from './src/Components/Components';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Components />
    </Provider>
  );
}
