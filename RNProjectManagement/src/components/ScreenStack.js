import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import BottomStack from './BottomStack';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export function ScreenStack(props) {
  return (
    <Stack.Navigator
      headerMode='none'
      initialRouteName=""
      screenOptions={{
        // header: ({ scene, previous, navigation }) => (
        //   <Header scene={scene} previous={previous} navigation={navigation} />
        // )
      }}
    >
      <Stack.Screen name='BottomStack' component={BottomStack} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  )
}