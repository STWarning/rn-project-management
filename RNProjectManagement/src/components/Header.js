import * as React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import AppIcons from '../widgets/AppIcon';

export default function Header({ scene, previous, navigation }) {
  console.log({ route: scene.route });
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header style={{ backgroundColor: 'transparent' }}>
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.pop()} />
      ) : (
        <TouchableOpacity
          style={{ marginTop: 20, marginLeft: 10 }}
          onPress={() => navigation.openDrawer()}>
          <AppIcons name="home" size={28} />
        </TouchableOpacity>
      )}
      <Appbar.Content
        style={{ backgroundColor: 'transparent', marginTop: 20 }}
        title={title}
        subtitle={options.subtitle}
        titleStyle={{ color: '#F0FDFE', fontSize: 20, fontWeight: 'bold' }}
        subtitleStyle={{ color: '#F0FDFE', fontSize: 13 }}
      />
    </Appbar.Header>
  );
}
