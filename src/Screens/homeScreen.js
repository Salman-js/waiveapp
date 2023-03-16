import { View, Text, ScrollView, ImageBackground } from 'react-native';
import React, { useRef } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import { IconButton, Pressable } from '@react-native-material/core';

const HomeScreen = ({ navigation }) => {
  return (
    <View className='pt-14 pb-28 bg-white h-full px-2'>
      <View className='w-full flex flex-row justify-between px-1 mb-1'>
        <View className='rounded-lg overflow-hidden my-auto'>
          <Pressable style={tw.style('p-1 flex flex-row')}>
            <Icon
              name='map-marker-outline'
              size={25}
              color='#ddba20'
              style={tw.style('my-auto mr-2')}
            />
            <View>
              <Text className='font-extralight text-xs text-black mb-3 my-auto'>
                Destination
              </Text>
              <Text className='text-sm text-black mb-3 my-auto'>
                Current location
              </Text>
            </View>
            <Feather
              name='chevron-down'
              size={20}
              style={tw.style('ml-1 my-auto')}
              color='#939191'
            />
          </Pressable>
        </View>
        <IconButton
          icon={(props) => (
            <Ionicons
              name='receipt-outline'
              {...props}
              size={30}
              color='#ddba20'
            />
          )}
          style={tw.style('my-auto')}
          onPress={() => navigation.navigate('Orders')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
