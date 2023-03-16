import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import React, { useRef } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import { IconButton, Pressable } from '@react-native-material/core';
import { TextInput } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View className='pt-14 pb-28 bg-white h-full px-6'>
      <Text className='text-6xl font-light text-black mt-16 tracking-tighter'>
        WAIVE
      </Text>
      <TextInput
        theme={{
          roundness: 10,
          mode: 'adaptive',
          colors: {
            onSurface: 'black',
            background: 'white',
            border: '#ffffff',
          },
        }}
        blurOnSubmit
        focusable={false}
        autoFocus={false}
        placeholder='Addis Ababa, Ethiopia'
        mode='standard'
        underlineColor='#ffffff'
        textColor='black'
        style={tw.style('bg-white w-full border-0')}
      />
      <View className='w-full flex flex-row justify-start space-x-3 py-3'>
        <View className='w-2/5 rounded-lg bg-slate-200 overflow-hidden'>
          <Pressable
            style={tw.style('w-full flex items-start justify-center p-5')}
          >
            <Image
              source={{
                uri: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png',
              }}
              className='w-20 h-20'
            />
            <View className='space-y-2 mt-2'>
              <Text className='text-lg font-extrabold text-gray-600'>
                Get a ride
              </Text>
              <Ionicons name='arrow-forward-circle' size={35} />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
