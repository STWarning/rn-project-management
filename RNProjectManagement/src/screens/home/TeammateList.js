import * as React from 'react';
import { View, StyleSheet, Text, FlatList, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';
import AppIcons from '../../widgets/AppIcon';
import { Color } from '../../config';

const teammates = [
  {
    name: 'An',
    avatar: require('../../assets/images/avatar_1.png'),
  },
  {
    name: 'An1',
    avatar: require('../../assets/images/avatar_1.png'),
  },
  {
    name: 'An2',
    avatar: require('../../assets/images/avatar_1.png'),
  },
];
export default function TeammateList() {
  const renderTeammate = ({ item }) => {
    return (
      <View style={styles.teammateContainer}>
        <Avatar.Image
          style={styles.teammateAvatar}
          size={36}
          source={item.avatar}
        />
        <Text style={styles.teammateName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My teammates</Text>
        <Pressable onPress={() => alert('Add Teammate')}>
          <View style={styles.add}>
            <AppIcons size={13} name="user-plus" />
          </View>
        </Pressable>
      </View>
      <FlatList
        data={teammates}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5, marginTop: 10 }}
        renderItem={renderTeammate}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    marginLeft: 15,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: '#E9F5FE',
    fontSize: 14,
    fontWeight: '700',
  },
  teammateContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teammateName: {
    fontSize: 14,
    marginTop: 4,
    color: Color.white,
  },
  teammateAvatar: {
    backgroundColor: 'transparent',
  },
  add: {
    height: 26,
    width: 26,
    borderRadius: 13,
    paddingLeft: 2,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5579F8',
  },
});
