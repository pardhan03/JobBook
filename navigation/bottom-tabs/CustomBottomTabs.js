import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CustomBottomTabs = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      {state.routes.map((tab, index) => {
        console.log('tab', tab);
        const color = state.index == index ? 'blue' : 'black';
        return (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              gap: 10,
              borderTopWidth: state.index == index ? 2 : 0,
              borderTopColor: 'blue',
              height: '100%',
              width: '20%',
              justifyContent: 'center',
              backgroundColor: state.index == index ? '#f2f2f2' : 'white',
            }}
            onPress={() => {
              navigation.navigate(tab.name);
            }}>
            <Image
              source={
                tab.name == 'Jobs'
                  ? require('../../images/jobs.png')
                  : tab.name == 'bookmarks'
                  ? require('../../images/bookmark.png')
                  : require('../../images/bookmark.png')
              }
              style={{width: 20, height: 20, tintColor: color}}
            />
            <Text style={{color: color}}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabs;