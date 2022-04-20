import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import './config/ReactotronConfig';

import Main from '../src/pages/Main';
import User from '../src/pages/User';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Usuário"
            component={Main}
            options={{
              headerStyle: {
                backgroundColor: '#7159c1',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{
              headerStyle: {
                backgroundColor: '#7159c1',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
