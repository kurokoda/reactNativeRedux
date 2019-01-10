import React from "react";
import { View } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'
import { Header } from './src/components/common/Header';
import LibraryList from './src/components/LibraryList'

const App = () => {
  return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header text="React Redux" />
          <LibraryList />
        </View>
      </Provider>
  );
};

export default App;
