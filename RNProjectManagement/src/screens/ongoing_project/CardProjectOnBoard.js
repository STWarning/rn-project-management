import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Color } from '../../config';

// const project = {
//   index: 1,
//   name: 'Ui Progress Meeting',
//   time: 'Today, 10:35 AM',
//   author: 'me',
// };

export default function CardProjectOnBoard({ project }) {
  console.log(`card ${project}`)
  const ProjectInfo = () => {
    return (
      <View style={styles.projectInfoContainer}>
        <Text style={styles.projectTitle}>{project.name}</Text>
        <Text style={styles.projectTime}>{project.time}</Text>
        <Text style={styles.projectAuthor}>
          {`Created by ${project.author.name}`}
        </Text>
        <View style={styles.projectIndexContainer}>
          {/* <Text style={styles.index}>{project.index}</Text> */}
          <Text style={styles.index}>1</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={require('../../assets/images/project.jpg')}
          style={styles.projectImage}
          imageStyle={styles.projectImageStyle}
        />
        <ProjectInfo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  cardContainer: {
    alignItems: 'center',
  },
  projectImage: {
    marginTop: 30,
    alignSelf: 'stretch',
    height: 160,
  },
  projectImageStyle: {
    resizeMode: 'cover',
    borderRadius: 14,
  },
  projectInfoContainer: {
    position: 'absolute',
    left: 30,
    right: 30,
    paddingLeft: 15,
    paddingRight: 15,
    bottom: -50,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 14,
    backgroundColor: '#6887F0',
    justifyContent: 'space-around',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
  },
  projectTime: {
    marginTop: 10,
    fontSize: 13,
    color: '#FFFFFF80',
  },
  projectAuthor: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.white,
  },
  projectIndexContainer: {
    position: 'absolute',
    right: 20,
    minWidth: 30,
    bottom: 45,
    marginLeft: 20,
    minHeight: 30,
    backgroundColor: '#BDCAF480',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  index: {
    color: '#FFFFFF',
  },
});
