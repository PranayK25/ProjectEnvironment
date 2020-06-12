import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppNavigation from './navigation';

console.disableYellowBox = true;
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
