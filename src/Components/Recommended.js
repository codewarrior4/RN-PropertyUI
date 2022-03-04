import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Styles } from '../Pages/Styles'
import { Badge } from 'native-base'

export default function Recommended(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
        <ImageBackground
            source={props.cover}
            style={Styles.TipContainer}
            blurRadius={3}

        >
            <Text style={Styles.TipHouseText}>{props.house}</Text>
            <Badge><Text  style={Styles.TipDescription}>{props.offer} Off</Text></Badge>
        </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})