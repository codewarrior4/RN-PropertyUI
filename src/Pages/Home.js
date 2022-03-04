import React from 'react';
import { View,TextInput,Text, ScrollView, Image, Pressable } from 'react-native';
import { Styles } from './Styles';
import { Icon,Item,Input } from 'native-base';
import News from '../Components/News';
import HomeComponent from '../Components/HomeComponent';
import Recommended from '../Components/Recommended';

const Home = ({navigation}) => {
  return (
      <ScrollView showsHorizontalScrollIndicator={false}
        style={Styles.bgColor}
      >
        <View style={Styles.header}>
          <View style={Styles.inputArea}>
            <Icon name='search' type='FontAwesome' fontSize={20} color='#aaa' />
            <TextInput placeholder='What are you lookiing for ?' placeholderTextColor="#aaa"  style={Styles.input} />
          </View>
        </View>

        <View style={Styles.titleHeader}>
            <Text style={Styles.title}>News</Text>
        </View>

        <ScrollView 
          style={Styles.pdH15} 
          horizontal    
          showsHorizontalScrollIndicator={false}>
            
            <News cover={require('../assets/1.jpg')}
              name="House One"
              price='40,000'
              description="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services"  
              onPress ={()=>{navigation.navigate('detail')}}
            />
            <News cover={require('../assets/2.jpg')}
              name="House Two"
              price='50,000'
              description="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services"  
              onPress ={()=>{navigation.navigate('detail')}}
            />
            <News cover={require('../assets/3.jpg')}
              name="House Three"
              price='90,000'
              description="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services"  
              onPress ={()=>{navigation.navigate('detail')}}
            />
            <News cover={require('../assets/4.jpg')}
              name="House Four"
              price='200,000'
              description="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services"  
              onPress ={()=>{navigation.navigate('detail')}}
            />
            <News cover={require('../assets/5.jpg')}
              name="House Five"
              price='240,000'
              description="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services"  
              onPress ={()=>{navigation.navigate('detail')}}
            />
        </ScrollView>

        <View style={Styles.close}>
          <Text style={[Styles.title,{marginTop:20}]}>Close to you</Text>
        </View>

          
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={Styles.pdH15} >
          
          <HomeComponent onPress ={()=>{navigation.navigate('detail')}}
            description={'Over 39,000 people work for us in more than 70'}
            price={'40,000'}
            title='Close 1'
            source={require('../assets/6.jpg')} />
          <HomeComponent onPress ={()=>{navigation.navigate('detail')}}
            description={'Over 39,000 people work for us in more than 70'}
            price={'400,000'}
            title='Close 1'
            source={require('../assets/7.jpg')} />
          <HomeComponent onPress ={()=>{navigation.navigate('detail')}}
            description={'Over 39,000 people work for us in more than 70'}
            price={'190,000'}
            title='Close 1'
            source={require('../assets/8.jpg')} />
          <HomeComponent onPress ={()=>{navigation.navigate('detail')}}
            description={'Over 39,000 people work for us in more than 70'}
            price={'9,000'}
            title='Close 1'
            source={require('../assets/9.jpg')} />
        </ScrollView>

        <View style={Styles.close}>
          <Text style={[Styles.title,{marginTop:20}]}>Recommended Properties</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={Styles.pdH15} >
          
          <Recommended
            cover={require('../assets/5.jpg')}
            house="Two Bed Room Flat"
            offer="25%"
            onPress ={()=>{navigation.navigate('detail')}}
          />
          <Recommended
            cover={require('../assets/6.jpg')}
            house="Bungalow"
            offer="35%"
            onPress ={()=>{navigation.navigate('detail')}}
          />
          <Recommended
            cover={require('../assets/3.jpg')}
            house="Three Bed Room Flat"
            offer="15%"
            onPress ={()=>{navigation.navigate('detail')}}
          />
          <Recommended
            cover={require('../assets/4.jpg')}
            house="A room Apartment"
            offer="40%"
            onPress ={()=>{navigation.navigate('detail')}}
          />
          <Recommended
            cover={require('../assets/7.jpg')}
            house="Four Bed Room Duplex"
            offer="25%"
            onPress ={()=>{navigation.navigate('detail')}}
          />
        </ScrollView>
      </ScrollView>
  )
}

export default Home;
