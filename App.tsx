import {NavigationContainer} from '@react-navigation/native';
import React from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider, QueryClient} from 'react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'redux/store';
import Router from './src/router';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
