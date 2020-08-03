import * as React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import AppBackground from '../../components/AppBackground';
import { Color } from '../../config';
import AppIcons from '../../widgets/AppIcon';

export default function OngoingProjectScreen({ route }) {
  const { project } = route.params;
  console.log({ project });

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Pressable onPress={() => console.log('open drawer')}>
          <AppIcons name="home" size={28} color={Color.white} />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ongoing project</Text>
          <Text style={styles.subTitle}>16 May, 2020</Text>
        </View>
      </View>
    );
  };

  return (
    <AppBackground style={styles.container}>
      <Header />
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 22,
    color: Color.white,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    color: Color.white,
  },
});
