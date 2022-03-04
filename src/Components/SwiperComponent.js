import React from 'react';
import { View,Text,Image } from 'react-native';
import { Styles } from '../Pages/Styles';
import Swiper from 'react-native-swiper';

const SwiperComponent = () => {
  return (
      <Swiper
        showsButtons={true}
        style={Styles.Swiper}
        autoplay={true}
        dotStyle={{
            backgroundColor:'black',
            borderColor:'black',
            borderWidth:1,
            width:10,
            height:10,
            borderRadius:10
        }}
        activeDotColor="white"
        activeDotStyle={{
            borderColor:'black',
            borderWidth:1,
            width:10,
            height:10,
            borderRadius:10
        }}
      >
          <View style={Styles.slide}>
            <Image
                source={require('../assets/3.jpg')}
                style={{width:'100%',height:400}}
            />
          </View>
          <View style={Styles.slide}>
            <Image
                source={require('../assets/4.jpg')}
                style={{width:'100%',height:400}}
            />
          </View>
          <View style={Styles.slide}>
            <Image
                source={require('../assets/5.jpg')}
                style={{width:'100%',height:400}}
            />
          </View>
          <View style={Styles.slide}>
            <Image
                source={require('../assets/2.jpg')}
                style={{width:'100%',height:400}}
            />
          </View>
      </Swiper>
  )
}

export default SwiperComponent;