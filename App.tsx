import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function Dashboard() {
  return (
    <Drawer.Navigator drawerType='permanent' openByDefault>
      <Drawer.Screen name={'A'} component={View} />
      <Drawer.Screen name={'B'} component={View} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer
        linking={{
          prefixes: ['https://localhost:19006'],
          config: {
            screens: {
              Dashboard: '/dashboard/:id?',
            },
          }
        }}>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
