

import React from 'react';
import {
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Jobs from './screens/Jobs';
import BottomTabNavigator from './navigation/bottom-tabs/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <NavigationContainer>
      <BottomTabNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
