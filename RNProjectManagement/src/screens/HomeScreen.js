import * as React from 'react';

import { Text, View } from 'react-native';
import AppIcon from '../config/icon-font';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.push('Detail')}>
        <AppIcon
          name="home"
          size={24}
          color="#BDBDBD"
        />
      </TouchableOpacity>
    </View>
  )
}