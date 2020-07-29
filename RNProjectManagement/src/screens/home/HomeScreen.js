import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView, Dimensions } from 'react-native';
import AppIcon from '../../config/icon-font';
import LinearGradient from 'react-native-linear-gradient';
import AppIcons from '../../widgets/AppIcon';
import { Avatar } from 'react-native-paper';
import ProjectList from './ProjectList';
import TeammateList from './TeammateList';
import UpComingProjects from './UpComingProjects';
import { Color } from '../../config';

export default function HomeScreen({ navigation }) {

  function renderHeader() {
    return (
      <View style={HomeScreenStyle.headerContainer}>
        <Pressable onPress={() => console.log('open drawer')} >
          <AppIcons name='home' size={28} color={Color.white  } />
        </Pressable>
        <View style={HomeScreenStyle.titleContainer}>
          <Text style={HomeScreenStyle.title}>My Project</Text>
          <Text style={HomeScreenStyle.subTitle}>16 May, 2020</Text>
        </View>
        <Pressable style={HomeScreenStyle.avatarContainer} onPress={() => console.log('open profile')}>
          <Avatar.Image size={36} source={require('../../assets/images/avatar_1.png')} />
        </Pressable>
      </View>
    )
  }

  return (

    <LinearGradient colors={['#9BCEFE', '#739FF9', '#5C83F3']} style={{ flex: 1 }}>
      <View style={HomeScreenStyle.container}>
        {renderHeader()}
        <ScrollView>
          <View>
            <ProjectList />
            <TeammateList />
            <UpComingProjects />
            <View style={{ height: 30}}/>
          </View>
        </ScrollView>

      </View>
    </LinearGradient >
  )
}

const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  headerContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20
  },
  title: {
    fontSize: 22,
    color: Color.white,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 12,
    color: Color.white,
  },
  avatarContainer: {
    padding: 1,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#77A3E6'
  }
})