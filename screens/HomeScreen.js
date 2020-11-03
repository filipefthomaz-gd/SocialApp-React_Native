import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'

import PostCard from '../components/PostCard';

import { Container } from '../styles/FeedStyles';

const Posts = [
  {
    id: '1',
    userName: 'Filipe Thomaz',
    userImg: require('../assets/users/user-3.png'),
    postTime: '4 min ago',
    post: 'Hi everyone!\n\nThis is my fantastic piano! What do you guys think of it?',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-2.png'),
    postTime: '2 hours ago',
    post: 'Hey there! Just trying the brand new RN Social App!',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
]

const HomeScreen = () => {
  return (
    <Container>
      <FlatList
        data = {Posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator = {false}
      />
    </Container>
  );
}

export default HomeScreen;
