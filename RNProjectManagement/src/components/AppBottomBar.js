import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function AppBottomBar({ state, descriptors, navigation }) {

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={BottomBarStyle.container}>
      <View style={BottomBarStyle.fakeBackground} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }

        const onLongPress = () => {
          navigation.emit({ type: 'tabLongPress', target: route.key });
        }

        const TabBarIcon = options.tabBarIcon;
        const iconColor = isFocused ? "#EEF1FC" : "#BDCAF4";
        const tabType = options.tabType || "normal";
        return (
          <TouchableWithoutFeedback
            key={index}
            accessibilityRole='button'
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View style={tabType === 'large' ? BottomBarStyle.largeIcon : BottomBarStyle.normalIcon}>
              <TabBarIcon
                focused={isFocused}
                tintColor={iconColor}
              />
            </View>

            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
          </TouchableWithoutFeedback>
        )

      })}
    </View>
  )
}

const BottomBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'flex-end'
  },
  largeIcon: {
    alignItems: 'center',
    bottom: 24,
    width: 64,
    height: 64,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: "#EEF1FC",
    borderRadius: 32,
    elevation: 8
  },
  normalIcon: {
    flex: 1,
    height: 64,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fakeBackground: {
    width: '100%',
    position: 'absolute',
    backgroundColor: '#90A5EB',
    bottom: 0,
    height: 64
  },
});

