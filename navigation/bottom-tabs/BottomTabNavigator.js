import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Jobs from '../../screens/Jobs'
import CustomBottomTabs from './CustomBottomTabs'

const Bottom=createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Bottom.Navigator
    screenOptions={{
      tabBarStyle: {
        height: 90,
      },
    }}
    tabBar={props => <CustomBottomTabs {...props} />}>
    <Bottom.Screen
      name="Jobs"
      component={Jobs}
      options={{
        tabBarIcon: ({size, color}) => {
          return (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={require('../../images/home.png')}
            />
          );
        },
      }}
    />
    <Bottom.Screen
      name="bookmarks"
      component={Jobs}
      options={{
        tabBarIcon: ({size, color}) => {
          return (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={require('../../images/home.png')}
            />
          );
        },
      }}
    />
  </Bottom.Navigator>
  )
}

export default BottomTabNavigator