import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    <AppLoading
      startAsync={bootstrap}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}
    />;
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
