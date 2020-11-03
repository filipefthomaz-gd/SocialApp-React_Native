import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper'

const Skip = ({... props}) => (
  <Button
    title = 'Skip'
    color='#000000'
    />
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      //SkipButtonComponent={Skip}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages ={[
        {
          backgroundColor: '#a6e3d0',
          image: <Image source={require('../assets/Onboarding2.png')}/>,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/Onboarding2.png')} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thouoghts With Similar Kind of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/Onboarding2.png')} />,
          title: 'Become the Star',
          subtitle: 'Let The Spot Light Capture You',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
