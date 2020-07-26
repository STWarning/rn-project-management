import * as React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import AppIcons from '../widgets/AppIcon';

export default function Header({ scene, previous, navigation }) {
  const { options } = scene.descriptor;
  const title = options.headerTitle !== undefined
    ? options.headerTitle
    : options.title !== undefined
      ? options.title
      : scene.route.name;


  return (
    <Appbar.Header
      style={{ backgroundColor: "transparent" }}
    // theme={{ colors: { primary: theme.colors.surface } }}
    >
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
        // color={theme.colors.primary}
        />) : (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <AppIcons name="home" />
          </TouchableOpacity>
        )
      }
      <Appbar.Content
        style={{ backgroundColor: 'transparent' }}
        title="My Project"
        subtitle="26 May. 2019"
        titleStyle={{ color: "#FFFFFF", fontSize: 16 }}
        subtitleStyle={{ color: "#FFFFFF", fontSize: 13 }}
      />

    </Appbar.Header>
  );
}