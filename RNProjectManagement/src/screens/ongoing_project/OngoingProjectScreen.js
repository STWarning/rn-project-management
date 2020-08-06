import * as React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import AppBackground from '../../components/AppBackground';
import { Color } from '../../config';
import AppIcons from '../../widgets/AppIcon';
import CardProjectOnBoard from './CardProjectOnBoard';
import MemberList from '../../components/MemberList';
import { ScrollView } from 'react-native-gesture-handler';

const description = `To be successful, you have to use each day as an 
opportunity to improve, to be better, to get a little bit closer
to your goals. It might sound like a lot of work-and with a 
busy schedule, next to impossible. 
But the best part is, the more you accomplish, the more 
you'll want to do, the higher you'll want to reach `;

export default function OngoingProjectScreen({ route, navigation }) {
  const { project } = route.params;
  console.log({ project });

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.pop()}>
          <AppIcons name="back" size={28} color={Color.white} />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ongoing project</Text>
          <Text style={styles.subTitle}>16 May, 2020</Text>
        </View>
        <Pressable onPress={() => alert("open Setting")}>
          <AppIcons name="home" size={28} color={Color.white} />
        </Pressable>
      </View>
    );
  };

  const ProjectAbout = () => {
    return (
      <View style={styles.projectAbout}>
        <Text style={styles.aboutTitle}>About Project</Text>
        <Text style={styles.aboutDescription}>{description}</Text>
      </View>
    );
  };

  const Control = () => {
    return (
      <View style={styles.controlContainer}>
        <View style={styles.createProjectContainer}>
          <Text style={styles.createProjectText}>Create Project</Text>
        </View>
        <Pressable style={styles.editContainer} onPress={() => alert('Edit')}>
          <AppIcons name="edit" size={28} color={Color.white} />
        </Pressable>
      </View>
    );
  };

  return (
    <AppBackground>
      <Header />
      <ScrollView style={styles.container}>
        <View>
          <CardProjectOnBoard project={project} />
          <MemberList
            style={styles.memberList}
            title="Project Members"
            onAddPressed={() => alert('Add Member Ongoing')}
          />
          <ProjectAbout />
        </View>
      </ScrollView>
      <Control />
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 50,
  },
  headerContainer: {
    maxHeight: 64,
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  memberList: {
    marginTop: 15,
  },
  projectAbout: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  aboutTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Color.white,
  },
  aboutDescription: {
    lineHeight: 28,
    fontWeight: '600',
    marginTop: 15,
    color: '#F1F5FE',
    fontSize: 16,
  },
  controlContainer: {
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'center',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createProjectContainer: {
    borderRadius: 14,
    paddingHorizontal: 40,
    paddingVertical: 15,
    alignItems: 'center',
    marginRight: 5,
    justifyContent: 'center',
    backgroundColor: '#BDCAF480',
  },
  createProjectText: {
    alignItems: 'center',
    color: Color.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  editContainer: {
    borderRadius: 14,
    padding: 15,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDCAF480',
  },
});
