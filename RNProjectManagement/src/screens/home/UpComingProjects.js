import * as React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, Image, ImageBackground } from 'react-native';
import { Color } from '../../config';

const projects = [
  {
    name: 'Plant Shop App Design',
    member: {
      size: 6
    },
    startDate: "3 June, 10:35 AM"
  },
  {
    name: 'Travel App Test',
    member: {
      size: 3
    },
    startDate: "3 June, 10:35 AM"
  },
  {
    name: 'Study App Test',
    member: {
      size: 12
    },
    startDate: "3 August, 10:35 AM"
  }
];

const screenWidth = Dimensions.get('window').width;
const projectWidth = screenWidth / 2;
const spaceWidth = 10;
const totalProjectWidth = projectWidth + spaceWidth;

export default function UpComingProjects() {

  const renderProject = ({ item }) => {
    return (
      <View style={styles.projectCard}>
        <ImageBackground
          source={require('../../assets/images/project.jpg')}
          imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          style={styles.projectImage}
        />
        <View style={styles.projectInfo}>
          <Text style={styles.projectName}>{item.name}</Text>
          <Text style={styles.projectMemberSize}>{`${item.member.size} Team Members`}</Text>
          <Text style={styles.projectStartDate}>{item.startDate}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Upcoming Projects</Text>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>{projects.length}</Text>
        </View>
      </View>
      <FlatList
        data={projects}
        horizontal
        style={styles.projectList}
        pagingEnabled
        snapToAlignment='start'
        snapToInterval={totalProjectWidth}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 2,  }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={renderProject}
        ItemSeparatorComponent={() => (
          <View style={{ width: spaceWidth }} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: Color.white,
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    minWidth: 26,
    minHeight: 26,
    backgroundColor: '#BDCAF480',
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center'
  },
  total: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.white,
  },
  projectList: {
    marginTop: 20,
  },
  projectCard: {
    width: projectWidth,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 12,
    shadowOpacity: 1.0,
    elevation: 1,
  },
  projectImage: {
    height: 70,
    elevation: 1,
  },
  projectInfo: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#6887F0',
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 0.5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 1,
  },
  projectName: {
    fontSize: 14,
    color: Color.white,
    fontWeight: '700',
  },
  projectMemberSize: {
    fontSize: 12,
    color: Color.white,
  },
  projectStartDate: {
    fontSize: 10,
    color: '#F1F5FE90',
  }
})