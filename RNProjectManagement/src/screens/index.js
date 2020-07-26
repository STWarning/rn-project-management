import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-paper';
import AppIcon from '../config/icon-font';
import CalendarScreen from './CalendarScreen';
import ChatScreen from './ChatScreen';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Header from '../components/Header';
import ProjectAddScreen from './ProjectAddScreen';
import AppBottomBar from '../components/AppBottomBar';
// import { TouchableHighlight } from 'react-native-gesture-handler';

const BottomTab = createBottomTabNavigator();

const BottomTabs = (props) => {
  return (
    <BottomTab.Navigator
      sceneAnimationEnabled
      renderTouchable={false}
      shifting
      tabBarOptions={{
        showLabel: false,
      }}
      tabBar={props => <AppBottomBar {...props} />}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <AppIcon
              name="home"
              size={24}
              color={focused ? "#EEF1FC" : "#BDCAF4"}
            />
          )
        }} />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <AppIcon name="chat"
              size={24}
              color={focused ? "#EEF1FC" : "#BDCAF4"} />
          ),
        }} />

      <BottomTab.Screen
        name="Add"
        component={ProjectAddScreen}
        options={{
          tabType: 'large',
          tabBarIcon: ({ tintColor, focused }) => (
            <AppIcon
              name="chat"
              size={28}
              color={focused ? "#5A79EC" : "#BDCAF4"}  />
          )
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <AppIcon name="calendar"
              size={24}
              color={focused ? "#EEF1FC" : "#BDCAF4"} />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <AppIcon name="user"
              size={24}
              color={focused ? "#EEF1FC" : "#BDCAF4"} />
          )
        }} />
    </BottomTab.Navigator>
  )
}

const RootStack = createStackNavigator();

const RootUI = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="BottomTabs" component={BottomTabs} />
      <RootStack.Screen name="Detail" component={DetailScreen} />
    </RootStack.Navigator>
  )
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <BottomTabs /> */}
        <RootUI props />
      </NavigationContainer>
    </PaperProvider>
  )
}