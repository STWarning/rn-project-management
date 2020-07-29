import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProjectAddScreen from '../screens/ProjectAddScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AppBottomBar from './AppBottomBar';
import AppIcons from '../widgets/AppIcon';
import { Avatar } from 'react-native-paper';

const BottomTab = createBottomTabNavigator();

export default function BottomStack() {

  const defaultActiveColor = "#EEF1FC";
  const defaultInActiveColor = "#BDCAF4";
  const defaultIconSize = 24;


  function renderIcons({
    tintColor,
    focused,
    name,
    size = defaultIconSize,
    activeColor = defaultActiveColor,
    inActiveColor = defaultInActiveColor
  }) {
    return (
      <AppIcons name={name} size={size} color={focused ? activeColor : inActiveColor} />
    )
  }

  return (
    <BottomTab.Navigator
      tabBar={props => <AppBottomBar {...props} />}
      initialRouteName="Home"
      tabBarOptions={{ showLabel: false }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => renderIcons({
            tintColor,
            focused,
            name: 'home',
          })
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => renderIcons({
            tintColor,
            focused,
            name: 'chat',
          })
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={ProjectAddScreen}
        options={{
          tabType: 'large',
          tabBarIcon: ({ tintColor, focused }) => (
            <Avatar.Text
            size={80}
              label='+'
              style={{ backgroundColor: 'transparent', paddingBottom: 4,}}
              labelStyle={{
                fontSize: 48,
                color: focused ? '#5A79EC' : '#BDCAF4'
              }} />
          )


          // renderIcons({
          //     tintColor,
          //     focused,
          //     name: 'home',
          //     size: 28,
          //     activeColor: '#5A79EC',
          //     inActiveColor: '#BDCAF4'
          //   })
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => renderIcons({
            tintColor,
            focused,
            name: 'calendar',
          })
        }}
      />
      <BottomTab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: ({ tintColor, focused }) => renderIcons({
            tintColor,
            focused,
            name: 'user',
          })
        }} />

    </BottomTab.Navigator>
  );
}

