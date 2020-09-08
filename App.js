import React from 'react';
import {AppStack} from './route';
import {Provider} from 'react-redux';
import {store} from './App/scene/redux/store/index';
const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
