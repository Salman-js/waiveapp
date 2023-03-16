import { View, Text, Image, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { IconButton, Surface } from '@react-native-material/core';
import Icon from '@expo/vector-icons/Feather';
import tw from 'twrnc';
import { List } from 'react-native-paper';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View className='bg-cyan-500 h-full'>
      <SafeAreaView className='absolute top-16 left-6 z-40'>
        <IconButton
          icon={(props) => (
            <Icon name='menu' {...props} size={25} color='black' />
          )}
          style={tw.style('bg-white')}
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 9.006357285793852,
          longitude: 38.684153037630544,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={tw.style('z-0 flex w-full', {
          height: '100%',
        })}
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: 9.006357285793852,
            longitude: 38.684153037630544,
          }}
          identifier='origin'
          title='Origin'
          pinColor='#000000'
        />
      </MapView>
      <SafeAreaView className='absolute bottom-0 w-full z-40 bg-white'>
        <List.Item
          title='Salman Mohammed'
          description='Delivery person'
          left={(props) => (
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/007/557/606/small/flat-design-of-delivery-man-with-motorcycle-illustration-vector.jpg',
              }}
              style={tw.style('w-14 h-14 rounded-full ml-3')}
            />
          )}
          right={(props) => (
            <Text
              {...props}
              className='text-base font-light text-blue-400 my-auto'
            >
              Call
            </Text>
          )}
          style={tw.style('text-gray-700 my-4 w-full bg-white')}
          titleStyle={tw.style('text-gray-700')}
          onPress={() => console.log('')}
        />
      </SafeAreaView>
    </View>
  );
};

export default MapScreen;
