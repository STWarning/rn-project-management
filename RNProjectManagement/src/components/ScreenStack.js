import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Header from './Header';
import BottomStack from './BottomStack';
import DetailScreen from '../screens/DetailScreen';
import OngoingProjectScreen from '../screens/ongoing_project/OngoingProjectScreen';

const Stack = createStackNavigator();

const navConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export function ScreenStack(props) {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="BottomStack"
      mode="card"
      screenOptions={{
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // header: ({ scene, previous, navigation }) => (
        //   <Header scene={scene} previous={previous} navigation={navigation} />
        // )
      }}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Ongoing" component={OngoingProjectScreen} />
    </Stack.Navigator>
  );
}
