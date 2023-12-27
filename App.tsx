/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persister, store } from './src/redux/store';
// import I18n from 'react-native-i18n';
//  import {NetworkProvider} from 'react-native-offline';
import { LogBox, SafeAreaView } from 'react-native';
import MainNav from './src/navigation/MainNavigation';
const App = () => {
  LogBox.ignoreAllLogs();





  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <MainNav />

      </PersistGate>
    </Provider>
  );
};

export default App;
