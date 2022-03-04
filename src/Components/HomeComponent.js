import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Styles } from '../Pages/Styles'

export default function HomeComponent(props) {
  return (
    <>
      <TouchableOpacity onPress={props.onPress} style={Styles.homeContainer}>
        <View>
            <Image source={props.source} style={Styles.homeCover} />
        </View>
        <View style={Styles.homeContent}>
          <Text style={[Styles.sm_title,{marginHorizontal:5}]}>{props.description}</Text>
          <Text style={{paddingVertical:1,color:'black',fontWeight:'bold'}}> ₦ {props.price} </Text>
        </View>
      </TouchableOpacity>
    
    </>
  )
}

const styles = StyleSheet.create({})