import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import config from './config';

enableScreens();
const RootStack = createStackNavigator();

const Router = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="TransactionList">
            {config.map((data) => (
              <RootStack.Screen
                key={data.name}
                name={data.name}
                component={data.component}
                options={data.options}
              />
            ))}
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default Router;
