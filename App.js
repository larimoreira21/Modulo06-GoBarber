import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import './src/config/ReactotronConfig';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Group screenOptions={{headerStyle:{backgroundColor: '#7159c1'}}}>
        <Stack.Screen name="Usuários" component={HomeScreen}/>
     </Stack.Group>
     </Stack.Navigator>
    </NavigationContainer>
  );
}



