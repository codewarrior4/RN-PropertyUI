import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Styles } from '../Pages/Styles';
import SwiperComponent from '../Components/SwiperComponent';
import Stars from 'react-native-stars'
import { Icon } from 'native-base';

export default function Detail() {
  return (
   <ScrollView showsVerticalScrollIndicator={false} style={Styles.DetailContainer}>
     <View style={Styles.SwiperContent}>
      <SwiperComponent />
     </View>

     <View style={Styles.DetailContent}>
        <View style={{width:'65%'}}>
          <Text style={Styles.DetailSubText}>Two Bed Room Apartment</Text>
        </View>
        <View style={{width:'35%'}}>
          <Text style={Styles.ratings}>Ratings</Text>
          <View style={{alignItems:'center',flexDirection:'row'}}>
            <Stars 
              default={4}
              count={5}
              half={true}
              starSize={17}
              fullStar={<Icon name='md-star' type='Ionicons' size={20} style={Styles.myStar} />}
              halfStar={<Icon name='md-star-half' type='Ionicons' size={20} style={Styles.myStar} />}
              emptyStar={<Icon name='md-star-outline' type='Ionicons' size={20} style={Styles.myStar} />}
              />
          </View>
        </View>
      </View>
      <Text style={style.price}>
        R$ 1.200,20
      </Text>
      <Text style={style.description}>
      Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35 }}>
      <View style={style.slide}>
        <Image
        source={require('../assets/5.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={style.slide}>
        <Image
        source={require('../assets/6.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={style.slide}>
        <Image
        source={require('../assets/2.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>
      <View style={style.slide}>
        <Image
        source={require('../assets/5.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>
    </ScrollView>
   </ScrollView>
  )
}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF'
  },
  price:{
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#000'
  },
  description:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    color: '#b3aeae',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },
  slide:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  }
});