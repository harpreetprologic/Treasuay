import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NativeBaseProvider} from 'native-base';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
    console.log('Bootsplash has been hidden successfully');
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider config={config}>
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
