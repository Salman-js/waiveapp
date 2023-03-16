import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import React, { useRef } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import { IconButton, Pressable } from '@react-native-material/core';
import { List, TextInput } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const HomeScreen = ({ navigation }) => {
  return (
    <View className='pt-12 bg-white h-full'>
      <Text className='text-5xl font-light text-black mt-16 tracking-tighter mx-6'>
        Waive
      </Text>
      <View className='w-full px-6 h-14'>
        <GooglePlacesAutocomplete
          placeholder='Addis Ababa, Ethiopia'
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          query={{
            key: 'AIzaSyDBPs66xCKmXvYGMU72J34ngnYkEzFWMaY',
            language: 'en',
          }}
        />
      </View>
      <View className='w-full flex flex-row justify-start space-x-3 py-3 px-6'>
        <View className='w-2/5 rounded-lg bg-slate-200 overflow-hidden'>
          <Pressable
            style={tw.style('w-full flex items-start justify-center p-5')}
            onPress={() => navigation.navigate('Map')}
          >
            <Image
              source={{
                uri: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png',
              }}
              className='w-24 h-20'
            />
            <View className='space-y-2 mt-2'>
              <Text className='text-lg font-extrabold text-gray-600'>
                Get a ride
              </Text>
              <Ionicons name='arrow-forward-circle' size={35} />
            </View>
          </Pressable>
        </View>
        <View className='w-2/5 rounded-lg bg-slate-200 overflow-hidden'>
          <Pressable
            style={tw.style('w-full flex items-start justify-center p-5')}
          >
            <Image
              source={{
                uri: 'https://o.remove.bg/downloads/d10540b7-76bc-4c26-8abd-0fc50c9c3621/takeaway-hamburger-paper-bag-flat-illustration_124715-575-removebg-preview.png',
              }}
              className='w-20 h-20 mix-blend-screen'
            />
            <View className='space-y-2 mt-2'>
              <Text className='text-lg font-extrabold text-gray-600'>
                Order a meal
              </Text>
              <Ionicons name='arrow-forward-circle' size={35} />
            </View>
          </Pressable>
        </View>
      </View>
      <List.Item
        title='Home'
        description='Bethel, Peach Cafe'
        left={(props) => (
          <Icon
            name='map-marker-circle'
            {...props}
            color='#525d8c'
            size={35}
            style={tw.style('my-auto ml-6')}
          />
        )}
        style={tw.style('text-gray-700 mt-3 w-full bg-white')}
        titleStyle={tw.style('text-gray-700 text-lg font-bold')}
        onPress={() => console.log('')}
      />
      <List.Item
        title='Office'
        description='Bethel, Peach Cafe'
        left={(props) => (
          <Icon
            name='map-marker-circle'
            {...props}
            color='#525d8c'
            size={35}
            style={tw.style('my-auto ml-6')}
          />
        )}
        style={tw.style('text-gray-700 w-full bg-white')}
        titleStyle={tw.style('text-gray-700 text-lg font-bold')}
        onPress={() => console.log('')}
      />
    </View>
  );
};

export default HomeScreen;
