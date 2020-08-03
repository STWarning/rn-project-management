import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import { Text, Avatar } from 'react-native-paper';
import { Color } from '../../config';

const projects = [
  {
    name: 'Ui Progress Meeting',
    time: 'Tuesday, 10:35 AM',
    users: [
      {
        name: 'An',
        avatar: require('../../assets/images/avatar_1.png'),
      },
      {
        name: 'An2',
        avatar: require('../../assets/images/avatar_1.png'),
      },
      {
        name: 'An3',
        avatar: require('../../assets/images/avatar_1.png'),
      },
    ],
  },
  {
    name: 'Product Report',
    time: 'Tuesday, 10:35 AM',
    users: [
      {
        name: 'An',
        avatar: require('../../assets/images/avatar_1.png'),
      },
      {
        name: 'An2',
        avatar: require('../../assets/images/avatar_1.png'),
      },
      {
        name: 'An3',
        avatar: require('../../assets/images/avatar_1.png'),
      },
    ],
  },
  {
    name: 'Product Report 1',
    time: 'Tuesday, 10:35 AM',
    users: [
      {
        name: 'An',
        avatar: require('../../assets/images/avatar_1.png'),
      },
    ],
  },
  {
    name: 'Product Report 2',
    time: 'Tuesday, 10:35 AM',
    users: [
      {
        name: 'An',
        avatar: require('../../assets/images/avatar_1.png'),
      },
    ],
  },
  {
    name: 'Product Report 3',
    time: 'Tuesday, 10:35 AM',
    users: [
      {
        name: 'An',
        avatar: require('../../assets/images/avatar_1.png'),
      },
    ],
  },
  {
    name: 'Product Report 4',
    time: 'Tuesday, 10:35 AM',
    users: [
      {
        name: 'An',
        avatar: require('../../assets/images/avatar_1.png'),
      },
    ],
  },
];

const windowWidth = Dimensions.get('window').width;
const separatorWidth = 20;
const cardWidth = windowWidth * 0.7;
const cardWidthFull = cardWidth + separatorWidth;

export default function ProjectList({ onProjectPressed }) {
  const [page, setPage] = React.useState(0);

  const onScroll = ({ nativeEvent }) => {
    const currentPage = Math.round(nativeEvent.contentOffset.x / cardWidthFull);
    setPage(currentPage);
  };

  const renderProjectCard = ({ item, index }) => {
    const isCurrentPage = page === index;
    return (
      <View
        style={{
          justifyContent: 'center',
          height: 170,
          alignItems: 'flex-start',
        }}>
        <Pressable
          onPress={() => onProjectPressed(item)}
          style={[
            ProjectListStyle.projectCard,
            isCurrentPage && {
              height: 150,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
              elevation: 8,
            },
          ]}>
          <View style={ProjectListStyle.projectIndexContainer}>
            <Text style={ProjectListStyle.total}>{index}</Text>
          </View>
          <View style={ProjectListStyle.projectInfo}>
            <Text
              style={[
                ProjectListStyle.projectName,
                isCurrentPage && { fontSize: 18, fontWeight: 'bold' },
              ]}>
              {item.name}
            </Text>
            <Text style={ProjectListStyle.time}>{item.time}</Text>
          </View>
          <View style={ProjectListStyle.memberContainer}>
            {item.users &&
              item.users.slice(0, 2).map((user, index) => {
                console.log(`index ${index}`);
                return (
                  <Avatar.Image
                    key={user.name}
                    size={24}
                    source={require('../../assets/images/avatar_1.png')}
                  />
                );
              })}
            {item.users && item.users.length > 2 && (
              <Avatar.Text
                style={{ backgroundColor: '#FFF' }}
                labelStyle={{ color: '#728DE4', fontWeight: '700' }}
                size={24}
                label={`${item.users.length - 2}+`}
              />
            )}
            <Text style={ProjectListStyle.workingWith}>Working with</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={ProjectListStyle.container}>
      <View style={ProjectListStyle.titleContainer}>
        <Text style={ProjectListStyle.ongoing}>Ongoing Projects</Text>
        <View style={ProjectListStyle.totalContainer}>
          <Text style={ProjectListStyle.total}>{projects.length}</Text>
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        style={ProjectListStyle.cardListContainer}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        snapToAlignment="center"
        snapToInterval={cardWidthFull}
        pagingEnabled
        ItemSeparatorComponent={() => (
          <View style={{ width: separatorWidth }} />
        )}
        onScroll={onScroll}
        horizontal
        decelerationRate="fast"
        data={projects}
        renderItem={renderProjectCard}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const ProjectListStyle = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  titleContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  ongoing: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
  },
  totalContainer: {
    minWidth: 26,
    minHeight: 26,
    backgroundColor: '#BDCAF480',
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  total: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.white,
  },
  cardListContainer: {
    marginTop: 10,
    marginLeft: -10,
  },
  projectCard: {
    height: 140,
    width: cardWidth,
    backgroundColor: '#728DE4',
    borderRadius: 18,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  projectInfo: {
    marginLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  projectName: {
    color: Color.white,
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    color: Color.white,
    fontSize: 12,
  },
  projectIndexContainer: {
    marginTop: 10,
    minWidth: 24,
    marginLeft: 20,
    minHeight: 24,
    backgroundColor: '#BDCAF480',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  memberContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#6887F0',
    borderBottomStartRadius: 18,
    borderBottomEndRadius: 18,
    position: 'relative',
    bottom: 0,
  },
  workingWith: {
    color: '#F1F5FE90',
    marginLeft: 10,
    fontSize: 11,
  },
});
